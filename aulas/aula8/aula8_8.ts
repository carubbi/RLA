// Aula 8 - Exemplo 8 (conversao de decimal para binario)
/** Converte um inteiro decimal para binário. */
function decimalParaBinario(num: number): string {
    // Declaração de variáveis locais
    let bin: string;
    let resto: number;

    if (num === 0) {
        return "0";
    }

    bin = "";

    while (num > 0) {
        resto = num % 2;
        bin = resto + bin;
        num = Math.trunc(num / 2);
    }

    return bin;
}

// Declaração de variáveis globais
let entNum: string | null;
let num: number;

// Entrada
entNum = prompt("Digite um numero decimal inteiro:"); // 13

if (entNum !== null) {
    num = parseInt(entNum);

    // Saida
    console.log(decimalParaBinario(num)); // 1101
}
