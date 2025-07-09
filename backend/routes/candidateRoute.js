
import express from 'express';

import { CreateCandidate, GetCandidate } from '../controllers/candidateController.js';

const router = express.Router();

router.post('/', CreateCandidate);
router.get('/', GetCandidate)

export default router;
