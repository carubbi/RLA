// Declarar as variáveis
let entA: string;
let entB: string;
let entC: string;
let a: number;
let b: number;
let c: number;
let triangulo: number;
let circulo: number;
let trapezio: number;
let quadrado: number;
let retangulo: number;

// Entrada de dados
entA = prompt('Digite A: ')!;
entB = prompt('Digite B: ')!;
entC = prompt('Digite C: ')!;

// Processamento dos dados
a = parseFloat(entA);
b = parseFloat(entB);
c = parseFloat(entC);
triangulo = a * c / 2;
circulo = 3.14159 * c * c;
trapezio = (a + b) * c / 2;
quadrado = b * b;
retangulo = a * b;

// Saída de dados
console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);
