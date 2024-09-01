const users = {};
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const messageElement = document.getElementById('login-message');

    if (users[username] && users[username] === password) {
        messageElement.textContent = 'Login bem-sucedido!';
        messageElement.style.color = 'green';
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html';
        updateUsernameDisplay();
    } else {
        messageElement.textContent = 'Usuário ou senha incorretos.';
        messageElement.style.color = 'red';
    }
}
function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const messageElement = document.getElementById('register-message');
    if (username in users) {
        messageElement.textContent = 'Usuário já cadastrado.';
        messageElement.style.color = 'red';
    } else if (username && password) {
        users[username] = password;
        messageElement.textContent = 'Cadastro realizado com sucesso!';
        messageElement.style.color = 'green';
        showLoginForm();
    } else {
        messageElement.textContent = 'Preencha todos os campos.';
        messageElement.style.color = 'red';
    }
}
function updateUsernameDisplay() {
    const usernameDisplay = document.getElementById('username-display');
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        usernameDisplay.textContent = `Bem-vindo, ${loggedInUser}`;
    } else {
        const linkEntrar = document.createElement('a');
        linkEntrar.href = 'login.html'; 
        linkEntrar.textContent = 'Entrar';
        usernameDisplay.appendChild(linkEntrar);
    }
}
window.onload = function() {
    updateUsernameDisplay();
};
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
