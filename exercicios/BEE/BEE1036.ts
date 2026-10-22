// Declarar as variáveis
let entA: string | null;
let entB: string | null;
let entC: string | null;
let A: number;
let B: number;
let C: number;
let delta: number;
let R1: number;
let R2: number;
let raizDelta: number;

// Entrada de dados
entA = prompt('Digite A: ');
entB = prompt('Digite B: ');
entC = prompt('Digite C: ');

if (entA !== null && entB !== null && entC !== null) {
    // Processamento dos dados
    // Converter as entradas (string) para numérico
    A = parseFloat(entA);
    B = parseFloat(entB);
    C = parseFloat(entC);

    delta = (B * B) - (4 * A * C);

    // Saída de dados
    if ((A === 0) || (delta < 0)) {
        console.log(`Impossivel calcular`);
    } else {
        raizDelta = delta ** (1 / 2);
        R1 = (-B + raizDelta) / (2 * A);
        R2 = (-B - raizDelta) / (2 * A);
        console.log(`R1 = ${R1.toFixed(5)}`);
        console.log(`R2 = ${R2.toFixed(5)}`);
    }
}
