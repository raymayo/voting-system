import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
    yearLevel: { type: String, required: true },
    department: { type: String, required: true },
    votes: { type: Map, of: mongoose.Schema.Types.Mixed, required: true },
    timestamp: { type: Date, default: Date.now },
}
)

const Vote = mongoose.model('Vote', voteSchema)

export default Vote;