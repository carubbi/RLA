// Declarar as variáveis
let entT: string | null;
let entX: string | null;
let t: number;
let caso: number;
let x: number;
let mensagem: string;

function ehPrimo(numero: number): boolean {
    // Declarar as variáveis
    let divisor: number;

    if (numero < 2) {
        return false;
    }

    for (divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }

    return true;
}

// Entrada de dados
entT = prompt('Digite a quantidade de casos: ');

// Processamento dos dados
if (entT !== null) {
    t = parseInt(entT);
    entX = "";

    for (caso = 1; caso <= t && entX !== null; caso++) {
        entX = prompt('Digite o numero: ');

        if (entX !== null) {
            x = parseInt(entX);

            if (ehPrimo(x)) {
                mensagem = `${entX} eh primo`;
            } else {
                mensagem = `${entX} nao eh primo`;
            }

            // Saída de dados
            console.log(mensagem);
        }
    }
}
