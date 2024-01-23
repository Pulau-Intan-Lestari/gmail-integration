import WebSocket from "ws";
import http from 'http'
import { PrismaClient } from "@prisma/client";

const wsClients = new Map();
let activeConnections = 0;

export const initWsAndSocketIO = (
    wss: WebSocket.Server<typeof WebSocket, typeof http.IncomingMessage>,
    subscriptions: Map<any, any>,
    prisma: PrismaClient
) => {
    try {
        wss.on('connection', (ws) => {
            subscriptions.set(ws, new Set());
            activeConnections++; // Increment the connection count
            ws.on('message', async (message) => {
                const data = JSON.parse(message.toString())
                if (data?.subscribe) subscriptions.get(ws).add(data?.subscribe)
                if (data?.clientId) {
                    wsClients.set(data.clientId, ws);
                }

                if (data?.admin === '123456') {
                    const dataClients = Array.from(wsClients.keys());
                    const dataSubs = [];
                
                    subscriptions.forEach((value, key) => {
                        const subscriptionArray = Array.from(value);
                        dataSubs.push(subscriptionArray?.[0]);
                    });
                
                    ws.send(JSON.stringify({
                        dataClients,
                        dataSubs
                    }));
                }
            });

            ws.on('close', () => {
                activeConnections--;
                subscriptions.delete(ws);
                wsClients.forEach((value, key) => {
                    if (value === ws) {
                        wsClients.delete(key);
                    }
                });
            });
        });
    } catch (error) {
        console.log(error)
    }
}