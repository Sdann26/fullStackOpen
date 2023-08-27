/* const parseArguments = (args: Array<string>): { value1: number, value2: number } => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
}; */

/**
 * @param {number} height - in cm
 * @param {number} weight - in kg
 */
const calculateBmi = (height: number, weight: number): string => {
  const BMI = weight / ((height / 100) * (height / 100));
  if (BMI < 16.0) return 'Underweight (Severe thinness)';
  else if (BMI < 16.9) return 'Underweight (Moderate thinness)';
  else if (BMI < 18.4) return 'Underweight (Mild thinness)';
  else if (BMI < 24.9) return 'Normal range';
  else if (BMI < 29.9) return 'Overweight (Pre-obese)';
  else if (BMI < 34.9) return 'Obese (Class I)';
  else if (BMI < 39.9) return 'Obese (Class II)';
  else return 'Obese (Class III)';
};

/* try {
  const { value1, value2 } = parseArguments(process.argv);
  console.log(calculateBmi(value1, value2));
} catch (error) {
  console.error(error);
} */

export default calculateBmi;
