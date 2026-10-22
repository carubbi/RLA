// Versão com prompts diretos, sem função auxiliar
// Declarar as variáveis
let entN: string | null;
let entS: string | null;
let entV: string | null;
let N: number; // Quantidade de dias
let S: number; // Saldo atual
let V: number; // Movimentação do dia
let M: number; // Menor saldo observado
let i: number; // Dia atual

// Entrada de dados
entN = prompt('Digite a quantidade de dias:');
entS = prompt('Digite o saldo inicial:');

// Processamento dos dados
if (entN !== null && entS !== null) {
    N = parseInt(entN);
    S = parseInt(entS);
    M = S;

    for (i = 1; i <= N; i++) {
        entV = prompt('Digite a movimentação do dia:');

        if (entV !== null) {
            V = parseInt(entV);
            S += V;

            if (S < M) {
                M = S;
            }
        }
    }

    // Saída de dados
    console.log(M);
}
