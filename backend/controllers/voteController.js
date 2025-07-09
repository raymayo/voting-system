import Vote from '../models/Vote.js';

export const submitVote = async (req, res) => {
    try {
        const { yearLevel, department, votes } = req.body;

        if (!yearLevel || !department || !votes) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        // Optional: validate vote ObjectIds here if needed

        const newVote = new Vote({
            yearLevel,
            department,
            votes,
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