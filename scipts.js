
const validUsername = 'user';
const validPassword = 'pass';
const users = {};

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}
function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// Função de login
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const messageElement = document.getElementById('login-message');

    if (users[username] && users[username] === password) {
        messageElement.textContent = 'Login bem-sucedido!';
        messageElement.style.color = 'green';
        // Redirecionar ou mostrar a próxima parte do site aqui
    } else {
        messageElement.textContent = 'Usuário ou senha incorretos.';
        messageElement.style.color = 'red';
    }
}

// Função de cadastro
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
        // Redirecionar ou mostrar a próxima parte do site aqui
        showLoginForm();
    } else {
        messageElement.textContent = 'Preencha todos os campos.';
        messageElement.style.color = 'red';
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (username === validUsername && password === validPassword) {
        messageElement.textContent = 'Login bem-sucedido!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Usuário ou senha incorretos.';
        messageElement.style.color = 'red';
    }
}
