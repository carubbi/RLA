// Declarar as variáveis
let entTestes: string | null;
let entA: string | null;
let entB: string | null;
let entC: string | null;
let testes: number;
let a: number;
let b: number;
let c: number;
let media: number;
let i: number;

// Entrada de dados
entTestes = prompt('Digite a quantidade de testes: ');

// Processamento dos dados
if (entTestes !== null) {
    testes = parseInt(entTestes);

    for (i = 0; i < testes; i++) {
        entA = prompt('Digite A: ');
        entB = prompt('Digite B: ');
        entC = prompt('Digite C: ');

        if (entA !== null && entB !== null && entC !== null) {
            a = parseFloat(entA);
            b = parseFloat(entB);
            c = parseFloat(entC);
            media = (a * 2 + b * 3 + c * 5) / 10;

            // Saída de dados
            console.log(media.toFixed(1));
        }
    }
}
