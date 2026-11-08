// DECLARACAO
let entN: string | null;
let entT: string | null;
let N: number;
let T: number;
let p: number;
let A: number;
let D: number;
let S: number;

// ENTRADA
entN = prompt('Digite a quantidade de pessoas:');

// PROCESSAMENTO
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

    // SAÍDA
    console.log(S);
}
