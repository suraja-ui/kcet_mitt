const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
    console.log("Testing connection to Supabase...");
    try {
        await prisma.$connect();
        console.log("CONNECTED SUCCESS!");
        const count = await prisma.admin.count();
        console.log("Admin Count:", count);
    } catch (e) {
        console.error("CONNECTION FAILED:", e.message);
    } finally {
        await prisma.$disconnect();
    }
}

test();
