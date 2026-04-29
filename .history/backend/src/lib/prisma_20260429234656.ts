import { PrismaPg } from '@prisma/adapter-pg';
import "dotenv/config";
import { PrismaClient } from '../../../src/generated/prisma/internal/class';


const connectionString = process.env.DATABASE_URL as string;

const adapter = new PrismaPg({ connectionString });

const prisma = new PrismaClient({
  adapter,
});

export { prisma };