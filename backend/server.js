import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import candidateRoute from './routes/candidateRoute.js';


mongoose.connect('mongodb://localhost:27017/voting-system',)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(errs))

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/candidate', candidateRoute);

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));