import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = {
    "section": "Analytical Ability",
    "total_questions": 10,
    "questions": [
        {
            "q_no": 1,
            "question": "If all roses are flowers and some flowers are red, which of the following conclusions is correct?",
            "options": [
                "All roses are red",
                "Some roses may be red",
                "No rose is red",
                "All red are roses"
            ],
            "correct_option": "Some roses may be red"
        },
        {
            "q_no": 2,
            "question": "In a certain code, CAT is written as DBU. How is DOG written in the same code?",
            "options": ["EPH", "DPH", "EOG", "COH"],
            "correct_option": "EPH"
        },
        {
            "q_no": 3,
            "question": "Find the missing number in the series: 2, 6, 12, 20, ?",
            "options": ["28", "30", "32", "36"],
            "correct_option": "30"
        },
        {
            "q_no": 4,
            "question": "If SOUTH is written as 34567 and NORTH as 67845, how is EAST written?",
            "options": ["1345", "1456", "1256", "1234"],
            "correct_option": "1456"
        },
        {
            "q_no": 5,
            "question": "A is the brother of B. B is the mother of C. How is A related to C?",
            "options": ["Father", "Uncle", "Brother", "Cousin"],
            "correct_option": "Uncle"
        },

        {
            "q_no": 6,
            "question": "If 1st January 2024 is a Monday, what day will be on 1st January 2025?",
            "options": ["Monday", "Tuesday", "Wednesday", "Thursday"],
            "correct_option": "Wednesday"
        },
        {
            "q_no": 7,
            "question": "Which number does not belong to the group?",
            "options": ["16", "25", "36", "49"],
            "correct_option": "25"
        },
        {
            "q_no": 8,
            "question": "If A = 1, B = 2, ..., Z = 26, what is the value of the word DOG?",
            "options": ["24", "26", "27", "28"],
            "correct_option": "26"
        },
        {
            "q_no": 9,
            "question": "Find the odd one out.",
            "options": ["Circle", "Square", "Triangle", "Cube"],
            "correct_option": "Cube"
        },
        {
            "q_no": 10,
            "question": "If x : y = 4 : 5 and y : z = 10 : 11, then x : z is",
            "options": ["8 : 11", "4 : 11", "40 : 55", "10 : 11"],
            "correct_option": "8 : 11"
        }
    ]
};

async function main() {
    console.log('Starting seed for PGCET_MCA Analytical Ability...');

    // 1. Delete existing Analytical Ability questions for PGCET_MCA to ensure clean state
    const deleted = await prisma.question.deleteMany({
        where: {
            examType: 'PGCET_MCA',
            subject: 'Analytical Ability'
        }
    });

    console.log(`Deleted ${deleted.count} existing Analytical Ability questions.`);

    // 2. Insert new questions
    let count = 0;
    for (const q of data.questions) {
        // Find correct option index
        const correctIdx = q.options.indexOf(q.correct_option);
        if (correctIdx === -1) {
            console.error(`ERROR: Correct option "${q.correct_option}" not found in options for Q${q.q_no}`);
            continue;
        }

        const correctChar = String.fromCharCode(65 + correctIdx); // 0->A, 1->B...

        await prisma.question.create({
            data: {
                text: q.question,
                optionA: q.options[0],
                optionB: q.options[1],
                optionC: q.options[2],
                optionD: q.options[3],
                correctOption: correctChar,
                subject: 'Analytical Ability',
                examType: 'PGCET_MCA'
            }
        });
        count++;
    }

    console.log(`Successfully seeded ${count} Analytical Ability questions for PGCET_MCA.`);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
