import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const rawMaths1 = [
    { "subject": "maths", "question": "The value of sin 30° is", "options": ["0", "1/2", "√3/2", "1"], "correctIndex": 1 },
    { "subject": "maths", "question": "The value of cos 60° is", "options": ["1", "0", "1/2", "√3/2"], "correctIndex": 2 },
    { "subject": "maths", "question": "The value of tan 45° is", "options": ["0", "1", "√3", "1/√3"], "correctIndex": 1 },
    { "subject": "maths", "question": "sin²A + cos²A is equal to", "options": ["0", "1", "2", "sin 2A"], "correctIndex": 1 },
    { "subject": "maths", "question": "The value of sec 0° is", "options": ["0", "1", "∞", "Undefined"], "correctIndex": 1 },
    { "subject": "maths", "question": "The value of cosec 90° is", "options": ["0", "1", "∞", "Undefined"], "correctIndex": 1 },
    { "subject": "maths", "question": "If sin A = 1/2, then A is", "options": ["30°", "45°", "60°", "90°"], "correctIndex": 0 },
    { "subject": "maths", "question": "tan A = sin A / cos A represents", "options": ["Identity", "Equation", "Function", "Formula"], "correctIndex": 0 },
    { "subject": "maths", "question": "The value of cos 0° is", "options": ["0", "1", "1/2", "√3/2"], "correctIndex": 1 },
    { "subject": "maths", "question": "If sin A = cos A, then A equals", "options": ["0°", "30°", "45°", "60°"], "correctIndex": 2 },
    { "subject": "maths", "question": "The degree of polynomial 5x³ + 3x² − 7 is", "options": ["1", "2", "3", "4"], "correctIndex": 2 },
    { "subject": "maths", "question": "A quadratic polynomial has degree", "options": ["1", "2", "3", "4"], "correctIndex": 1 },
    { "subject": "maths", "question": "The zeroes of a polynomial are the values of x for which", "options": ["Polynomial is maximum", "Polynomial is minimum", "Polynomial is zero", "Polynomial is constant"], "correctIndex": 2 },
    { "subject": "maths", "question": "The number of zeroes of a linear polynomial is", "options": ["0", "1", "2", "Infinite"], "correctIndex": 1 },
    { "subject": "maths", "question": "The graph of a linear polynomial is a", "options": ["Curve", "Circle", "Straight line", "Parabola"], "correctIndex": 2 },
    { "subject": "maths", "question": "The graph of a quadratic polynomial is a", "options": ["Line", "Circle", "Parabola", "Ellipse"], "correctIndex": 2 },
    { "subject": "maths", "question": "The value of polynomial x² − 4 at x = 2 is", "options": ["0", "2", "4", "-4"], "correctIndex": 0 },
    { "subject": "maths", "question": "If α and β are zeroes of x² − 5x + 6, then α + β is", "options": ["5", "6", "-5", "-6"], "correctIndex": 0 },
    { "subject": "maths", "question": "If α and β are zeroes of x² − 5x + 6, then αβ is", "options": ["5", "6", "-5", "-6"], "correctIndex": 1 },
    { "subject": "maths", "question": "A polynomial of degree zero is", "options": ["Linear", "Quadratic", "Constant", "Cubic"], "correctIndex": 2 },
    { "subject": "maths", "question": "The solution of equation x² = 4 is", "options": ["1", "2", "±2", "0"], "correctIndex": 2 },
    { "subject": "maths", "question": "The standard form of quadratic equation is", "options": ["ax²+bx+c=0", "x²+ax+b=0", "ax²+bx=0", "x²+bx+c=0"], "correctIndex": 0 },
    { "subject": "maths", "question": "The nature of roots depends on", "options": ["a", "b", "c", "Discriminant"], "correctIndex": 3 },
    { "subject": "maths", "question": "If discriminant is zero, roots are", "options": ["Real and unequal", "Real and equal", "Complex", "Imaginary"], "correctIndex": 1 },
    { "subject": "maths", "question": "If discriminant is negative, roots are", "options": ["Real", "Rational", "Complex", "Equal"], "correctIndex": 2 },
    { "subject": "maths", "question": "The discriminant of ax²+bx+c=0 is", "options": ["b²−4ac", "4ac−b²", "b²+4ac", "a²−4bc"], "correctIndex": 0 },
    { "subject": "maths", "question": "The roots of x²−9=0 are", "options": ["3", "−3", "±3", "0"], "correctIndex": 2 },
    { "subject": "maths", "question": "The quadratic formula is", "options": ["(-b±√(b²−4ac))/2a", "(b±√(b²−4ac))/2a", "(-b±√(b²+4ac))/2a", "(b±√(b²+4ac))/2a"], "correctIndex": 0 },
    { "subject": "maths", "question": "A quadratic equation has how many roots?", "options": ["1", "2", "3", "Infinite"], "correctIndex": 1 },
    { "subject": "maths", "question": "If a=0, the equation becomes", "options": ["Quadratic", "Linear", "Cubic", "Constant"], "correctIndex": 1 },
    { "subject": "maths", "question": "The distance formula is", "options": ["√(x²+y²)", "√[(x₂−x₁)²+(y₂−y₁)²]", "(x₂−x₁)+(y₂−y₁)", "√(x₂+y₂)"], "correctIndex": 1 },
    { "subject": "maths", "question": "The coordinates of origin are", "options": ["(1,0)", "(0,1)", "(0,0)", "(1,1)"], "correctIndex": 2 },
    { "subject": "maths", "question": "The midpoint of line joining (x₁,y₁) and (x₂,y₂) is", "options": ["((x₁+x₂)/2,(y₁+y₂)/2)", "(x₁+x₂,y₁+y₂)", "(x₁−x₂,y₁−y₂)", "((x₁−x₂)/2,(y₁−y₂)/2)"], "correctIndex": 0 },
    { "subject": "maths", "question": "The slope of x-axis is", "options": ["0", "1", "∞", "−1"], "correctIndex": 0 },
    { "subject": "maths", "question": "The slope of y-axis is", "options": ["0", "1", "∞", "−1"], "correctIndex": 2 },
    { "subject": "maths", "question": "A point on x-axis has y-coordinate", "options": ["1", "0", "−1", "Any value"], "correctIndex": 1 },
    { "subject": "maths", "question": "A point on y-axis has x-coordinate", "options": ["1", "0", "−1", "Any value"], "correctIndex": 1 },
    { "subject": "maths", "question": "The area of triangle formed by points on same line is", "options": ["1", "2", "0", "Undefined"], "correctIndex": 2 },
    { "subject": "maths", "question": "Collinear points lie on", "options": ["Circle", "Plane", "Same line", "Triangle"], "correctIndex": 2 },
    { "subject": "maths", "question": "The distance between identical points is", "options": ["1", "0", "∞", "Undefined"], "correctIndex": 1 },
    { "subject": "maths", "question": "The value of log₁₀1 is", "options": ["0", "1", "10", "Undefined"], "correctIndex": 0 },
    { "subject": "maths", "question": "The value of log₁₀10 is", "options": ["0", "1", "10", "Undefined"], "correctIndex": 1 },
    { "subject": "maths", "question": "log(ab) equals", "options": ["log a + log b", "log a − log b", "log a × log b", "log a / log b"], "correctIndex": 0 },
    { "subject": "maths", "question": "log(a/b) equals", "options": ["log a + log b", "log a − log b", "log a × log b", "log b − log a"], "correctIndex": 1 },
    { "subject": "maths", "question": "log a² equals", "options": ["2 log a", "log 2a", "(log a)²", "log a / 2"], "correctIndex": 0 },
    { "subject": "maths", "question": "The value of log₁₀(100) is", "options": ["1", "2", "10", "0"], "correctIndex": 1 },
    { "subject": "maths", "question": "If log x = 2, then x is", "options": ["2", "10", "100", "1000"], "correctIndex": 2 },
    { "subject": "maths", "question": "The base of common logarithm is", "options": ["2", "e", "10", "1"], "correctIndex": 2 },
    { "subject": "maths", "question": "The logarithm of a negative number is", "options": ["0", "Defined", "Undefined", "1"], "correctIndex": 2 },
    { "subject": "maths", "question": "log 1/x equals", "options": ["log x", "−log x", "1/log x", "log x²"], "correctIndex": 1 }
];

const rawMaths2 = [
    { "subject": "maths", "question": "The sum of the first 10 natural numbers is", "options": ["45", "50", "55", "60"], "correctIndex": 2 },
    { "subject": "maths", "question": "If 2x + 3 = 11, then the value of x is", "options": ["3", "4", "5", "6"], "correctIndex": 1 },
    { "subject": "maths", "question": "The value of (a + b)² is", "options": ["a² + b²", "a² + 2ab + b²", "a² − 2ab + b²", "2a² + 2b²"], "correctIndex": 1 },
    { "subject": "maths", "question": "The HCF of 12 and 18 is", "options": ["2", "3", "6", "12"], "correctIndex": 2 },
    { "subject": "maths", "question": "The LCM of 6 and 8 is", "options": ["12", "18", "24", "48"], "correctIndex": 2 },
    { "subject": "maths", "question": "If the radius of a circle is 7 cm, its diameter is", "options": ["7 cm", "14 cm", "21 cm", "49 cm"], "correctIndex": 1 },
    { "subject": "maths", "question": "The area of a square of side 5 cm is", "options": ["10 cm²", "20 cm²", "25 cm²", "50 cm²"], "correctIndex": 2 },
    { "subject": "maths", "question": "The probability of getting a head when a coin is tossed is", "options": ["0", "1", "1/2", "1/3"], "correctIndex": 2 },
    { "subject": "maths", "question": "The mean of the first 5 natural numbers is", "options": ["2", "2.5", "3", "5"], "correctIndex": 2 },
    { "subject": "maths", "question": "If x = 2, the value of x³ − 1 is", "options": ["3", "5", "7", "9"], "correctIndex": 2 }
];

const rawChem1 = [
    { "subject": "chemistry", "question": "The atomic number of an element is equal to the number of", "options": ["Neutrons", "Protons", "Electrons + Neutrons", "Nucleons"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "The SI unit of amount of substance is", "options": ["Gram", "Kilogram", "Mole", "Litre"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Avogadro number is", "options": ["6.022×10²³", "3.011×10²³", "6.626×10⁻³⁴", "1.6×10⁻¹⁹"], "correctIndex": 0 },
    { "subject": "chemistry", "question": "pH of a neutral solution at 25°C is", "options": ["0", "7", "14", "5"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "The mass of one mole of carbon-12 is", "options": ["12 g", "6 g", "1 g", "24 g"], "correctIndex": 0 },
    { "subject": "chemistry", "question": "The number of electrons in Na⁺ ion is", "options": ["10", "11", "12", "9"], "correctIndex": 0 },
    { "subject": "chemistry", "question": "Isotopes have same", "options": ["Mass number", "Atomic number", "Neutrons", "Mass"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "The smallest particle of an element that retains its properties is", "options": ["Atom", "Molecule", "Ion", "Electron"], "correctIndex": 0 },
    { "subject": "chemistry", "question": "The law of conservation of mass was given by", "options": ["Dalton", "Lavoisier", "Avogadro", "Boyle"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "The empirical formula of glucose is", "options": ["CH₂O", "C₆H₁₂O₆", "CHO", "CH₄O"], "correctIndex": 0 },
    { "subject": "chemistry", "question": "Which of the following is a noble gas?", "options": ["Nitrogen", "Oxygen", "Argon", "Hydrogen"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "The valency of oxygen is", "options": ["1", "2", "3", "4"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "Which bond involves sharing of electrons?", "options": ["Ionic", "Covalent", "Hydrogen", "Metallic"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "NaCl is an example of", "options": ["Covalent compound", "Ionic compound", "Metal", "Acid"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "The chemical formula of washing soda is", "options": ["Na₂CO₃", "NaHCO₃", "Na₂CO₃·10H₂O", "CaCO₃"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Plaster of Paris is chemically", "options": ["CaSO₄", "CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaCO₃"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Which acid is present in vinegar?", "options": ["Citric acid", "Formic acid", "Acetic acid", "Lactic acid"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "A base turns red litmus paper", "options": ["Blue", "White", "No change", "Yellow"], "correctIndex": 0 },
    { "subject": "chemistry", "question": "The pH value of an acidic solution is", "options": ["Greater than 7", "Equal to 7", "Less than 7", "14"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Which gas is evolved when acid reacts with metal?", "options": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "The gas used in photosynthesis is", "options": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Which metal is liquid at room temperature?", "options": ["Sodium", "Mercury", "Aluminium", "Iron"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "The most abundant metal in Earth’s crust is", "options": ["Iron", "Copper", "Aluminium", "Zinc"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Rusting of iron is an example of", "options": ["Reduction", "Oxidation", "Neutralization", "Decomposition"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "Which of the following prevents rusting?", "options": ["Painting", "Moisture", "Salt", "Air"], "correctIndex": 0 },
    { "subject": "chemistry", "question": "Stainless steel is an alloy of", "options": ["Iron, carbon", "Iron, chromium, nickel", "Copper, zinc", "Aluminium, iron"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "Galvanization is coating iron with", "options": ["Copper", "Zinc", "Silver", "Tin"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "The ore of aluminium is", "options": ["Haematite", "Bauxite", "Calamine", "Galena"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "Which metal is extracted by electrolysis?", "options": ["Iron", "Copper", "Aluminium", "Zinc"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Which metal is the best conductor of electricity?", "options": ["Copper", "Silver", "Aluminium", "Iron"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "Organic compounds mainly contain", "options": ["Carbon", "Oxygen", "Nitrogen", "Sulphur"], "correctIndex": 0 },
    { "subject": "chemistry", "question": "The general formula of alkanes is", "options": ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "Ethene belongs to", "options": ["Alkanes", "Alkenes", "Alkynes", "Alcohols"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "The functional group of alcohol is", "options": ["–COOH", "–CHO", "–OH", "–CO"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Acetic acid belongs to", "options": ["Alcohol", "Ketone", "Carboxylic acid", "Aldehyde"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Ethanol reacts with sodium to form", "options": ["Hydrogen", "Oxygen", "Carbon dioxide", "Water"], "correctIndex": 0 },
    { "subject": "chemistry", "question": "Soap is sodium salt of", "options": ["Carboxylic acid", "Alcohol", "Ketone", "Ester"], "correctIndex": 0 },
    { "subject": "chemistry", "question": "Detergents are more effective than soaps in", "options": ["Soft water", "Hard water", "Distilled water", "Acidic water"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "Which is a biodegradable substance?", "options": ["Plastic", "Nylon", "Paper", "PVC"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "PVC is a polymer of", "options": ["Ethene", "Chloroethene", "Propene", "Ethyne"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "The process of separation of cream from milk is", "options": ["Filtration", "Sedimentation", "Centrifugation", "Evaporation"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Which method is used to separate salt from seawater?", "options": ["Filtration", "Decantation", "Evaporation", "Centrifugation"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Chromatography is used to separate", "options": ["Liquids", "Gases", "Coloured substances", "Solids"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "The solvent used in chromatography is called", "options": ["Residue", "Distillate", "Mobile phase", "Stationary phase"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Distillation is based on difference in", "options": ["Density", "Solubility", "Boiling point", "Melting point"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Air is a", "options": ["Compound", "Element", "Mixture", "Solution"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "A homogeneous mixture is called", "options": ["Colloid", "Suspension", "Solution", "Emulsion"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "The Tyndall effect is shown by", "options": ["Solution", "Colloid", "Compound", "Element"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "An example of colloid is", "options": ["Salt solution", "Milk", "Sugar solution", "Copper sulphate"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "Pure substances have", "options": ["Fixed composition", "Variable composition", "No composition", "Random composition"], "correctIndex": 0 }
];

const rawChem2 = [
    { "subject": "chemistry", "question": "Which of the following is a strong electrolyte in aqueous solution?", "options": ["Glucose", "Urea", "Sodium chloride", "Acetic acid"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "The oxidation number of sulphur in H₂SO₄ is", "options": ["+2", "+4", "+6", "-2"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Which of the following has the highest boiling point?", "options": ["Methane", "Ethane", "Propane", "Butane"], "correctIndex": 3 },
    { "subject": "chemistry", "question": "The gas released when zinc reacts with dilute hydrochloric acid is", "options": ["Oxygen", "Hydrogen", "Carbon dioxide", "Chlorine"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "Which of the following is used as an anti-knocking agent in petrol?", "options": ["Ethanol", "Methanol", "Tetraethyl lead", "Kerosene"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "The pH of a solution with high concentration of H⁺ ions will be", "options": ["High", "Neutral", "Low", "Zero"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "Which of the following is an example of a redox reaction?", "options": ["NaCl + AgNO₃ → AgCl + NaNO₃", "CaCO₃ → CaO + CO₂", "Zn + CuSO₄ → ZnSO₄ + Cu", "HCl + NaOH → NaCl + H₂O"], "correctIndex": 2 },
    { "subject": "chemistry", "question": "The common name of sodium hydrogen carbonate is", "options": ["Washing soda", "Baking soda", "Bleaching powder", "Caustic soda"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "Which metal is extracted from its ore by reduction with carbon?", "options": ["Aluminium", "Iron", "Sodium", "Potassium"], "correctIndex": 1 },
    { "subject": "chemistry", "question": "The chemical formula of bleaching powder is", "options": ["CaOCl₂", "CaCl₂", "Ca(OH)₂", "CaO₂"], "correctIndex": 0 }
];

const rawPhy1 = [
    { "subject": "physics", "question": "A body moving with uniform velocity has", "options": ["Zero acceleration", "Constant acceleration", "Increasing velocity", "Decreasing velocity"], "correctIndex": 0 },
    { "subject": "physics", "question": "The slope of a velocity–time graph gives", "options": ["Velocity", "Displacement", "Acceleration", "Momentum"], "correctIndex": 2 },
    { "subject": "physics", "question": "The SI unit of force is", "options": ["Dyne", "Newton", "Joule", "Watt"], "correctIndex": 1 },
    { "subject": "physics", "question": "Work done in uniform circular motion is", "options": ["Zero", "Maximum", "Minimum", "Infinite"], "correctIndex": 0 },
    { "subject": "physics", "question": "Dimensional formula of pressure is", "options": ["ML⁻¹T⁻²", "MLT⁻²", "M²LT⁻²", "ML²T⁻³"], "correctIndex": 0 },
    { "subject": "physics", "question": "Which law explains conservation of momentum?", "options": ["Newton’s first law", "Newton’s second law", "Newton’s third law", "Law of gravitation"], "correctIndex": 2 },
    { "subject": "physics", "question": "Unit of impulse is", "options": ["N", "N s", "kg m", "J"], "correctIndex": 1 },
    { "subject": "physics", "question": "Acceleration due to gravity on Earth is approximately", "options": ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "9.0 m/s²"], "correctIndex": 1 },
    { "subject": "physics", "question": "The area under a velocity–time graph represents", "options": ["Acceleration", "Distance", "Displacement", "Momentum"], "correctIndex": 2 },
    { "subject": "physics", "question": "SI unit of work is", "options": ["Watt", "Joule", "Newton", "Pascal"], "correctIndex": 1 },
    { "subject": "physics", "question": "Ohm’s law relates", "options": ["Current and resistance", "Voltage and resistance", "Voltage and current", "Power and voltage"], "correctIndex": 2 },
    { "subject": "physics", "question": "Unit of electric current is", "options": ["Volt", "Ampere", "Coulomb", "Ohm"], "correctIndex": 1 },
    { "subject": "physics", "question": "Resistance of a conductor depends on", "options": ["Length", "Area", "Material", "All of these"], "correctIndex": 3 },
    { "subject": "physics", "question": "The device used to measure electric current is", "options": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"], "correctIndex": 1 },
    { "subject": "physics", "question": "Electrical energy consumed is measured in", "options": ["Joule", "Watt", "kWh", "Ampere"], "correctIndex": 2 },
    { "subject": "physics", "question": "Power is defined as", "options": ["Work per unit time", "Energy per unit charge", "Force per unit area", "Charge per unit time"], "correctIndex": 0 },
    { "subject": "physics", "question": "The SI unit of electric power is", "options": ["Watt", "Volt", "Ampere", "Joule"], "correctIndex": 0 },
    { "subject": "physics", "question": "Fuse wire is made of", "options": ["Copper", "Aluminium", "Alloy with low melting point", "Silver"], "correctIndex": 2 },
    { "subject": "physics", "question": "An electric bulb filament is made of", "options": ["Copper", "Aluminium", "Tungsten", "Iron"], "correctIndex": 2 },
    { "subject": "physics", "question": "One kilowatt hour equals", "options": ["1000 J", "3600 J", "3.6×10⁶ J", "3.6×10⁵ J"], "correctIndex": 2 },
    { "subject": "physics", "question": "The speed of light in vacuum is", "options": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁵ m/s", "3×10⁷ m/s"], "correctIndex": 0 },
    { "subject": "physics", "question": "Mirror used in vehicle headlights is", "options": ["Convex", "Plane", "Concave", "Cylindrical"], "correctIndex": 2 },
    { "subject": "physics", "question": "Image formed by a plane mirror is", "options": ["Real", "Inverted", "Virtual and erect", "Magnified"], "correctIndex": 2 },
    { "subject": "physics", "question": "Focal length of a plane mirror is", "options": ["Zero", "Infinity", "Half radius", "Equal to radius"], "correctIndex": 1 },
    { "subject": "physics", "question": "SI unit of focal length is", "options": ["Metre", "Dioptre", "Centimetre", "Second"], "correctIndex": 0 },
    { "subject": "physics", "question": "Power of a lens is measured in", "options": ["Metre", "Watt", "Dioptre", "Newton"], "correctIndex": 2 },
    { "subject": "physics", "question": "A convex lens is also called", "options": ["Converging lens", "Diverging lens", "Plane lens", "Cylindrical lens"], "correctIndex": 0 },
    { "subject": "physics", "question": "A concave lens always forms", "options": ["Real image", "Virtual image", "Magnified image", "Inverted image"], "correctIndex": 1 },
    { "subject": "physics", "question": "The refractive index is the ratio of", "options": ["Speeds", "Wavelengths", "Angles", "Frequencies"], "correctIndex": 0 },
    { "subject": "physics", "question": "The phenomenon of bending of light is called", "options": ["Reflection", "Refraction", "Diffraction", "Dispersion"], "correctIndex": 1 },
    { "subject": "physics", "question": "Sound waves are", "options": ["Transverse", "Longitudinal", "Electromagnetic", "Stationary"], "correctIndex": 1 },
    { "subject": "physics", "question": "Unit of frequency is", "options": ["Second", "Hertz", "Metre", "Decibel"], "correctIndex": 1 },
    { "subject": "physics", "question": "Human audible range is", "options": ["20–20,000 Hz", "10–10,000 Hz", "100–10,000 Hz", "50–50,000 Hz"], "correctIndex": 0 },
    { "subject": "physics", "question": "The speed of sound is maximum in", "options": ["Air", "Water", "Steel", "Vacuum"], "correctIndex": 2 },
    { "subject": "physics", "question": "Echo is due to", "options": ["Reflection of sound", "Refraction of sound", "Diffraction of sound", "Absorption of sound"], "correctIndex": 0 },
    { "subject": "physics", "question": "Ultrasound frequency is greater than", "options": ["20 Hz", "200 Hz", "2000 Hz", "20,000 Hz"], "correctIndex": 3 },
    { "subject": "physics", "question": "The unit of loudness is", "options": ["Hertz", "Decibel", "Watt", "Pascal"], "correctIndex": 1 },
    { "subject": "physics", "question": "Pitch of sound depends on", "options": ["Amplitude", "Speed", "Frequency", "Wavelength"], "correctIndex": 2 },
    { "subject": "physics", "question": "Time period is reciprocal of", "options": ["Speed", "Frequency", "Wavelength", "Amplitude"], "correctIndex": 1 },
    { "subject": "physics", "question": "The phenomenon responsible for rainbow is", "options": ["Reflection", "Refraction and dispersion", "Diffraction", "Scattering"], "correctIndex": 1 },
    { "subject": "physics", "question": "Radioactivity was discovered by", "options": ["Rutherford", "Becquerel", "Curie", "Bohr"], "correctIndex": 1 },
    { "subject": "physics", "question": "Alpha particles are", "options": ["Electrons", "Helium nuclei", "Protons", "Neutrons"], "correctIndex": 1 },
    { "subject": "physics", "question": "SI unit of radioactivity is", "options": ["Curie", "Becquerel", "Gray", "Sievert"], "correctIndex": 1 },
    { "subject": "physics", "question": "Half-life is the time taken for", "options": ["Complete decay", "Half decay", "Double decay", "No decay"], "correctIndex": 1 },
    { "subject": "physics", "question": "Nuclear fission is splitting of", "options": ["Electron", "Proton", "Heavy nucleus", "Light nucleus"], "correctIndex": 2 },
    { "subject": "physics", "question": "Energy of the Sun comes from", "options": ["Combustion", "Fission", "Fusion", "Radioactivity"], "correctIndex": 2 },
    { "subject": "physics", "question": "Binding energy is due to", "options": ["Mass defect", "Electron motion", "Charge", "Heat"], "correctIndex": 0 },
    { "subject": "physics", "question": "SI unit of energy is", "options": ["Calorie", "Joule", "Electron volt", "Watt"], "correctIndex": 1 },
    { "subject": "physics", "question": "Mass-energy relation is given by", "options": ["E=mc", "E=mc²", "E=m²c", "E=c²m²"], "correctIndex": 1 },
    { "subject": "physics", "question": "Neutrons were discovered by", "options": ["Rutherford", "Chadwick", "Bohr", "Curie"], "correctIndex": 1 }
];

const rawPhy2 = [
    { "subject": "physics", "question": "The momentum of a body is defined as the product of its", "options": ["Mass and acceleration", "Mass and velocity", "Force and time", "Velocity and time"], "correctIndex": 1 },
    { "subject": "physics", "question": "Which of the following quantities is a scalar?", "options": ["Velocity", "Acceleration", "Force", "Speed"], "correctIndex": 3 },
    { "subject": "physics", "question": "The unit of magnetic flux is", "options": ["Tesla", "Weber", "Ampere", "Henry"], "correctIndex": 1 },
    { "subject": "physics", "question": "According to Fleming’s right-hand rule, the thumb represents", "options": ["Magnetic field", "Current", "Motion of conductor", "Force"], "correctIndex": 2 },
    { "subject": "physics", "question": "The phenomenon responsible for the blue colour of the sky is", "options": ["Reflection", "Refraction", "Dispersion", "Scattering"], "correctIndex": 3 },
    { "subject": "physics", "question": "Which type of lens is used to correct myopia?", "options": ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"], "correctIndex": 1 },
    { "subject": "physics", "question": "The energy possessed by a body due to its motion is called", "options": ["Potential energy", "Mechanical energy", "Kinetic energy", "Thermal energy"], "correctIndex": 2 },
    { "subject": "physics", "question": "The frequency of alternating current in India is", "options": ["50 Hz", "60 Hz", "100 Hz", "25 Hz"], "correctIndex": 0 },
    { "subject": "physics", "question": "An object is said to be in equilibrium when the net force acting on it is", "options": ["Maximum", "Minimum", "Zero", "Infinite"], "correctIndex": 2 },
    { "subject": "physics", "question": "The device used to convert AC to DC is", "options": ["Transformer", "Generator", "Rectifier", "Motor"], "correctIndex": 2 }
];

const allQuestions = [...rawMaths1, ...rawMaths2, ...rawChem1, ...rawChem2, ...rawPhy1, ...rawPhy2];

const subjectMap: Record<string, string> = {
    'maths': 'Mathematics',
    'physics': 'Physics',
    'chemistry': 'Chemistry'
};

const optionMap = ['A', 'B', 'C', 'D'];

async function main() {
    console.log('Clearing existing data...');
    await prisma.response.deleteMany({});
    await prisma.question.deleteMany({});

    // Ensure admin exists
    const password = await bcrypt.hash('admin123', 10);
    await prisma.admin.upsert({
        where: { email: 'admin@mitt.edu.in' },
        update: {},
        create: {
            email: 'admin@mitt.edu.in',
            password,
        },
    });

    console.log(`Seeding ${allQuestions.length} questions...`);

    for (const q of allQuestions) {
        const subject = subjectMap[q.subject.toLowerCase()] || q.subject;
        const correctOption = optionMap[q.correctIndex];

        await prisma.question.create({
            data: {
                text: q.question,
                optionA: q.options[0],
                optionB: q.options[1],
                optionC: q.options[2],
                optionD: q.options[3],
                correctOption,
                subject
            }
        });
    }

    console.log('Seeding completed.');
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
