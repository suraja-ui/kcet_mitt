import { PrismaClient } from '@prisma/client'

let dbUrl = process.env.DATABASE_URL || '';
if (dbUrl && !dbUrl.includes('://')) {
    dbUrl = `postgresql://${dbUrl}`;
}

// Global cache for Prisma Client
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    datasources: {
        db: {
            url: dbUrl
        }
    }
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
