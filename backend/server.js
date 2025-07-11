import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import candidateRoute from './routes/candidateRoute.js';
import analyticsRoutes from "./routes/analyticsRoute.js";
import voteRoute from './routes/voteRoute.js';
import adminRoutes from './routes/adminRoute.js';

mongoose
    .connect('mongodb://localhost:27017/voting-system')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173', // Frontend URL
        credentials: false, // Only true if using cookies/session auth
    })
);
app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use('/api/candidate', candidateRoute);
app.use('/api/vote', voteRoute);
app.use('/api/admin', adminRoutes);
app.use("/api/analytics", analyticsRoutes);

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
