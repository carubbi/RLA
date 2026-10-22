// Versão alternativa com prompts diretos, sem função auxiliar
// Declarar as variáveis
let entN: string | null;
let entT: string | null;
let N: number; // Quantidade de pessoas
let T: number; // Instante de passagem da pessoa atual
let i: number; // Pessoa atual
let A: number; // Instante de passagem da pessoa anterior
let D: number; // Diferença entre os instantes
let S: number; // Tempo total de funcionamento

// Entrada de dados
entN = prompt('Digite a quantidade de pessoas:');

// Processamento dos dados
if (entN !== null) {
    N = parseInt(entN);
    entT = prompt('Digite o instante de passagem:');

    if (entT !== null) {
        T = parseInt(entT);
        A = T;
        S = 10;

        for (i = 2; i <= N; i++) {
            entT = prompt('Digite o instante de passagem:');

            if (entT !== null) {
                T = parseInt(entT);
                D = T - A;

                if (D < 10) {
                    S += D;
                } else {
                    S += 10;
                }

                A = T;
            }
        }

        // Saída de dados
        console.log(S);
    }
}
