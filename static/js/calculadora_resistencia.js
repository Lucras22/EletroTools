function calcularResistencia() {
  const tensao = parseFloat(document.getElementById("tensao").value);
  const corrente = parseFloat(document.getElementById("corrente").value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(tensao) || isNaN(corrente) || corrente === 0) {
    resultadoDiv.innerText = "Insira valores válidos e diferentes de zero.";
    return;
  }

  const resistencia = tensao / corrente;
  resultadoDiv.innerText = `Resistência: ${resistencia.toFixed(2)} Ω`;
}
