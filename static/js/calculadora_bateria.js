function calcularBateria() {
  const numBaterias = parseInt(document.getElementById("numBaterias").value);
  const tensao = parseFloat(document.getElementById("tensaoIndividual").value);
  const capacidade = parseFloat(document.getElementById("capacidadeIndividual").value);
  const config = document.getElementById("configuracao").value;

  let tensaoTotal = 0;
  let capacidadeTotal = 0;

  if (config === "serie") {
    tensaoTotal = tensao * numBaterias;
    capacidadeTotal = capacidade;
  } else if (config === "paralelo") {
    tensaoTotal = tensao;
    capacidadeTotal = capacidade * numBaterias;
  }

  document.getElementById("resultado").innerHTML = `
    🔋 Configuração: <strong>${config.toUpperCase()}</strong><br>
    ⚡ Tensão Total: <strong>${tensaoTotal} V</strong><br>
    ⏳ Capacidade Total: <strong>${capacidadeTotal} Ah</strong>
  `;
}
