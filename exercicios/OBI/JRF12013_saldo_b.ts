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
let N: number; // Quantidade de dias
let S: number; // Saldo atual
let V: number; // Movimentação do dia
let M: number; // Menor saldo observado
let i: number; // Dia atual

// Entrada de dados
N = lerNum('Digite a quantidade de dias:');
S = lerNum('Digite o saldo inicial:');

// Processamento dos dados
M = S;

for (i = 1; i <= N; i++) {
    V = lerNum('Digite a movimentação do dia:');
    S += V;

    if (S < M) {
        M = S;
    }
}

// Saída de dados
console.log(M);
