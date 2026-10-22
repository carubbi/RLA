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

// Declaração das variáveis
let N: number; // Quantidade de bandejas
let L: number; // Quantidade de latas
let C: number; // Quantidade de copos
let i: number;  // Bandeja atual
let T: number;  // Total de copos quebrados

// Entrada da quantidade de bandejas
N = lerNum("Digite a quantidade de bandejas:");

// Inicialização do acumulador
T = 0;

// Leitura e processamento de cada bandeja
for (i = 1; i <= N; i = i + 1) {
    L = lerNum("Digite a quantidade de latas:");
    C = lerNum("Digite a quantidade de copos:");

    if (L > C) {
        T += C;
    }
}

// Saída do resultado
console.log(T);

