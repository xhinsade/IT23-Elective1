const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});
const User = mongoose.model('User', userSchema);

// Sign Up Route
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({ success: true });
});

// Log In Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.json({ success: false, message: 'User not found' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.json({ success: false, message: 'Invalid password' });
    }

    // Generate JWT Token (optional)
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
    res.json({ success: true, token });
});

// Start the server
app.listen(00, () => {
    console.log('Server running on http://localhost:6700');
});
