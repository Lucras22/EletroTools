function calcularCapacitores() {
  const valoresInput = document.getElementById("valores").value;
  const config = document.getElementById("configuracao").value;

  if (!valoresInput) {
    document.getElementById("resultado").innerHTML = "⚠️ Digite os valores dos capacitores.";
    return;
  }

  // Transformar entrada em array de números
  const valores = valoresInput.split(",").map(v => parseFloat(v.trim())).filter(v => !isNaN(v));

  if (valores.length === 0) {
    document.getElementById("resultado").innerHTML = "⚠️ Nenhum valor válido foi inserido.";
    return;
  }

  let capacitanciaEquivalente = 0;

  if (config === "paralelo") {
    // Soma direta
    capacitanciaEquivalente = valores.reduce((acc, val) => acc + val, 0);
  } else if (config === "serie") {
    // 1/Ceq = 1/C1 + 1/C2 + ...
    let inverso = valores.reduce((acc, val) => acc + (1 / val), 0);
    capacitanciaEquivalente = 1 / inverso;
  }

  document.getElementById("resultado").innerHTML = `
    ⚡ Configuração: <strong>${config.toUpperCase()}</strong><br>
    📐 Capacitância Equivalente: <strong>${capacitanciaEquivalente.toFixed(2)} µF</strong>
  `;
}
