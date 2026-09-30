// Aula 8 - Exemplo 9 (geracao dos n primeiros numeros primos)
/** Verifica se um número é primo. */
function ehPrimo(num: number): boolean {
    // Declaração de variáveis locais
    let div: number;

    if (num < 2) {
        return false;
    }

    for (div = 2; div < num; div++) {
        if (num % div === 0) {
            return false;
        }
    }

    return true;
}

/** Gera a quantidade informada de números primos. */
function gerarNPrimeirosPrimos(qtd: number): string {
    // Declaração de variáveis locais
    let cont: number;
    let cand: number;
    let resp: string;

    cont = 0;
    cand = 2;
    resp = "";

    while (cont < qtd) {
        if (ehPrimo(cand)) {
            if (cont > 0) {
                resp += ", ";
            }

            resp += cand;
            cont++;
        }

        cand++;
    }

    return resp;
}

// Declaração de variáveis globais
let entQtd: string | null;
let qtd: number;

// Entrada
entQtd = prompt("Digite quantos numeros primos deseja gerar:"); // 5

if (entQtd !== null) {
    qtd = parseInt(entQtd);

    // Saida
    console.log(gerarNPrimeirosPrimos(qtd)); // 2, 3, 5, 7, 11
}
