// Versão do código com função auxiliar para leitura de números
// Função para ler um número
function lerNum(m: string): number {
    let e: string | null; // Entrada do usuário

    while (true) {
        e = prompt(m);

        if (e !== null) {
            return parseFloat(e);
        }
    }
}

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

