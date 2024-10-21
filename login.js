// Function to toggle between login and signup forms
function toggleForms() {
    const loginForm = document.getElementById('login-main');
    const signupForm = document.getElementById('signup-main');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

// Signup handling
function handleSignup(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Check if user already exists
    const existingUser = JSON.parse(localStorage.getItem('users')) || [];
    if (existingUser.find(user => user.username === username)) {
        const notification = document.getElementById('signup-notification');
        notification.style.display = 'block';
        notification.textContent = 'Username already exists.';
        return;
    }

    // Save new user
    existingUser.push({ username, password });
    localStorage.setItem('users', JSON.stringify(existingUser));

    alert('Signup successful! You can now log in.');
    toggleForms();
}

// Login handling
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.username === username && user.password === password);

    const notification = document.getElementById('login-notification');

    if (user) {
        alert('Login successful!');
        // Redirect or show user dashboard
        window.location.href = 'home.html'; // Change to your home page
    } else {
        notification.style.display = 'block';
        notification.textContent = 'Invalid username or password.';
    }
}
