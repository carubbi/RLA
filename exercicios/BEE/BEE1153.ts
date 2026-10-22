// Declarar as variáveis
let entN: string | null;
let n: number;

function calcularFatorial(numero: number): number {
    // Declarar as variáveis
    let resultado: number;
    let contador: number;

    resultado = 1;

    for (contador = 1; contador <= numero; contador++) {
        resultado *= contador;
    }

    return resultado;
}

// Entrada de dados
entN = prompt('Digite N: ');

// Processamento dos dados
if (entN !== null) {
    n = parseInt(entN);

    // Saída de dados
    console.log(calcularFatorial(n));
}
