// Declarar as variáveis
let entrada: string | null;
let n: number;

function gerarFibonacci(n: number): string {
    // Declarar as variáveis
    let a: number;
    let b: number;
    let proximo: number;
    let i: number;
    let saida: string;

    a = 0;
    b = 1;
    saida = '';

    for (i = 1; i <= n; i++) {
        saida += a;

        if (i < n) {
            saida += ' ';
        }

        proximo = a + b;
        a = b;
        b = proximo;
    }

    return saida;
}

// Entrada de dados
entrada = prompt('Digite a quantidade de termos: ');

// Processamento dos dados
if (entrada !== null) {
    n = parseInt(entrada);

    // Saída de dados
    console.log(gerarFibonacci(n));
}
