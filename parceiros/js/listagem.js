const API_URL = "https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros";

const cardsContainer = document.getElementById("cardsContainer");
const inputFiltro = document.getElementById("filtro");
const btnBuscar = document.getElementById("btnBuscar");

let parceiros = [];

// Mapeia os tipos reduzidos para ícones e nomes legíveis
const iconesPorTipo = {
  ECO: "./assets/save-the-world.png",
  COO: "./assets/shield.png",
  PEV: "./assets/recycle.png",
};

const nomeTipo = {
  ECO: "Ecoponto",
  COO: "Cooperativa",
  PEV: "Ponto de Entrega Voluntária",
};

// Carrega os dados da API ao carregar a página
window.onload = async () => {
  try {
    const response = await fetch(API_URL);
    parceiros = await response.json();
    renderCards(parceiros);
  } catch (error) {
    cardsContainer.innerHTML = "<p>Erro ao carregar os dados.</p>";
    console.error("Erro ao buscar parceiros:", error);
  }
};

// Renderiza os cards na tela
function renderCards(lista) {
  cardsContainer.innerHTML = "";

  if (lista.length === 0) {
    cardsContainer.innerHTML = "<p>Nenhum parceiro encontrado.</p>";
    return;
  }

  lista.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => (window.location.href = `./detalhe.html?id=${p.id}`);

    const tipo = p.tipoParceiro?.toUpperCase();
    const avatar = iconesPorTipo[tipo] || "";
    const tipoLegivel = nomeTipo[tipo] || "Tipo não identificado";

    card.innerHTML = `
      <img src="${avatar}" alt="${tipoLegivel}">
      <h3>${p.nomeParceiro}</h3>
      <p><strong>Tipo:</strong> ${tipoLegivel}</p>
      <p><strong>Bairro:</strong> ${p.bairro}</p>
      <p><strong>Incluído em:</strong> ${new Date(p.dataCriacao).toLocaleDateString()}</p>
    `;
    cardsContainer.appendChild(card);
  });
}

// Filtra a lista ao clicar em "Pesquisar"
btnBuscar.addEventListener("click", () => {
  const termo = inputFiltro.value.trim().toLowerCase();
  const filtrados = parceiros.filter((p) => {
    const nome = p.nomeParceiro?.toLowerCase() || "";
    const bairro = p.bairro?.toLowerCase() || "";
    return nome.includes(termo) || bairro.includes(termo);
  });
  renderCards(filtrados);
});
