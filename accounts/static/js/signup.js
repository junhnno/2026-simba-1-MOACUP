document.addEventListener('DOMContentLoaded', () => {

    const CHECKED = `
        <circle cx="12.5" cy="12.5" r="12.5" fill="#3AADD9"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
        d="M19.25 8.24252C19.4008 8.39345 19.4856 8.59814 19.4856 8.81157C19.4856 9.02499 19.4008 9.22968 19.25 9.38061L10.7784 17.8522C10.6987 17.9319 10.604 17.9951 10.4998 18.0383C10.3957 18.0815 10.284 18.1037 10.1713 18.1037C10.0585 18.1037 9.94685 18.0815 9.84267 18.0383C9.7385 17.9951 9.64385 17.9319 9.56412 17.8522L5.75 14.038C5.67313 13.9638 5.61182 13.875 5.56963 13.7768C5.52745 13.6786 5.50525 13.573 5.50432 13.4661C5.5034 13.3592 5.52376 13.2532 5.56423 13.1543C5.6047 13.0554 5.66447 12.9655 5.74004 12.8899C5.81561 12.8144 5.90548 12.7546 6.00439 12.7141C6.10331 12.6737 6.2093 12.6533 6.31617 12.6542C6.42304 12.6552 6.52865 12.6774 6.62685 12.7195C6.72505 12.7617 6.81386 12.823 6.8881 12.8999L10.1709 16.1828L18.1119 8.24252C18.1867 8.16772 18.2754 8.10839 18.3731 8.06791C18.4708 8.02743 18.5755 8.00659 18.6813 8.00659C18.787 8.00659 18.8917 8.02743 18.9894 8.06791C19.0871 8.10839 19.1758 8.16772 19.25 8.24252Z"
        fill="white"/>
    `;

    const UNCHECKED = `<circle cx="12.5" cy="12.5" r="11.5" fill="white" stroke="#D9D9D9" stroke-width="2"/>`;

    const state = [false, false];

    const username = document.querySelector('input[name="username"]');
    const password = document.querySelector('input[name="password"]');
    const confirm = document.querySelector('input[name="confirm"]');
    const nickname = document.querySelector('input[name="nickname"]');
    const signupBtn = document.getElementById('signup-btn');
    const passwordMsg = document.getElementById('password-msg');

    function updateSvg(id, checked) {
        document.getElementById(id).innerHTML = checked ? CHECKED : UNCHECKED;
    }

    function checkForm() {
        const allFilled =
            username.value.trim() !== '' &&
            password.value.trim() !== '' &&
            confirm.value.trim() !== '' &&
            nickname.value.trim() !== '' &&
            password.value === confirm.value &&
            state[0] &&
            state[1];

        signupBtn.disabled = !allFilled;
    }

    document.getElementById('chk-all').addEventListener('click', () => {
        const newVal = !state.every(Boolean);
        state.forEach((_, i) => {
            state[i] = newVal;
            updateSvg('chk-' + i, newVal);
        });
        updateSvg('chk-all', newVal);
        checkForm();
    });

    [0, 1].forEach(i => {
        document.getElementById('chk-' + i).addEventListener('click', () => {
            state[i] = !state[i];
            updateSvg('chk-' + i, state[i]);
            updateSvg('chk-all', state.every(Boolean));
            checkForm();
        });
    });

    [username, password, nickname].forEach(input => {
        input.addEventListener('input', checkForm);
    });

    confirm.addEventListener('input', () => {
        passwordMsg.textContent = '';
        checkForm();
    });

    confirm.addEventListener('blur', () => {
        if (password.value && confirm.value && password.value !== confirm.value) {
            passwordMsg.textContent = '비밀번호가 일치하지 않습니다. 다시 입력하세요';
        } else {
            passwordMsg.textContent = '';
        }
    });

    const toggleBtn = document.getElementById('toggle-agree');
    const agreeDetail = document.getElementById('agree-detail');

    toggleBtn.addEventListener('click', () => {
        agreeDetail.classList.toggle('closed');
        toggleBtn.classList.toggle('rotate');
    });

    checkForm();
});