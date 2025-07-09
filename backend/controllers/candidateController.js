import Candidate from '../models/Candidate.js';

export const CreateCandidate = async (req, res) => {
	try {
		console.log('request body:', req.body);

		const { name, position, department, yearLevel, party, imageUrl } = req.body

		const candidate = new Candidate({
			name,
			position,
			department,
			yearLevel,
			party,
			imageUrl,
		})

		const savedCandidate = await candidate.save()

		res.status(201).json(savedCandidate)
	} catch (err) {
		console.error(err);
	}
};
