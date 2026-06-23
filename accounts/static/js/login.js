document.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const loginBtn = document.getElementById('login-btn');
    const loginMsg = document.getElementById('login-msg');

    function checkForm() {
        const filled = username.value.trim() !== '' && password.value.trim() !== '';
        if (filled) {
            loginBtn.classList.remove('disabled');
        } else {
            loginBtn.classList.add('disabled');
        }
    }

    [username, password].forEach(input => {
        input.addEventListener('input', () => {
            loginMsg.textContent = '';
            checkForm();
        });
    });

    loginBtn.addEventListener('click', (e) => {
        if (loginBtn.classList.contains('disabled')) {
            e.preventDefault();
            return;
        }
    });

    checkForm();
});