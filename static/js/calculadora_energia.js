function calcularEnergia() {
  const potencia = parseFloat(document.getElementById("potencia").value);
  const tempo = parseFloat(document.getElementById("tempo").value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(potencia) || isNaN(tempo) || potencia <= 0 || tempo <= 0) {
    resultadoDiv.innerText = "Insira valores válidos para potência e tempo.";
    return;
  }

  // Convertendo para kWh
  const energia = (potencia * tempo) / 1000;
  resultadoDiv.innerText = `Consumo de Energia: ${energia.toFixed(2)} kWh`;
}
