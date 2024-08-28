
const validUsername = 'user';
const validPassword = 'pass';

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
