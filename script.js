// Get DOM elements
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');

// Store user data (In a real application, this should be done server-side)
let users = JSON.parse(localStorage.getItem('users')) || [];

// Register new user
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    if (users.some(user => user.email === email)) {
        alert('Email already registered');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful');
    container.classList.remove("active");
    signUpForm.reset();
});

// Login user
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.name}!`);
        // Here you would typically set a session or token
    } else {
        alert('Invalid email or password');
    }
    signInForm.reset();
});

// Toggle between login and register forms
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Social media login placeholders
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Social media login is not implemented in this demo.');
    });
});

// Forgot password placeholder
document.querySelector('.sign-in form a').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Password recovery is not implemented in this demo.');
});