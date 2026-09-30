// Declarar as variáveis
let entX: string | null;
let entY: string | null;
let x: number;
let y: number;
let inicio: number;
let fim: number;
let soma: number;
let i: number;

// Entrada de dados
entX = prompt('Digite X: ');
entY = prompt('Digite Y: ');

// Processamento dos dados
if (entX !== null && entY !== null) {
    x = parseInt(entX);
    y = parseInt(entY);
    inicio = x;
    fim = y;

    if (x > y) {
        inicio = y;
        fim = x;
    }

    soma = 0;

    // Os extremos não entram na soma.
    for (i = inicio + 1; i < fim; i++) {
        if (i % 2 !== 0) {
            soma += i;
        }
    }

    // Saída de dados
    console.log(soma);
}
