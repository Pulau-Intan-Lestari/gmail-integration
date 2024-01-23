import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';
dotenv.config();
import { ZodSchema } from "./src/zSchema/index";

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/app.ts'];
const doc = {
    info: {
        title: process.env.PROJECT_NAME,
        description: process.env.PROJECT_DESCRIPTION,
    },
    host: process.env.PROJECT_HOST ?? "localhost:9334",
    basePath: '/',
    schemes: ['http', 'https'],
    "@definitions": {
        ...ZodSchema.getAllJsonSchemas(),
    },
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    },
    security: [{ bearerAuth: [] }],
};

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);