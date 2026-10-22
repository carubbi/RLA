// BEE1929 - Triângulo
// Declarar as variáveis
let i: number;
let entradas: number[];
let entrada: string | null;
let a: number;
let b: number;
let c: number;
let d: number;

// Entrada de dados
entradas = [];
for (i = 0; i < 4; i++) {
    entrada = prompt('Comprimento da vareta:');
    if (entrada !== null) {
        entradas[i] = parseInt(entrada);
    }
}

// Processamento dos dados
if (entradas.length === 4) {
    a = entradas[0];
    b = entradas[1];
    c = entradas[2];
    d = entradas[3];
    if ((a < b + c && b < a + c && c < a + b) ||
        (a < b + d && b < a + d && d < a + b) ||
        (a < c + d && c < a + d && d < a + c) ||
        (b < c + d && c < b + d && d < b + c)) {
        // Saída de dados
        console.log('S');
    } else {
        console.log('N');
    }
}
