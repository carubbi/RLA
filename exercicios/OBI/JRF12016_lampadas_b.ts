// Soluções abaixo admitem apenas números inteiros válidos, sem tratamento de erros
// Versão do código com função auxiliar para leitura e conversão de números
function lerNum(m: string): number {
    let e: string | null; // Entrada do usuário

    while (true) {
        e = prompt(m);

        if (e !== null) {
            return parseInt(e);
        }
    }
}

/*
// Função de leitura e conversão sem o loop de repetição
function lerNum(mensagem: string): number {
    let entrada: string | null;

    entrada = prompt(mensagem);
    if (entrada !== null) return parseInt(entrada);
    return 0;
}
*/

// Declarar as variáveis
let N: number; // Quantidade de acionamentos
let I: number; // Interruptor acionado
let i: number; // Acionamento atual
let A: number; // Estado da lâmpada A: 0 apagada, 1 acesa
let B: number; // Estado da lâmpada B: 0 apagada, 1 acesa

// Entrada de dados
N = lerNum('Digite a quantidade de acionamentos:');

// Processamento dos dados
A = 0;
B = 0;

for (i = 1; i <= N; i++) {
    I = lerNum('Digite o interruptor acionado (1 ou 2):');

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

// Saída de dados
console.log(A);
console.log(B);
