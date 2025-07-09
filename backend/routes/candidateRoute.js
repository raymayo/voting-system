import Candidate from '../models/Candidate.js';
import mongoose from 'mongoose';
import express from 'express';

import { CreateCandidate } from '../controllers/candidateController.js';

const router = express.Router();

router.post('/', CreateCandidate);

export default router;
