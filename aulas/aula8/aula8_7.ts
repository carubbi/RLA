// Aula 8 - Exemplo 7 (sequencia de Fibonacci)
/** Gera os primeiros termos da sequência de Fibonacci. */
function gerarFibonacci(qtd: number): string {
    // Declaração de variáveis locais
    let a: number;
    let b: number;
    let prox: number;
    let i: number;
    let seq: string;

    a = 0;
    b = 1;
    seq = "";

    for (i = 1; i <= qtd; i++) {
        seq += a;

        if (i < qtd) {
            seq += ", ";
        }

        prox = a + b;
        a = b;
        b = prox;
    }

    return seq;
}

// Declaração de variáveis globais
let entQtd: string | null;
let qtd: number;

// Entrada
entQtd = prompt("Digite a quantidade de termos:"); // 7

if (entQtd !== null) {
    qtd = parseInt(entQtd);

    // Saida
    console.log(gerarFibonacci(qtd)); // 0, 1, 1, 2, 3, 5, 8
}
