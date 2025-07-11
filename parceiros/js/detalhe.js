const API_URL = "https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros";
const container = document.getElementById("detalhes-container");

// Mapeia ícones
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

// Pega o ID da URL
const urlParams = new URLSearchParams(window.location.search);
const parceiroId = urlParams.get("id");

async function carregarDetalhes() {
  try {
    const resposta = await fetch(`${API_URL}/${parceiroId}`);
    const parceiro = await resposta.json();

    const tipo = parceiro.tipoParceiro?.toUpperCase();
    const avatar = iconesPorTipo[tipo] || "";
    const tipoLegivel = nomeTipo[tipo] || tipo || "Não especificado";

    container.innerHTML = `
      <img src="${avatar}" alt="${tipoLegivel}" style="width: 80px;" />
      <h2>${parceiro.nomeParceiro}</h2>
      <p><strong>Tipo:</strong> ${tipoLegivel}</p>
      <p><strong>Data de Cadastro:</strong> ${new Date(parceiro.dataCriacao).toLocaleDateString()}</p>
      <p><strong>Responsável:</strong> ${parceiro.responsavelParceiro}</p>
      <p><strong>Telefone:</strong> ${parceiro.telResponsavel}</p>
      <p><strong>E-mail:</strong> ${parceiro.emailResponsavel}</p>
      <p><strong>Endereço:</strong> Rua ${parceiro.rua}, Nº ${parceiro.numero} - Bairro ${parceiro.bairro}</p>
      <p><strong>Tipos de Resíduos Aceitos:</strong></p>
      <ul>
        ${parceiro.papel ? "<li>Papel</li>" : ""}
        ${parceiro.plastico ? "<li>Plástico</li>" : ""}
        ${parceiro.vidro ? "<li>Vidro</li>" : ""}
        ${parceiro.metal ? "<li>Metal</li>" : ""}
        ${parceiro.oleoCozinha ? "<li>Óleo de Cozinha</li>" : ""}
        ${parceiro.pilhaBateria ? "<li>Pilhas/Baterias</li>" : ""}
        ${parceiro.eletronico ? "<li>Eletrônicos</li>" : ""}
        ${parceiro.roupa ? "<li>Roupas</li>" : ""}
        ${parceiro.outros ? "<li>Outros</li>" : ""}
      </ul>
    `;
  } catch (error) {
    container.innerHTML = "<p>Erro ao carregar detalhes do parceiro.</p>";
    console.error("Erro ao buscar detalhes:", error);
  }
}

carregarDetalhes();