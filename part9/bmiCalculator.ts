/**
 * @param {number} height - in cm
 * @param {number} weight - in kg
 */
const calculateBmi = (height: number, weight: number): string => {
  const BMI = weight / ((height / 100) * (height / 100))
  if(BMI < 16.0) return 'Underweight (Severe thinness)'
  else if(BMI < 16.9) return 'Underweight (Moderate thinness)'
  else if(BMI < 18.4) return 'Underweight (Mild thinness)'
  else if(BMI < 24.9) return 'Normal range'
  else if(BMI < 29.9) return 'Overweight (Pre-obese)'
  else if(BMI < 34.9) return 'Obese (Class I)'
  else if(BMI < 39.9) return 'Obese (Class I)'
  else return 'Obese (Class I)'
}

console.log(calculateBmi(180, 74))