// Versão com prompts diretos, sem função auxiliar
// Declarar as variáveis
let entN: string | null;
let entV: string | null;
let N: number; // Quantidade de números
let V: number; // Número atual
let A: number; // Número anterior
let i: number; // Posição atual
let Q: number; // Quantidade máxima de números marcados

// Entrada de dados
entN = prompt('Digite a quantidade de números:');

// Processamento dos dados
if (entN !== null) {
    N = parseInt(entN);
    entV = prompt('Digite o número da sequência (1 ou 2):');

    if (entV !== null) {
        V = parseInt(entV);
        A = V;
        Q = 1;

        for (i = 2; i <= N; i++) {
            entV = prompt('Digite o número da sequência (1 ou 2):');

            if (entV !== null) {
                V = parseInt(entV);

                if (V !== A) {
                    Q++;
                }

                A = V;
            }
        }

        // Saída de dados
        console.log(Q);
    }
}
