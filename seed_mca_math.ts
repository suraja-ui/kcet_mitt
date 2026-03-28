import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = {
    "section": "Mathematics",
    "total_questions": 50,
    "questions": [
        {
            "q_no": 1,
            "question": "If the sum of the roots of the equation x² − 5x + k = 0 is equal to the product of its roots, then k is",
            "options": ["4", "5", "6", "7"],
            "correct_option": "5"
        },
        {
            "q_no": 2,
            "question": "If log₃(x − 1) + log₃(x − 3) = 2, then x is",
            "options": ["4", "5", "6", "7"],
            "correct_option": "5"
        },
        {
            "q_no": 3,
            "question": "The value of sin 30° + cos 60° is",
            "options": ["0", "1", "√2", "2"],
            "correct_option": "1"
        },
        {
            "q_no": 4,
            "question": "If A = [[1,2],[3,4]], then the determinant of A is",
            "options": ["-2", "2", "5", "10"],
            "correct_option": "-2"
        },
        {
            "q_no": 5,
            "question": "The slope of the line 3x − 2y + 6 = 0 is",
            "options": ["3/2", "2/3", "-3/2", "-2/3"],
            "correct_option": "3/2"
        },
        {
            "q_no": 6,
            "question": "If f(x) = x² − 3x + 2, then f(2) is",
            "options": ["0", "1", "2", "3"],
            "correct_option": "0"
        },
        {
            "q_no": 7,
            "question": "The number of solutions of the equation |x − 3| = 5 is",
            "options": ["0", "1", "2", "3"],
            "correct_option": "2"
        },
        {
            "q_no": 8,
            "question": "If the radius of a circle is doubled, its area becomes",
            "options": ["2 times", "3 times", "4 times", "8 times"],
            "correct_option": "4 times"
        },
        {
            "q_no": 9,
            "question": "The value of tan 45° + sec 60° is",
            "options": ["1", "2", "3", "4"],
            "correct_option": "3"
        },
        {
            "q_no": 10,
            "question": "If two angles of a triangle are 45° and 55°, the third angle is",
            "options": ["70°", "75°", "80°", "85°"],
            "correct_option": "80°"
        },

        {
            "q_no": 11,
            "question": "The mean of first 10 natural numbers is",
            "options": ["5", "5.5", "6", "10"],
            "correct_option": "5.5"
        },
        {
            "q_no": 12,
            "question": "If A and B are independent events, then P(A ∩ B) equals",
            "options": ["P(A)+P(B)", "P(A)−P(B)", "P(A)×P(B)", "P(A)/P(B)"],
            "correct_option": "P(A)×P(B)"
        },
        {
            "q_no": 13,
            "question": "The probability of getting a head when a fair coin is tossed is",
            "options": ["0", "1/4", "1/2", "1"],
            "correct_option": "1/2"
        },
        {
            "q_no": 14,
            "question": "The roots of the equation x² + 4x + 4 = 0 are",
            "options": ["Real and distinct", "Real and equal", "Imaginary", "Irrational"],
            "correct_option": "Real and equal"
        },
        {
            "q_no": 15,
            "question": "If sin θ = 1/2 and θ is acute, then θ equals",
            "options": ["30°", "45°", "60°", "90°"],
            "correct_option": "30°"
        },

        {
            "q_no": 16,
            "question": "The distance between points (1,2) and (4,6) is",
            "options": ["4", "5", "√25", "√20"],
            "correct_option": "5"
        },
        {
            "q_no": 17,
            "question": "The value of ∫ 2x dx is",
            "options": ["x²", "2x²", "x² + C", "2x + C"],
            "correct_option": "x² + C"
        },
        {
            "q_no": 18,
            "question": "If a matrix has more rows than columns, it is called",
            "options": ["Square matrix", "Row matrix", "Column matrix", "Rectangular matrix"],
            "correct_option": "Rectangular matrix"
        },
        {
            "q_no": 19,
            "question": "The HCF of 24 and 36 is",
            "options": ["6", "12", "18", "24"],
            "correct_option": "12"
        },
        {
            "q_no": 20,
            "question": "The LCM of 8 and 12 is",
            "options": ["12", "16", "24", "36"],
            "correct_option": "24"
        },

        {
            "q_no": 21,
            "question": "The standard deviation is a measure of",
            "options": ["Central tendency", "Dispersion", "Skewness", "Probability"],
            "correct_option": "Dispersion"
        },
        {
            "q_no": 22,
            "question": "If x:y = 3:5 and y = 20, then x is",
            "options": ["10", "12", "15", "18"],
            "correct_option": "12"
        },
        {
            "q_no": 23,
            "question": "The value of cos 0° is",
            "options": ["0", "1", "-1", "∞"],
            "correct_option": "1"
        },
        {
            "q_no": 24,
            "question": "The number of permutations of 3 objects taken 2 at a time is",
            "options": ["3", "6", "9", "12"],
            "correct_option": "6"
        },
        {
            "q_no": 25,
            "question": "If the area of a square is 49 cm², the length of its side is",
            "options": ["5 cm", "6 cm", "7 cm", "8 cm"],
            "correct_option": "7 cm"
        },

        {
            "q_no": 26,
            "question": "The equation of a line parallel to x-axis is",
            "options": ["x = a", "y = b", "x + y = c", "xy = c"],
            "correct_option": "y = b"
        },
        {
            "q_no": 27,
            "question": "If A = {1,2,3} and B = {3,4}, then A ∩ B is",
            "options": ["{1,2}", "{3}", "{4}", "{1,4}"],
            "correct_option": "{3}"
        },
        {
            "q_no": 28,
            "question": "The sum of interior angles of a triangle is",
            "options": ["90°", "180°", "270°", "360°"],
            "correct_option": "180°"
        },
        {
            "q_no": 29,
            "question": "If the base of a triangle is doubled and height is halved, its area",
            "options": ["Doubles", "Halves", "Remains same", "Becomes zero"],
            "correct_option": "Remains same"
        },
        {
            "q_no": 30,
            "question": "The value of 7P2 is",
            "options": ["14", "21", "42", "49"],
            "correct_option": "42"
        },

        {
            "q_no": 31,
            "question": "If x³ = 8, then x equals",
            "options": ["1", "2", "3", "4"],
            "correct_option": "2"
        },
        {
            "q_no": 32,
            "question": "The median of the data 2, 4, 6, 8, 10 is",
            "options": ["4", "5", "6", "7"],
            "correct_option": "6"
        },
        {
            "q_no": 33,
            "question": "The value of tan 0° is",
            "options": ["0", "1", "∞", "-1"],
            "correct_option": "0"
        },
        {
            "q_no": 34,
            "question": "If the circumference of a circle is 22 cm, its radius is",
            "options": ["3.5 cm", "7 cm", "14 cm", "21 cm"],
            "correct_option": "3.5 cm"
        },
        {
            "q_no": 35,
            "question": "The degree of the polynomial 5x⁴ − 3x² + 7 is",
            "options": ["2", "3", "4", "5"],
            "correct_option": "4"
        },

        {
            "q_no": 36,
            "question": "If A ⊂ B, then A ∪ B equals",
            "options": ["A", "B", "A ∩ B", "∅"],
            "correct_option": "B"
        },
        {
            "q_no": 37,
            "question": "The probability of an impossible event is",
            "options": ["0", "1", "-1", "∞"],
            "correct_option": "0"
        },
        {
            "q_no": 38,
            "question": "If x + y = 10 and x − y = 2, then x equals",
            "options": ["4", "5", "6", "8"],
            "correct_option": "6"
        },
        {
            "q_no": 39,
            "question": "The value of log₁₀1 is",
            "options": ["0", "1", "-1", "10"],
            "correct_option": "0"
        },
        {
            "q_no": 40,
            "question": "The area of a rectangle with length 8 cm and breadth 5 cm is",
            "options": ["13", "30", "40", "80"],
            "correct_option": "40"
        },

        {
            "q_no": 41,
            "question": "The mode of the data 1, 2, 2, 3, 4 is",
            "options": ["1", "2", "3", "4"],
            "correct_option": "2"
        },
        {
            "q_no": 42,
            "question": "If a die is thrown once, the probability of getting an even number is",
            "options": ["1/6", "1/3", "1/2", "2/3"],
            "correct_option": "1/2"
        },
        {
            "q_no": 43,
            "question": "The sum of the angles of a quadrilateral is",
            "options": ["180°", "270°", "360°", "540°"],
            "correct_option": "360°"
        },
        {
            "q_no": 44,
            "question": "If the volume of a cube is 64 cm³, its side is",
            "options": ["2 cm", "3 cm", "4 cm", "5 cm"],
            "correct_option": "4 cm"
        },
        {
            "q_no": 45,
            "question": "The value of √81 is",
            "options": ["7", "8", "9", "10"],
            "correct_option": "9"
        },

        {
            "q_no": 46,
            "question": "If n(A) = 5 and n(B) = 7, then maximum n(A ∩ B) is",
            "options": ["0", "2", "5", "7"],
            "correct_option": "5"
        },
        {
            "q_no": 47,
            "question": "The derivative of x² is",
            "options": ["x", "2x", "x²", "2"],
            "correct_option": "2x"
        },
        {
            "q_no": 48,
            "question": "The value of sin²θ + cos²θ is",
            "options": ["0", "1", "2", "-1"],
            "correct_option": "1"
        },
        {
            "q_no": 49,
            "question": "If the perimeter of a square is 20 cm, its side is",
            "options": ["4 cm", "5 cm", "6 cm", "8 cm"],
            "correct_option": "5 cm"
        },
        {
            "q_no": 50,
            "question": "The sum of first 10 natural numbers is",
            "options": ["45", "50", "55", "60"],
            "correct_option": "55"
        }
    ]
};

async function main() {
    console.log('Starting seed for PGCET_MCA Mathematics...');

    // 1. Delete existing Mathematics questions for PGCET_MCA to ensure clean state
    const deleted = await prisma.question.deleteMany({
        where: {
            examType: 'PGCET_MCA',
            subject: 'Mathematics'
        }
    });

    console.log(`Deleted ${deleted.count} existing Mathematics questions.`);

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
                subject: 'Mathematics',
                examType: 'PGCET_MCA'
            }
        });
        count++;
    }

    console.log(`Successfully seeded ${count} Mathematics questions for PGCET_MCA.`);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
