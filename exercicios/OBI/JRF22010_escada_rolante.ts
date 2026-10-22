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
let N: number; // Quantidade de pessoas
let T: number; // Instante de passagem da pessoa atual
let i: number; // Pessoa atual
let A: number; // Instante de passagem da pessoa anterior
let D: number; // Diferença entre os instantes
let S: number; // Tempo total de funcionamento

// Entrada da quantidade de pessoas
N = lerNum("Digite a quantidade de pessoas:");

// Entrada do instante de passagem da primeira pessoa
T = lerNum("Digite o instante de passagem:");

// Inicialização do instante anterior e do acumulador
A = T;
S = 10;

// Leitura e processamento das demais pessoas
for (i = 2; i <= N; i++) {
    T = lerNum("Digite o instante de passagem:");

    D = T - A;

    if (D < 10) {
        S += D;
    } else {
        S += 10;
    }

    A = T;
}

// Saída do resultado
console.log(S);