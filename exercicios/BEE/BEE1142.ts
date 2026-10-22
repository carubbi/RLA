// Declarar as variáveis
let entN: string | null;
let n: number;
let i: number;
let primeiro: number;

// Entrada de dados
entN = prompt('Digite N: ');

// Processamento dos dados
if (entN !== null) {
    n = parseInt(entN);

    // Cada linha contém três números e a palavra PUM.
    for (i = 0; i < n; i++) {
        primeiro = 4 * i + 1;

        // Saída de dados
        console.log(`${primeiro} ${primeiro + 1} ${primeiro + 2} PUM`);
    }
}
