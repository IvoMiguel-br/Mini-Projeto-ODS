document.getElementById("form-parceiro").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    nomeParceiro: form.nomeParceiro.value,
    tipoParceiro: form.tipoParceiro.value,
    responsavelParceiro: form.responsavelParceiro.value,
    telResponsavel: form.telResponsavel.value,
    emailResponsavel: form.emailResponsavel.value,
    rua: form.rua.value,
    numero: parseInt(form.numero.value),
    bairro: form.bairro.value,
    papel: form.papel.checked,
    plastico: form.plastico.checked,
    vidro: form.vidro.checked,
    metal: form.metal.checked,
    oleoCozinha: form.oleoCozinha.checked,
    pilhaBateria: form.pilhaBateria.checked,
    eletronico: form.eletronico.checked,
    roupa: form.roupa.checked,
    outros: form.outros.checked
  };

  try {
    const response = await fetch("https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      alert("Dados enviados com sucesso!");
      form.reset();
    } else {
      alert("Erro ao enviar dados. Tente novamente.");
    }
    if (!dados.nomeParceiro || !dados.tipoParceiro || !dados.telResponsavel) {
  alert('Preencha todos os campos obrigatórios!');
  return;
}
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro de conexão.");
  }
});