// BEE2630 - Escala de Cinza
// Declarar as variáveis
let entTestes: string | null;
let testes: number;
let i: number;
let metodo: string | null;
let entR: string | null;
let entG: string | null;
let entB: string | null;
let r: number;
let g: number;
let b: number;
let cinza: number;

// Entrada de dados
entTestes = prompt('Quantidade de casos:');

// Processamento dos dados
if (entTestes !== null) {
    testes = parseInt(entTestes);
    for (i = 1; i <= testes; i++) {
        metodo = prompt('Método (eye, mean, min ou max):');
        entR = prompt('Vermelho:');
        entG = prompt('Verde:');
        entB = prompt('Azul:');
        if (metodo !== null && entR !== null && entG !== null && entB !== null) {
            r = parseInt(entR);
            g = parseInt(entG);
            b = parseInt(entB);
            cinza = 0;
            if (metodo === 'eye') {
                cinza = 0.3 * r + 0.59 * g + 0.11 * b;
            } else if (metodo === 'mean') {
                cinza = (r + g + b) / 3;
            } else if (metodo === 'min') {
                cinza = r;
                if (g < cinza) {
                    cinza = g;
                }
                if (b < cinza) {
                    cinza = b;
                }
            } else {
                cinza = r;
                if (g > cinza) {
                    cinza = g;
                }
                if (b > cinza) {
                    cinza = b;
                }
            }

            // Saída de dados
            console.log('Caso #' + i + ': ' + (cinza - cinza % 1));
        }
    }
}
