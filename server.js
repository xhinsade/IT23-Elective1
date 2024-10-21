const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" folder

// Helper function to read users from JSON file
const readUsers = () => {
    if (!fs.existsSync('users.json')) {
        return [];
    }
    const data = fs.readFileSync('users.json', 'utf8');
    return JSON.parse(data);
};

// Helper function to write users to JSON file
const writeUsers = (users) => {
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
};

// Signup route
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Read existing users
    const users = readUsers();

    // Check if username or email already exists
    if (users.find(user => user.username === username || user.email === email)) {
        return res.status(400).json({ success: false, message: 'Username or email already exists.' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { username, email, password: hashedPassword };

        // Add the new user and save
        users.push(newUser);
        writeUsers(users);

        return res.json({ success: true, message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Read existing users
    const users = readUsers();

    // Find the user
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ success: false, message: 'User not found.' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Invalid credentials.' });
    }

    res.json({ success: true, message: 'Login successful!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
