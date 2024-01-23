import express, { Request } from 'express';
import dotenv from 'dotenv';
import http from 'http';
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors'
import * as path from 'path';
import { sendEmailViaAgent, sendEmailViaAgentVNodeMailer } from './util/sendEmail';

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(cors({
  origin: "*",
  optionsSuccessStatus: 200
}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'html'));


// Routes
app.get('/send-email', async (req, res) => {
  try {
    // u can send it using ejs to generated formatted html..
    // await sendEmailViaAgentVNodeMailer(['cecep@pulauintanlestari.com', 'c3budiman@gmail.com'], 'Test Subject', '<h1>test from node js</h1>');
    await sendEmailViaAgent(['cecep@pulauintanlestari.com', 'c3budiman@gmail.com'], 'Test Subject', '<h1>test from node js</h1>');
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
    res.send('Failed to send email');
  }
});

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

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
