// Versão com prompts diretos, sem função auxiliar
// Declarar as variáveis
let entN: string | null;
let entI: string | null;
let N: number; // Quantidade de acionamentos
let I: number; // Interruptor acionado
let i: number; // Acionamento atual
let A: number; // Estado da lâmpada A: 0 apagada, 1 acesa
let B: number; // Estado da lâmpada B: 0 apagada, 1 acesa

// Entrada de dados
entN = prompt('Digite a quantidade de acionamentos:');

// Processamento dos dados
if (entN !== null) {
    N = parseInt(entN);
    A = 0;
    B = 0;

    for (i = 1; i <= N; i++) {
        entI = prompt('Digite o interruptor acionado (1 ou 2):');

        if (entI !== null) {
            I = parseInt(entI);

            if (A === 0) {
                A = 1;
            } else {
                A = 0;
            }

            if (I === 2) {
                if (B === 0) {
                    B = 1;
                } else {
                    B = 0;
                }
            }
        }
    }

    // Saída de dados
    console.log(A);
    console.log(B);
}
