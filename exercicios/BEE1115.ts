// Declarar as variáveis
let entX: string | null;
let entY: string | null;
let x: number;
let y: number;

// Entrada de dados: a leitura se repete no laço.
entX = "";
entY = "";

// Processamento dos dados
while (entX !== null && entY !== null) {
    entX = prompt('Digite X: ');
    entY = prompt('Digite Y: ');

    if (entX !== null && entY !== null) {
        x = parseInt(entX);
        y = parseInt(entY);

        if (x === 0 || y === 0) {
            break;
        }

        if (x > 0 && y > 0) {
            // Saída de dados
            console.log('primeiro');
        } else if (x < 0 && y > 0) {
            console.log('segundo');
        } else if (x < 0 && y < 0) {
            console.log('terceiro');
        } else {
            console.log('quarto');
        }
    }
}
