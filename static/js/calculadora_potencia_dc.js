function calcularPotencia() {
  const tensao = parseFloat(document.getElementById("tensao").value);
  const corrente = parseFloat(document.getElementById("corrente").value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(tensao) || isNaN(corrente)) {
    resultadoDiv.innerText = "Por favor, insira valores válidos.";
    return;
  }

  const potencia = tensao * corrente;
  resultadoDiv.innerText = `Potência: ${potencia.toFixed(2)} W`;
}
