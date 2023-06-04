const LOGIN_URL = "../html/login.html";

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', function () {
    sessionStorage.removeItem('usuario');
    window.location.replace(LOGIN_URL);
})