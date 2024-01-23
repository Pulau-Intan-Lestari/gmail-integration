import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import http from 'http';
import WebSocket from 'ws';
dotenv.config();
import * as swaggerDocument from '../swagger-output.json';
import publicRoutes from './Routes/publicRoutes';
import protectedRoutes from './Routes/protectedRoutes';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import passport from 'passport';
import { jwtStrategy } from './passport';
import * as path from 'path';
import { initWsAndSocketIO } from './Utils/socketInit';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { SAPQueue } from './Utils/queue';

const app = express();
const prisma = new PrismaClient()

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');
const SAPQueueAdapters = Object.values(SAPQueue).map(q => new BullMQAdapter(q));

createBullBoard({
  queues: [...SAPQueueAdapters],
  serverAdapter: serverAdapter,
});

// Middleware
app.use('/admin/queues', serverAdapter.getRouter());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(cors({
  origin: "*",
  optionsSuccessStatus: 200
}))
app.use((req: Request, _res: Response, next: NextFunction) => {
  req.prisma = prisma;
  passport.use(jwtStrategy(req));
  next();
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'html'));


// Routes
app.use('/public', publicRoutes);
app.use('/api', protectedRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/images', express.static('images'));
app.use('/pdf', express.static('pdf'));
app.use('/signature', express.static('signature'));
app.use('/photo', express.static('photo'));

// Routes for Experimenting stuff
app.get('/', async (req: Request, res) => {
  try {
    return res.status(200).json({ info: "it works" });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      code: "1",
      error
    })
  }
});

// Create an HTTP server and WebSocket server
const server = http.createServer(app);
const wss = new WebSocket.Server({ server, path: "/socket-biasa" });
// subcription is using `type` params
// example for clients :
// { "subscribe" : 1 } 
// for servers :
// type 1 for broadcasting to a scale weighting test
// type 2 for broadcasting to a user notifications
// type 3 for broadcasting specific api use cases
const subscriptions = new Map();

// alternative if ws is having problems
// const io = new Server(server, {
//   path: '/socket-io',
//   cors: {
//     origin: "*",
//   }
// });

initWsAndSocketIO(wss, subscriptions, prisma)

// test if you set all socket server correctly
app.get('/socket', (req, res) => {
  res.render('socket');
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
