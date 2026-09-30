// Aula 8 - Exemplo 5 (contagem, soma e multiplicacao)
/** Conta de 1 até n. */
function calcularContagem(n: number): number {
    // Declaração de variáveis locais
    let cont: number;
    let i: number;

    cont = 0;

    for (i = 1; i <= n; i++) {
        cont++;
    }

    return cont;
}

/** Soma os inteiros de 1 até n. */
function calcularSoma(n: number): number {
    // Declaração de variáveis locais
    let soma: number;
    let i: number;

    soma = 0;

    for (i = 1; i <= n; i++) {
        soma += i;
    }

    return soma;
}

/** Multiplica os inteiros de 1 até n. */
function calcularProduto(n: number): number {
    // Declaração de variáveis locais
    let prod: number;
    let i: number;

    prod = 1;

    for (i = 1; i <= n; i++) {
        prod *= i;
    }

    return prod;
}

// Declaração de variáveis globais
let entN: string | null;
let n: number;
let contFinal: number;
let somaFinal: number;
let prodFinal: number;

// Entrada
entN = prompt("Digite o valor de n:"); // 4

// Processamento
if (entN !== null) {
    n = parseInt(entN);
    contFinal = calcularContagem(n);
    somaFinal = calcularSoma(n);
    prodFinal = calcularProduto(n);

    // Saida
    console.log("Contagem: " + contFinal);
    console.log("Soma: " + somaFinal);
    console.log("Produto: " + prodFinal);
}
