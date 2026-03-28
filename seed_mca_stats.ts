import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = {
    "section": "Statistics",
    "total_questions": 20,
    "questions": [
        {
            "q_no": 1,
            "question": "The arithmetic mean of the first 10 natural numbers is",
            "options": ["5", "5.5", "6", "10"],
            "correct_option": "5.5"
        },
        {
            "q_no": 2,
            "question": "Which measure of central tendency is most affected by extreme values?",
            "options": ["Mean", "Median", "Mode", "Range"],
            "correct_option": "Mean"
        },
        {
            "q_no": 3,
            "question": "The median of the data 3, 7, 5, 9, 11 is",
            "options": ["5", "7", "9", "11"],
            "correct_option": "7"
        },
        {
            "q_no": 4,
            "question": "The mode of the data 2, 4, 4, 6, 8 is",
            "options": ["2", "4", "6", "8"],
            "correct_option": "4"
        },
        {
            "q_no": 5,
            "question": "Standard deviation is a measure of",
            "options": ["Central tendency", "Dispersion", "Skewness", "Correlation"],
            "correct_option": "Dispersion"
        },

        {
            "q_no": 6,
            "question": "If all observations of a dataset are increased by 5, then the variance",
            "options": [
                "Increases",
                "Decreases",
                "Remains unchanged",
                "Becomes zero"
            ],
            "correct_option": "Remains unchanged"
        },
        {
            "q_no": 7,
            "question": "The sum of deviations of observations from their arithmetic mean is",
            "options": ["0", "1", "Maximum", "Minimum"],
            "correct_option": "0"
        },
        {
            "q_no": 8,
            "question": "Which of the following is not a measure of dispersion?",
            "options": ["Range", "Mean deviation", "Variance", "Mean"],
            "correct_option": "Mean"
        },
        {
            "q_no": 9,
            "question": "The quartile coefficient of skewness is based on",
            "options": ["Mean", "Median", "Quartiles", "Mode"],
            "correct_option": "Quartiles"
        },
        {
            "q_no": 10,
            "question": "In a perfectly symmetrical distribution, mean, median and mode are",
            "options": [
                "Different",
                "Mean > Median > Mode",
                "Mean < Median < Mode",
                "Equal"
            ],
            "correct_option": "Equal"
        },

        {
            "q_no": 11,
            "question": "If the variance of a dataset is zero, it means",
            "options": [
                "Data is widely spread",
                "All values are equal",
                "Mean is zero",
                "Median is zero"
            ],
            "correct_option": "All values are equal"
        },
        {
            "q_no": 12,
            "question": "The value of Karl Pearson’s coefficient of correlation lies between",
            "options": ["0 and 1", "-1 and +1", "-∞ and +∞", "0 and ∞"],
            "correct_option": "-1 and +1"
        },
        {
            "q_no": 13,
            "question": "A correlation coefficient of 0 indicates",
            "options": [
                "Perfect correlation",
                "Negative correlation",
                "No correlation",
                "Positive correlation"
            ],
            "correct_option": "No correlation"
        },
        {
            "q_no": 14,
            "question": "Which curve represents normal distribution?",
            "options": [
                "Rectangular curve",
                "J-shaped curve",
                "Bell-shaped curve",
                "U-shaped curve"
            ],
            "correct_option": "Bell-shaped curve"
        },
        {
            "q_no": 15,
            "question": "The total area under the normal distribution curve is",
            "options": ["0.5", "1", "2", "∞"],
            "correct_option": "1"
        },

        {
            "q_no": 16,
            "question": "If two variables move in the same direction, the correlation is",
            "options": [
                "Negative",
                "Zero",
                "Positive",
                "Perfect negative"
            ],
            "correct_option": "Positive"
        },
        {
            "q_no": 17,
            "question": "Which of the following is a positional average?",
            "options": ["Mean", "Median", "Mode", "Variance"],
            "correct_option": "Median"
        },
        {
            "q_no": 18,
            "question": "The mean deviation is minimum when deviations are taken from",
            "options": ["Mean", "Median", "Mode", "Range"],
            "correct_option": "Median"
        },
        {
            "q_no": 19,
            "question": "In a negatively skewed distribution",
            "options": [
                "Mean > Median > Mode",
                "Mean < Median < Mode",
                "Mean = Median = Mode",
                "Mean > Mode > Median"
            ],
            "correct_option": "Mean < Median < Mode"
        },
        {
            "q_no": 20,
            "question": "The coefficient of variation is used to measure",
            "options": [
                "Absolute dispersion",
                "Relative dispersion",
                "Central tendency",
                "Correlation"
            ],
            "correct_option": "Relative dispersion"
        }
    ]
};

async function main() {
    console.log('Starting seed for PGCET_MCA Statistics...');

    // 1. Delete existing Statistics questions for PGCET_MCA to ensure clean state
    const deleted = await prisma.question.deleteMany({
        where: {
            examType: 'PGCET_MCA',
            subject: 'Statistics'
        }
    });

    console.log(`Deleted ${deleted.count} existing Statistics questions.`);

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
                subject: 'Statistics',
                examType: 'PGCET_MCA'
            }
        });
        count++;
    }

    console.log(`Successfully seeded ${count} Statistics questions for PGCET_MCA.`);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
