interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: 1 | 2 | 3,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercises = (days: number[], target: number): Result => {
  try {
    const periodLength = days.length
    const trainingDays = days.filter(day => day > 0).length
    const average = days.reduce((previous, current) => previous += current, 0) / periodLength
    const success = average >= target
    let rating: 1 | 2 | 3;

    if(success){
      rating = 3
    }
    else {
      if(average > target / 2){
        rating = 2
      }
      else {
        rating = 1
      }
    }

    const ratingTypeDescription = {
      1: 'really bad',
      2: 'not too bad but could be better',
      3: 'good work you did well'
    }

    return {
      periodLength,
      trainingDays,
      success,
      rating,
      ratingDescription: ratingTypeDescription[rating],
      target,
      average
    }
  } catch (error) {
    console.log(error)
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))