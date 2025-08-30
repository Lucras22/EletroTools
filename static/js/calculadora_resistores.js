const cores = [
  { nome: 'Preto', valor: 0, multiplicador: 1 },
  { nome: 'Marrom', valor: 1, multiplicador: 10, tolerancia: '±1%' },
  { nome: 'Vermelho', valor: 2, multiplicador: 100, tolerancia: '±2%' },
  { nome: 'Laranja', valor: 3, multiplicador: 1000 },
  { nome: 'Amarelo', valor: 4, multiplicador: 10000 },
  { nome: 'Verde', valor: 5, multiplicador: 100000, tolerancia: '±0.5%' },
  { nome: 'Azul', valor: 6, multiplicador: 1000000, tolerancia: '±0.25%' },
  { nome: 'Violeta', valor: 7, multiplicador: 10000000, tolerancia: '±0.1%' },
  { nome: 'Cinza', valor: 8, multiplicador: 100000000, tolerancia: '±0.05%' },
  { nome: 'Branco', valor: 9, multiplicador: 1000000000 },
  { nome: 'Ouro', multiplicador: 0.1, tolerancia: '±5%' },
  { nome: 'Prata', multiplicador: 0.01, tolerancia: '±10%' }
];

function preencherSelects() {
  const band1 = document.getElementById('band1');
  const band2 = document.getElementById('band2');
  const multiplier = document.getElementById('multiplier');
  const tolerance = document.getElementById('tolerance');

  cores.forEach(cor => {
    if (cor.valor !== undefined) {
      band1.innerHTML += `<option value="${cor.valor}">${cor.nome}</option>`;
      band2.innerHTML += `<option value="${cor.valor}">${cor.nome}</option>`;
    }

    if (cor.multiplicador !== undefined) {
      multiplier.innerHTML += `<option value="${cor.multiplicador}">${cor.nome}</option>`;
    }

    if (cor.tolerancia) {
      tolerance.innerHTML += `<option value="${cor.tolerancia}">${cor.nome}</option>`;
    }
  });
}

function calcular() {
  const valor1 = parseInt(document.getElementById('band1').value);
  const valor2 = parseInt(document.getElementById('band2').value);
  const multiplicador = parseFloat(document.getElementById('multiplier').value);
  const tolerancia = document.getElementById('tolerance').value;

  const resistencia = ((valor1 * 10) + valor2) * multiplicador;
  let unidade = 'Ω';

  let valorFinal = resistencia;

  if (resistencia >= 1e6) {
    valorFinal = (resistencia / 1e6).toFixed(2);
    unidade = 'MΩ';
  } else if (resistencia >= 1e3) {
    valorFinal = (resistencia / 1e3).toFixed(2);
    unidade = 'kΩ';
  }

  document.getElementById('resultado').innerText =
    `Resistência: ${valorFinal} ${unidade} ${tolerancia}`;
}

preencherSelects();
