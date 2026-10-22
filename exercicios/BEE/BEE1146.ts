// Declarar as variáveis
let entX: string | null;
let x: number;
let i: number;
let linha: string;

// Entrada de dados
entX = prompt('Digite X (0 para encerrar): ');

// Processamento dos dados
if (entX !== null) {
    x = parseInt(entX);

    while (x !== 0 && entX !== null) {
        linha = '';

        for (i = 1; i <= x; i++) {
            if (i > 1) {
                linha += ' ';
            }

            linha += i;
        }

        // Saída de dados
        console.log(linha);
        entX = prompt('Digite X (0 para encerrar): ');

        if (entX !== null) {
            x = parseInt(entX);
        }
    }
}
