// BEE2547 - Montanha-Russa
// Declarar as variáveis
let entPessoas: string | null;
let entMinima: string | null;
let entMaxima: string | null;
let pessoas: number;
let minima: number;
let maxima: number;
let permitidas: number;
let i: number;
let entAltura: string | null;
let altura: number;

// Entrada de dados
entPessoas = prompt('Quantidade de pessoas:');

// Processamento dos dados
while (entPessoas !== null) {
    entMinima = prompt('Altura mínima:');
    entMaxima = prompt('Altura máxima:');
    if (entMinima !== null && entMaxima !== null) {
        pessoas = parseInt(entPessoas);
        minima = parseInt(entMinima);
        maxima = parseInt(entMaxima);
        permitidas = 0;
        for (i = 0; i < pessoas; i++) {
            entAltura = prompt('Altura da pessoa:');
            if (entAltura !== null) {
                altura = parseInt(entAltura);
                if (altura >= minima && altura <= maxima) {
                    permitidas++;
                }
            }
        }

        // Saída de dados
        console.log(permitidas);
    }

    entPessoas = prompt('Quantidade de pessoas:');
}
