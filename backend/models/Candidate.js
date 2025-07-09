import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    yearLevel: { type: String, required: true },
    party: { type: String, required: true },
    imageUrl: { type: String, required: true },
})

const Candidate = mongoose.model('Candidate', candidateSchema);
export default Candidate;