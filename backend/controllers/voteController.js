import mongoose from 'mongoose';
import Vote from '../models/Vote.js';

const formatVotes = (votes) => {
    const formatted = {};

    for (const [key, value] of Object.entries(votes)) {
        if (Array.isArray(value)) {
            formatted[key] = value.map((id) => new mongoose.Types.ObjectId(id));
        } else {
            formatted[key] = new mongoose.Types.ObjectId(value);
        }
    }

    return formatted;
};


export const submitVote = async (req, res) => {
    try {
        const { yearLevel, department, votes } = req.body;

        if (!yearLevel || !department || !votes) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        const formattedVotes = formatVotes(votes);

        const newVote = new Vote({
            yearLevel,
            department,
            votes: formattedVotes, // ✅ Corrected
        });

        const savedVote = await newVote.save();

        res.status(201).json({
            message: 'Vote submitted successfully',
            vote: savedVote,
        });
    } catch (err) {
        console.error('Error submitting vote:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};