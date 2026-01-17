import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const password = await bcrypt.hash('admin123', 10)

    // Upsert Admin
    const admin = await prisma.admin.upsert({
        where: { email: 'admin@mitt.edu.in' },
        update: {},
        create: {
            email: 'admin@mitt.edu.in',
            password,
        },
    })

    console.log({ admin })

    // Questions
    const subjects = ['Mathematics', 'Physics', 'Chemistry']
    for (const subject of subjects) {
        for (let i = 1; i <= 5; i++) {
            await prisma.question.create({
                data: {
                    text: `Sample ${subject} Question ${i}?`,
                    optionA: `Answer A for ${i}`,
                    optionB: `Answer B for ${i}`,
                    optionC: `Answer C for ${i}`,
                    optionD: `Answer D for ${i}`,
                    correctOption: 'A',
                    subject: subject,
                }
            })
        }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
