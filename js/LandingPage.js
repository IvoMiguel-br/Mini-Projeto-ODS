document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
console.log("Bem-vindo(a) à EcoCidade! ");
const botao = document.querySelector('.botao-membro');
if (botao) {
  botao.addEventListener('click', function () {
    alert('Você será redirecionado para o formulário!');
  });
}