import Vote from "../models/Vote.js";
import Candidate from "../models/Candidate.js";
import mongoose from "mongoose";

// 1. Vote counts per candidate
export const getCandidateVotes = async (req, res) => {
    try {
        const votes = await Vote.aggregate([
            { $project: { votes: { $objectToArray: "$votes" } } },
            { $unwind: "$votes" },
            { $group: { _id: "$votes.v", count: { $sum: 1 } } },
            {
                $lookup: {
                    from: "candidates",
                    localField: "_id",
                    foreignField: "_id",
                    as: "candidate",
                },
            },
            { $unwind: "$candidate" },
            {
                $project: {
                    label: {
                        $concat: ["$candidate.name", " (", "$candidate.position", ")"],
                    },
                    count: 1,
                },
            },
            { $sort: { count: -1 } }
        ]);

        res.json(votes);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch candidate votes" });
    }
};

// 2. Turnout by department
export const getTurnoutByDepartment = async (req, res) => {
    try {
        const result = await Vote.aggregate([
            { $group: { _id: "$department", count: { $sum: 1 } } },
            { $project: { label: "$_id", count: 1, _id: 0 } },
            { $sort: { count: -1 } },
        ]);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch department turnout" });
    }
};

// 3. Turnout by year level
export const getTurnoutByYear = async (req, res) => {
    try {
        const result = await Vote.aggregate([
            { $group: { _id: "$yearLevel", count: { $sum: 1 } } },
            { $project: { label: "$_id", count: 1, _id: 0 } },
            { $sort: { label: 1 } },
        ]);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch year level turnout" });
    }
};
