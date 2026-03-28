import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = {
    "section": "Computer Awareness",
    "total_questions": 20,
    "questions": [
        {
            "q_no": 1,
            "question": "Which of the following is considered the brain of the computer?",
            "options": ["RAM", "Hard Disk", "CPU", "Motherboard"],
            "correct_option": "CPU"
        },
        {
            "q_no": 2,
            "question": "Which memory is volatile in nature?",
            "options": ["ROM", "Cache", "Hard Disk", "RAM"],
            "correct_option": "RAM"
        },
        {
            "q_no": 3,
            "question": "The smallest unit of data in a computer is",
            "options": ["Bit", "Byte", "Nibble", "Word"],
            "correct_option": "Bit"
        },
        {
            "q_no": 4,
            "question": "Which of the following is an example of an operating system?",
            "options": ["MS Word", "Linux", "Chrome", "Oracle"],
            "correct_option": "Linux"
        },
        {
            "q_no": 5,
            "question": "Which device is used to input textual data into a computer?",
            "options": ["Monitor", "Printer", "Keyboard", "Speaker"],
            "correct_option": "Keyboard"
        },

        {
            "q_no": 6,
            "question": "Which memory is fastest in a computer system?",
            "options": ["RAM", "ROM", "Cache", "Hard Disk"],
            "correct_option": "Cache"
        },
        {
            "q_no": 7,
            "question": "Which of the following is NOT an input device?",
            "options": ["Scanner", "Mouse", "Joystick", "Plotter"],
            "correct_option": "Plotter"
        },
        {
            "q_no": 8,
            "question": "The full form of ALU is",
            "options": [
                "Arithmetic Logic Unit",
                "Advanced Logic Unit",
                "Array Logic Unit",
                "Application Logic Unit"
            ],
            "correct_option": "Arithmetic Logic Unit"
        },
        {
            "q_no": 9,
            "question": "Which type of software is used to manage computer hardware?",
            "options": [
                "Application software",
                "System software",
                "Utility software",
                "Programming software"
            ],
            "correct_option": "System software"
        },
        {
            "q_no": 10,
            "question": "Which of the following is a high-level programming language?",
            "options": ["Machine language", "Assembly language", "C", "Binary code"],
            "correct_option": "C"
        },

        {
            "q_no": 11,
            "question": "What does HTTP stand for?",
            "options": [
                "Hyper Text Transfer Protocol",
                "High Text Transfer Protocol",
                "Hyperlink Transfer Program",
                "High Transfer Text Protocol"
            ],
            "correct_option": "Hyper Text Transfer Protocol"
        },
        {
            "q_no": 12,
            "question": "Which device is used to convert digital signals into analog signals?",
            "options": ["Router", "Modem", "Switch", "Repeater"],
            "correct_option": "Modem"
        },
        {
            "q_no": 13,
            "question": "Which of the following is an example of secondary storage?",
            "options": ["RAM", "Cache", "Hard Disk", "Register"],
            "correct_option": "Hard Disk"
        },
        {
            "q_no": 14,
            "question": "Which key is used to delete the character to the left of the cursor?",
            "options": ["Delete", "Backspace", "Enter", "Shift"],
            "correct_option": "Backspace"
        },
        {
            "q_no": 15,
            "question": "The process of starting a computer system is called",
            "options": ["Booting", "Loading", "Compiling", "Executing"],
            "correct_option": "Booting"
        },

        {
            "q_no": 16,
            "question": "Which of the following is an example of open-source software?",
            "options": ["Windows", "macOS", "Linux", "MS Office"],
            "correct_option": "Linux"
        },
        {
            "q_no": 17,
            "question": "Which memory stores the BIOS program?",
            "options": ["RAM", "ROM", "Cache", "Hard Disk"],
            "correct_option": "ROM"
        },
        {
            "q_no": 18,
            "question": "Which of the following is NOT a programming language?",
            "options": ["Python", "Java", "HTML", "Photoshop"],
            "correct_option": "Photoshop"
        },
        {
            "q_no": 19,
            "question": "Which software is used to create spreadsheets?",
            "options": ["MS Word", "MS Excel", "MS PowerPoint", "MS Paint"],
            "correct_option": "MS Excel"
        },
        {
            "q_no": 20,
            "question": "What does GUI stand for?",
            "options": [
                "Graphical User Interface",
                "General User Interface",
                "Graphical Utility Interface",
                "Global User Interface"
            ],
            "correct_option": "Graphical User Interface"
        }
    ]
};

async function main() {
    console.log('Starting seed for PGCET_MCA Computer Awareness...');

    // 1. Delete existing Computer Awareness questions for PGCET_MCA to ensure clean state
    const deleted = await prisma.question.deleteMany({
        where: {
            examType: 'PGCET_MCA',
            subject: 'Computer Awareness'
        }
    });

    console.log(`Deleted ${deleted.count} existing Computer Awareness questions.`);

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
                subject: 'Computer Awareness',
                examType: 'PGCET_MCA'
            }
        });
        count++;
    }

    console.log(`Successfully seeded ${count} Computer Awareness questions for PGCET_MCA.`);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
