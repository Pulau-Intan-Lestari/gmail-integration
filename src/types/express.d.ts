import 'express';
// import { User } from "../Models/User";
import { PrismaClient, sso_users } from "@prisma/client";

declare module 'express' {  
  interface Request {
    user?: sso_users;
    prisma: PrismaClient;
  }
}