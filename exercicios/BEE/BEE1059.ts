// BEE1059 - Números Pares
// Declarar as variáveis
let inicioE: string | null;
let fimE: string | null;
let inicio: number;
let num: number;
let fim: number;

// Entrada de dados
inicioE = prompt('Digite o número inicial: ');
fimE = prompt('Digite o número final: ');

// Processamento dos dados
if (inicioE !== null && fimE !== null) {
    inicio = parseInt(inicioE);
    fim = parseInt(fimE);
    num = inicio;

    while (num <= fim) {
        if (num % 2 === 0) {
            // Saída de dados
            console.log(num);
        }
        num++;
    }

    // Solução com for: comente o bloco com while e descomente este bloco.
    // for (num = inicio; num <= fim; num++) {
    //     if (num % 2 === 0) {
    //         console.log(num);
    //     }
    // }
}
