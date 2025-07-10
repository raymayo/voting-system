import express from 'express';
import {
    registerAdmin,
    loginAdmin,
    getAllAdmins,
} from '../controllers/adminController.js';

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/', getAllAdmins);


export default router;
