// BEE1847 - Bem-vindos e Bem-vindas ao Inverno!
// Declarar as variáveis
let entA: string | null;
let entB: string | null;
let entC: string | null;
let a: number;
let b: number;
let c: number;
let variacaoAnterior: number;
let variacaoAtual: number;

// Entrada de dados
entA = prompt('Temperatura de anteontem:');entB = prompt('Temperatura de ontem:');entC = prompt('Temperatura de hoje:');

// Processamento dos dados
if (entA !== null && entB !== null && entC !== null) {
    a = parseInt(entA);
    b = parseInt(entB);
    c = parseInt(entC);
    variacaoAnterior = b - a;
    variacaoAtual = c - b;
    if (variacaoAnterior < variacaoAtual ||
        (variacaoAnterior === variacaoAtual && variacaoAnterior > 0)) {
        // Saída de dados
        console.log(':)');
    } else {
        console.log(':(');
    }
}
