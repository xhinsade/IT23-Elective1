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

// Example login handling (you should customize this logic)
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    console.log('Login Username:', usernam);
    console.log('Login Password:', password);
    // Further logic (e.g., server request) goes here
}

// Example signup handling (you should customize this logic)
function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    console.log('Signup Username:', username);
    console.log('Signup Email:', email);
    console.log('Signup Password:', password);
    // Further logic (e.g., server request) goes here
}
