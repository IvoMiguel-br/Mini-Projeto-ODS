const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const entrarBtn = document.getElementById('entrar-btn');

emailInput.addEventListener('input', verificarCampos);
senhaInput.addEventListener('input', verificarCampos);

function verificarCampos() {
    if (emailInput.value !== '' && senhaInput.value !== '') {
        entrarBtn.disabled = false;
    } else {
        entrarBtn.disabled = true;
    }
}

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    localStorage.setItem('email', email);
    window.location.href = 'listagem.html';
});                         