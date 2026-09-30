// Declarar as variáveis
let entrada: string | null;
let n: number;

function gerarSequencia(n: number): string {
    // Declarar as variáveis
    let i: number;
    let quadrado: number;
    let cubo: number;
    let saida: string;

    saida = '';

    for (i = 1; i <= n; i++) {
        quadrado = i ** 2;
        cubo = i ** 3;
        saida += `${i} ${quadrado} ${cubo}\n`;
        saida += `${i} ${quadrado + 1} ${cubo + 1}`;

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
    console.log(gerarSequencia(n));
}
