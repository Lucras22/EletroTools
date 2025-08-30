function atualizarCampos() {
  const calcular = document.getElementById("calcular").value;
  const inputsDiv = document.getElementById("inputs");

  let html = "";

  if (calcular === "V") {
    html += `
      <label for="corrente">Corrente (I - em A):</label>
      <input type="number" id="corrente" placeholder="Digite a corrente" />

      <label for="resistencia">Resistência (R - em Ω):</label>
      <input type="number" id="resistencia" placeholder="Digite a resistência" />
    `;
  } else if (calcular === "I") {
    html += `
      <label for="tensao">Tensão (V - em V):</label>
      <input type="number" id="tensao" placeholder="Digite a tensão" />

      <label for="resistencia">Resistência (R - em Ω):</label>
      <input type="number" id="resistencia" placeholder="Digite a resistência" />
    `;
  } else if (calcular === "R") {
    html += `
      <label for="tensao">Tensão (V - em V):</label>
      <input type="number" id="tensao" placeholder="Digite a tensão" />

      <label for="corrente">Corrente (I - em A):</label>
      <input type="number" id="corrente" placeholder="Digite a corrente" />
    `;
  }

  inputsDiv.innerHTML = html;
}

function calcular() {
  const calcular = document.getElementById("calcular").value;
  const resultadoDiv = document.getElementById("resultado");

  let resultado = 0;

  if (calcular === "V") {
    const I = parseFloat(document.getElementById("corrente").value);
    const R = parseFloat(document.getElementById("resistencia").value);

    if (isNaN(I) || isNaN(R)) {
      resultadoDiv.innerText = "Preencha os valores corretamente.";
      return;
    }

    resultado = I * R;
    resultadoDiv.innerText = `Tensão: ${resultado.toFixed(2)} V`;

  } else if (calcular === "I") {
    const V = parseFloat(document.getElementById("tensao").value);
    const R = parseFloat(document.getElementById("resistencia").value);

    if (isNaN(V) || isNaN(R) || R === 0) {
      resultadoDiv.innerText = "Verifique os valores inseridos (R ≠ 0).";
      return;
    }

    resultado = V / R;
    resultadoDiv.innerText = `Corrente: ${resultado.toFixed(2)} A`;

  } else if (calcular === "R") {
    const V = parseFloat(document.getElementById("tensao").value);
    const I = parseFloat(document.getElementById("corrente").value);

    if (isNaN(V) || isNaN(I) || I === 0) {
      resultadoDiv.innerText = "Verifique os valores inseridos (I ≠ 0).";
      return;
    }

    resultado = V / I;
    resultadoDiv.innerText = `Resistência: ${resultado.toFixed(2)} Ω`;
  }
}

// Inicializar com os campos corretos ao carregar
window.onload = atualizarCampos;
