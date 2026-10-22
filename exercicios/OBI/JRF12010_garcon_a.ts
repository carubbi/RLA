// Versão alternativa com prompts diretos, sem função auxiliar
// Declarar as variáveis
let entN: string | null;
let entL: string | null;
let entC: string | null;
let N: number; // Quantidade de bandejas
let L: number; // Quantidade de latas
let C: number; // Quantidade de copos
let i: number;  // Bandeja atual
let T: number;  // Total de copos quebrados

// Entrada de dados
entN = prompt('Digite a quantidade de bandejas:');

// Processamento dos dados
if (entN !== null) {
    N = parseInt(entN);
    T = 0;

    for (i = 1; i <= N; i = i + 1) {
        entL = prompt('Digite a quantidade de latas:');
        entC = prompt('Digite a quantidade de copos:');

        if (entL !== null && entC !== null) {
            L = parseInt(entL);
            C = parseInt(entC);

            if (L > C) {
                T += C;
            }
        }
    }

    // Saída de dados
    console.log(T);
}