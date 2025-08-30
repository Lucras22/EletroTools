function calcular() {
  const tipo = document.getElementById("tipo").value;
  const tensao = parseFloat(document.getElementById("tensao").value);
  const corrente = parseFloat(document.getElementById("corrente").value);
  const fator = parseFloat(document.getElementById("fator").value);
  const resultadoDiv = document.getElementById("resultado");

  if (
    isNaN(tensao) || tensao <= 0 ||
    isNaN(corrente) || corrente <= 0 ||
    isNaN(fator) || fator < 0 || fator > 1
  ) {
    resultadoDiv.innerText = "Por favor, insira valores válidos para todos os campos. O fator de potência deve estar entre 0 e 1.";
    return;
  }

  let potencia = 0;
  if (tipo === "monofasico") {
    potencia = tensao * corrente * fator;
  } else if (tipo === "trifasico") {
    potencia = 3 * tensao * corrente * fator;
  }

  resultadoDiv.innerText = `Potência Calculada: ${potencia.toFixed(2)} Watts (W)`;
}
