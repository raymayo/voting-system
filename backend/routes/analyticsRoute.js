import express from "express";
import {
    getCandidateVotes,
    getTurnoutByDepartment,
    getTurnoutByYear,
} from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/candidate-votes", getCandidateVotes);
router.get("/turnout-department", getTurnoutByDepartment);
router.get("/turnout-year", getTurnoutByYear);

export default router;
