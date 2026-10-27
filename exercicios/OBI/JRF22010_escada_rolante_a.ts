// Versão alternativa com prompts diretos, sem função auxiliar
// Declarar as variáveis
let entN: string | null;
let entT: string | null;
let N: number; // quantidade de pessoas
let T: number; // instante de passagem da pessoa atual
let p: number; // pessoa atual
let A: number; // instante de passagem da pessoa anterior
let D: number; // diferença entre os instantes
let S: number; // tempo total de funcionamento

// Entrada de dados
entN = prompt('Digite a quantidade de pessoas:');

// Processamento dos dados
if (entN !== null) {
    N = parseInt(entN);
    
    A = 0;
    S = 10;

    for (p = 1; p <= N; p++) {
        entT = prompt('Digite o instante de passagem:');

        if (entT !== null) {
            T = parseInt(entT);

            if (p > 1) {
                D = T - A;

                if (D < 10) {
                    S += D;
                } else {
                    S += 10;
                }
            }

            A = T;
        }
    }

    // Saída de dados
    console.log(S);
}
