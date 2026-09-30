// Aula 8 - Exemplo 10 (Beecrowd 1153 - Fatorial Simples)
/** Calcula o fatorial de n. */
function calcularFatorial(n: number): number {
    // Declaração de variáveis locais
    let fat: number;
    let i: number;

    fat = 1;

    for (i = 1; i <= n; i++) {
        fat *= i;
    }

    return fat;
}

// Declaração de variáveis globais
let entNum: string | null;
let num: number;

// Entrada
entNum = prompt("Digite um numero:"); // 5

if (entNum !== null) {
    num = parseInt(entNum);

    // Saida
    console.log(calcularFatorial(num));
}
