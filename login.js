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
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  if (existingUsers.find(user => user.username === username)) {
    const notification = document.getElementById('signup-notification');
    notification.style.display = 'block';
    notification.style.color = 'red'; // Set text color to red
    notification.textContent = 'Username already exists.';
    return;
  }

  // Save new user
  existingUsers.push({ username, password });
  localStorage.setItem('users', JSON.stringify(existingUsers));

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
    window.location.href = 'index.html'; // Change to your home page
  } else {
    notification.style.display = 'block';
    notification.style.color = 'red'; // Set text color to red
    notification.textContent = 'Invalid username or password.';
  }
}

// Toggle password visibility for login form
const toggleLoginPassword = document.getElementById('toggleLoginPassword');
const loginPasswordField = document.getElementById('login-password');

toggleLoginPassword.addEventListener('click', function() {
  const type = loginPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
  loginPasswordField.setAttribute('type', type);
  this.src = type === 'password' ? 'images/hidePassword.png' : 'images/seePassword.png'; // Change image based on visibility
});

// Toggle password visibility for signup form
const toggleSignupPassword = document.getElementById('toggleSignupPassword');
const signupPasswordField = document.getElementById('signup-password');

toggleSignupPassword.addEventListener('click', function() {
  const type = signupPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
  signupPasswordField.setAttribute('type', type);
  this.src = type === 'password' ? 'images/hidePassword.png' : 'images/seePassword.png'; // Change image based on visibility
});