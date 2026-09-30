// Declarar as variáveis
let entDist: string;
let entComb: string;
let distancia: number;
let combustivel: number;
let consumo: number;

// Entrada de dados
entDist = prompt('Digite a distancia total: ')!;
entComb = prompt('Digite o combustivel gasto: ')!;

// Processamento dos dados
distancia = parseInt(entDist);
combustivel = parseFloat(entComb);
consumo = distancia / combustivel;

// Saída de dados
console.log(`${consumo.toFixed(3)} km/l`);
