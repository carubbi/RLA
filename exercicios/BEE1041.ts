// Declarar as variáveis
let entX: string;
let entY: string;
let x: number;
let y: number;
let mensagem: string;

// Entrada de dados
entX = prompt('Digite X: ')!;
entY = prompt('Digite Y: ')!;

// Processamento dos dados
// Converter as entradas (string) para numérico
x = parseFloat(entX);
y = parseFloat(entY);

// Verificar a posição do ponto (x, y) e atribuir a mensagem correspondente
if (x === 0 && y === 0) {
    mensagem = 'Origem';
} else if (x === 0) {
    mensagem = 'Eixo Y';
} else if (y === 0) {
    mensagem = 'Eixo X';
} else if (x > 0 && y > 0) {
    mensagem = 'Q1';
} else if (x < 0 && y > 0) {
    mensagem = 'Q2';
} else if (x < 0 && y < 0) {
    mensagem = 'Q3';
} else {
    mensagem = 'Q4';
}

// Saída de dados
console.log(mensagem);
