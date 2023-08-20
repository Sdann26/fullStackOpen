import express from 'express';
import calculateBmi from './bmiCalculator';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query  

  if(!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) return res.send({error: "malformatted parameters"});

  const bmi = calculateBmi(Number(height), Number(weight));

  return res.json({
    weight: Number(weight),
    height: Number(height),
    bmi
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});