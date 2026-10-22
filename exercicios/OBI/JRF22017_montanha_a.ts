// Versão com prompts diretos, sem função auxiliar
// Declarar as variáveis
let entN: string | null;
let entA: string | null;
let entB: string | null;
let entC: string | null;
let N: number; // Quantidade de alturas
let A: number; // Altura à esquerda
let B: number; // Altura do meio
let C: number; // Altura à direita
let i: number; // Posição da altura à direita
let P: boolean; // Indica se foi encontrado um vale

// Entrada de dados
entN = prompt('Digite a quantidade de alturas:');

// Processamento dos dados
if (entN !== null) {
    N = parseInt(entN);
    entA = prompt('Digite a primeira altura:');
    entB = prompt('Digite a segunda altura:');

    if (entA !== null && entB !== null) {
        A = parseInt(entA);
        B = parseInt(entB);
        P = false;

        for (i = 3; i <= N; i++) {
            entC = prompt('Digite a próxima altura:');

            if (entC !== null) {
                C = parseInt(entC);

                if (A > B && B < C) {
                    P = true;
                }

                A = B;
                B = C;
            }
        }

        // Saída de dados
        if (P) {
            console.log('S');
        } else {
            console.log('N');
        }
    }
}
