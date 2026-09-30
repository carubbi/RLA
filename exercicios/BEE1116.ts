// Declarar as variáveis
let entTestes: string | null;
let entX: string | null;
let entY: string | null;
let testes: number;
let x: number;
let y: number;
let i: number;

// Entrada de dados
entTestes = prompt('Digite a quantidade de testes: ');

// Processamento dos dados
if (entTestes !== null) {
    testes = parseInt(entTestes);

    for (i = 0; i < testes; i++) {
        entX = prompt('Digite X: ');
        entY = prompt('Digite Y: ');

        if (entX !== null && entY !== null) {
            x = parseInt(entX);
            y = parseInt(entY);

            if (y === 0) {
                // Saída de dados
                console.log('divisao impossivel');
            } else {
                console.log((x / y).toFixed(1));
            }
        }
    }
}
