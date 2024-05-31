// Function to handle user login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    if (username === '' || password === '') {
        alert('Please enter both username and password');
        return;
    }

   
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('isLoggedIn', 'true');

    
    displayUI();
}

function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.setItem('isLoggedIn', 'false');

    displayUI();
}


function displayUI() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginForm = document.getElementById('login-form');
    const welcomeMessage = document.getElementById('welcome-message');
    const userNameSpan = document.getElementById('user-name');

    if (isLoggedIn) {
        const username = localStorage.getItem('username');
        userNameSpan.textContent = username;
        loginForm.style.display = 'none';
        welcomeMessage.style.display = 'block';
    } else {
        loginForm.style.display = 'block';
        welcomeMessage.style.display = 'none';
    }
}


window.onload = function() {
    displayUI();
};
