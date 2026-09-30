// Aula 8 - Exemplo 4 (troca de valores)
// Declaração de variáveis globais
let entA: string | null;
let entB: string | null;
let a: number;
let b: number;

/** Troca os valores globais de a e b. */
function trocarValores(): void {
    // Declaração de variáveis locais
    let temp: number;

    temp = a;
    a = b;
    b = temp;
}

// Entrada
entA = prompt("Digite o valor de a:"); // 10
entB = prompt("Digite o valor de b:"); // 25

// Processamento
if (entA !== null && entB !== null) {
    a = parseFloat(entA);
    b = parseFloat(entB);

    trocarValores();

    // Saida
    console.log(a); // 25
    console.log(b); // 10
}
