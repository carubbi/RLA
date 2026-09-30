// Aula 8 - Exemplo 1 (funcao basica de soma)
/** Soma dois números. */
function somar(a: number, b: number): number {
    return a + b;
}

// Declaração de variáveis globais
let entNum1: string | null;
let entNum2: string | null;
let num1: number;
let num2: number;
let total: number;

// Entrada
entNum1 = prompt("Digite o primeiro numero:"); // 4
entNum2 = prompt("Digite o segundo numero:"); // 7

// Processamento
if (entNum1 !== null && entNum2 !== null) {
    num1 = parseFloat(entNum1);
    num2 = parseFloat(entNum2);
    total = somar(num1, num2);

    // Saida
    console.log(total); // 11
}
