// Declarar as variáveis
let entrada: string | null;
let n: number;

function gerarQuadradosCubos(n: number): string {
    // Declarar as variáveis
    let i: number;
    let saida: string;

    saida = '';

    for (i = 1; i <= n; i++) {
        saida += `${i} ${i ** 2} ${i ** 3}`;

        if (i < n) {
            saida += '\n';
        }
    }

    return saida;
}

// Entrada de dados
entrada = prompt('Digite N: ');

// Processamento dos dados
if (entrada !== null) {
    n = parseInt(entrada);

    // Saída de dados
    console.log(gerarQuadradosCubos(n));
}
