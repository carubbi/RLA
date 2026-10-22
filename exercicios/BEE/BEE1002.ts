// Declarar as variáveis
let raio: number;
let area: number;
let entRaio: string;
let PI: number;

// Entrada de dados
entRaio = prompt('Digite o raio: ')!;

// Processamento dos dados
// Definindo o valor de PI
PI = 3.14159;

// Converter a entrada (string) para numérico
raio = parseFloat(entRaio);

// Calcular a área
area = PI * raio * raio;

// Saída de dados
console.log(`A=${area.toFixed(4)}`);
