const container = document.querySelector('.container');
const loginBtn = document.querySelector('#login-btn');
const signupBtn = document.querySelector('#signup-btn');

signupBtn.addEventListener('click', () => {
    container.classList.add('signup-mode');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('signup-mode');
});