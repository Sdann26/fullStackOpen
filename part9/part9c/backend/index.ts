import express from 'express';
import cors from 'cors';
import diagnosesRoutes from './src/routes/diagnosesRoutes';
import patientsRoutes from './src/routes/patientsRoutes';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api', diagnosesRoutes);
app.use('/api', patientsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
