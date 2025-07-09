import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import candidateRoute from './routes/candidateRoute.js';
import voteRoute from './routes/voteRoute.js'
import path from 'path';
import { fileURLToPath } from 'url';




mongoose.connect('mongodb://localhost:27017/voting-system',)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(errs))

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/candidate', candidateRoute);
app.use('/api/vote', voteRoute);
app.use('/uploads', express.static('uploads'));

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));