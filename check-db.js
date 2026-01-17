const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const phy = await prisma.question.count({ where: { subject: 'Physics' } });
    const chem = await prisma.question.count({ where: { subject: 'Chemistry' } });
    const math = await prisma.question.count({ where: { subject: 'Mathematics' } });

    console.log({ Physics: phy, Chemistry: chem, Mathematics: math });
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
