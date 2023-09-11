import express from 'express';
import { getPatients } from '../services/patientsServices';

const router = express.Router();

router.get('/patients', (_req, res) => {

  res.json(getPatients());
});

export default router;