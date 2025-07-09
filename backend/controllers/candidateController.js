import Candidate from '../models/Candidate.js';

export const CreateCandidate = async (req, res) => {
	try {
		const { name, position, party, department, yearLevel } = req.body;
		const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

		const candidate = new Candidate({
			name,
			position,
			party,
			yearLevel,
			department,
			imageUrl,
		});

		await candidate.save();
		res.status(201).json({ message: 'Candidate created', candidate });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Error creating candidate' });
	}
};


export const GetCandidate = async (req, res) => {
	try {
		const candidates = await Candidate.find();
		res.status(200).json(candidates);
	} catch (err) {
		console.error('Error fetching candidates:', err);
		res.status(500).json({ message: 'Failed to retrieve candidates', error: err.message });
	} finally {
		console.log('GetCandidate request handled.');
	}
};