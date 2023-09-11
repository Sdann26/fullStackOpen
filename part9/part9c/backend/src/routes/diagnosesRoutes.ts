import express from 'express';
import { getDiagnoses } from '../services/diagnosesServices';

const router = express.Router();

router.get('/diagnoses', (_req, res) => {

  res.json(getDiagnoses());
});

export default router;