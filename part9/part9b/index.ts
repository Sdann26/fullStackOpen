import express from 'express';
import calculateBmi from './bmiCalculator';
import calculateExercises from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;  

  if(!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) return res.send({error: "malformatted parameters"});

  const bmi = calculateBmi(Number(height), Number(weight));

  return res.json({
    weight: Number(weight),
    height: Number(height),
    bmi
  });
});

app.post('/exercise', (req, res) => {
  interface ExerciseRequestBody {
    daily_exercises: number[];
    target: number;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } : ExerciseRequestBody = req.body;
  
  if(!daily_exercises || !target ) return  res.send({ error: "parameters missing" });
  if(!Array.isArray(daily_exercises) || isNaN(Number(target))) return  res.send({ error: "malformatted parameters" });

  const exercise = calculateExercises(daily_exercises, target);

  return res.json(exercise);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});