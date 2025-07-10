import Admin from '../models/Admin.js';

// @desc    Register new admin
export const registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existing = await Admin.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const admin = await Admin.create({ name, email, password });

        res.status(201).json({
            id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
            message: 'Admin registered successfully',
        });
    } catch (err) {
        console.error('[Register Error]', err); // 🔥 Shows exact issue
        res.status(500).json({
            message: 'Registration failed',
            error: err.message,
        });
    }
};

// @desc    Login admin
// @route   POST /api/admins/login
export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const admin = await Admin.findOne({ email });

        if (!admin || !(await admin.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Return minimal data for client-side storage
        res.json({
            id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role, // frontend uses this to allow/deny access
            message: 'Login successful',
        });
    } catch (err) {
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
};

// @desc    Get all admins (for demo or dashboard)
// @route   GET /api/admins/
export const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find().select('-password');
        res.json(admins);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch admins' });
    }
};
