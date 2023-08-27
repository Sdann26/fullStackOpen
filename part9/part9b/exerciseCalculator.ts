interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: 1 | 2 | 3,
  ratingDescription: string,
  target: number,
  average: number
}

/* const parseArgumentsCalculator = (args: Array<string>): { value1: number[], value2: number } => {
  if (args.length < 4) throw new Error('Not enough arguments');

  const [, , targetValueRaw, ...daysValuesRaw] = args;

  const daysValues: number[] = daysValuesRaw.map(arg => Number(arg));
  const targetValue: number = Number(targetValueRaw);

  if (!daysValues.some(dayValue => isNaN(dayValue)) && !isNaN(targetValue)) {
    return {
      value1: daysValues,
      value2: targetValue
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
}; */

const calculateExercises = (days: number[], target: number): Result => {
  if (days.some(day => day < 0) || target <= 0) throw new Error('The hours cannot be negative');
  const periodLength = days.length;
  const trainingDays = days.filter(day => day > 0).length;
  const average = days.reduce((previous, current) => previous += current, 0) / periodLength;
  const success = average >= target;
  let rating: 1 | 2 | 3;

  if (success) {
    rating = 3;
  } else {
    if (average > target / 2) {
      rating = 2;
    } else {
      rating = 1;
    }
  }

  const ratingTypeDescription = {
    1: 'really bad',
    2: 'not too bad but could be better',
    3: 'good work you did well'
  };

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription: ratingTypeDescription[rating],
    target,
    average
  };
};

/* try {
  const { value1, value2 } = parseArgumentsCalculator(process.argv);
  console.log(calculateExercises(value1, value2));
} catch (error) {
  console.error(error);
} */

export default calculateExercises;