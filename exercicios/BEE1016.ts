// Declarar as variáveis
let entDist: string;
let distancia: number;
let tempo: number;

// Entrada de dados
entDist = prompt('Digite a distancia: ')!;

// Processamento dos dados
distancia = parseInt(entDist);
tempo = distancia * 2;

// Saída de dados
console.log(`${tempo} minutos`);
