import { Queue } from "bullmq"

export const redisConn = {
    connection: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT || '6379'),
        password: process.env.REDIS_PASSWORD
    },
}

export const SAPQueue = {
    "master item": new Queue("master item", redisConn)
};