
import express from 'express';
import upload from '../middleware/upload.js';

import { CreateCandidate, GetCandidate } from '../controllers/candidateController.js';

const router = express.Router();

router.post('/', upload.single('image'), CreateCandidate);
router.get('/', GetCandidate)

export default router;
