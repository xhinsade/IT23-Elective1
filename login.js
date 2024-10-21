// Password toggle functionality
function togglePasswordVisibility(passwordFieldId, toggleIconId) {
    const passwordField = document.getElementById(passwordFieldId);
    const toggleIcon = document.getElementById(toggleIconId);

    toggleIcon.addEventListener('click', function () {
        // Toggle between text and password type
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        
        // Change the icon based on the type
        toggleIcon.textContent = type === 'password' ? '👁️' : '🙈';
    });
}

// Toggle between login and signup forms
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

// Call the togglePasswordVisibility for both login and signup forms
document.addEventListener('DOMContentLoaded', function () {
    togglePasswordVisibility('login-password', 'login-togglePassword');
    togglePasswordVisibility('signup-password', 'signup-togglePassword');
});

// Example login handling
async function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.success) {
            alert('Login successful!');
            window.location.href = 'home.html'; // Change this to your desired path
        } else {
            const notification = document.getElementById('login-notification');
            notification.style.display = 'block';
            notification.textContent = data.message;
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed due to an error. Please try again later.');
    }
}

// Example signup handling
async function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        if (data.success) {
            alert('Signup successful!');
            window.location.href = 'logi.html'; // Change this to your desired path
        } else {
            const notification = document.getElementById('signup-notification');
            notification.style.display = 'block';
            notification.textContent = data.message;
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('Signup failed due to an error. Please try again later.');
    }
}
