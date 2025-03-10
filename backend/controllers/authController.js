const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
}

exports.registerUser = async (req, res) => {
    const { fullName, email, password, profileImageUrl } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
        const userExists = await
        User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User with this email already exists" });
        }
    const user = await User.create({
        fullName,
        email,
        password,
        profileImageUrl,
    });

    res.status(201).json({
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
        token: generateToken(user._id),
    });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

exports.loginUser = async (req, res) => {
    res.send("Register user route");
}

exports.getUserInfo = async (req, res) => {
    res.send("Register user route");
}