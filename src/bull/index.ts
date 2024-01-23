
import { Worker } from 'bullmq';
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv';
dotenv.config();
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379');
const conn = {
  connection: {
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: process.env.REDIS_PASSWORD
  }
}

const syncWorker1 = new Worker('master item', async (job) => {
  const prisma = new PrismaClient()

  await prisma.$disconnect()
}, conn);

const onComplete = async (job: any) => {
  console.log(`Job ${job?.id} completed successfully.`);
}
const onFailed = async (job: any, err: any) => {
  console.log(`Job ${job?.id} failed with error: ${err.message}`);
}

syncWorker1.on('completed', onComplete);
syncWorker1.on('failed', onFailed);


console.log('[LOG] worker started')