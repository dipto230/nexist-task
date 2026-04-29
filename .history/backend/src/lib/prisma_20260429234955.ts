import { PrismaClient } from '../../../src/generated/prisma/internal/class';


const globalForPrisma = global as any;

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}