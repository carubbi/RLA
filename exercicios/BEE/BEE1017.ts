// Declarar as variáveis
let entTempo: string;
let entVel: string;
let tempo: number;
let velocidade: number;
let litros: number;

// Entrada de dados
entTempo = prompt('Digite o tempo gasto: ')!;
entVel = prompt('Digite a velocidade media: ')!;

// Processamento dos dados
tempo = parseInt(entTempo);
velocidade = parseInt(entVel);
litros = (tempo * velocidade) / 12;

// Saída de dados
console.log(`${litros.toFixed(3)}`);
