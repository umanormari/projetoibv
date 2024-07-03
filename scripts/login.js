document.addEventListener('DOMContentLoaded', function () {
    const loginToggle = document.getElementById('login-toggle');
    const loginFormContainer = document.getElementById('login-form-container');
    const loginForm = document.getElementById('login-form');

    loginToggle.addEventListener('click', function (e) {
        e.preventDefault(); // Evita que o link seja seguido
        loginFormContainer.classList.toggle('hidden');
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do formulário

        // Verificar credenciais (simulação)
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulação de login bem-sucedido (substitua pela verificação real de credenciais)
        if (username && password) {
            window.location.href = "../paginas/secretaria.html";
        } else {
            document.getElementById('login-message').textContent = "Credenciais inválidas. Tente novamente.";
        }
    });
});
