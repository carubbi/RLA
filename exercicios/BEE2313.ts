// Declarar as variáveis
let entA: string | null;
let entB: string | null;
let entC: string | null;
let a: number;
let b: number;
let c: number;

// Entrada de dados
entA = prompt('Digite A: ');
entB = prompt('Digite B: ');
entC = prompt('Digite C: ');

// Processamento dos dados
if (entA !== null && entB !== null && entC !== null) {
    a = parseInt(entA);
    b = parseInt(entB);
    c = parseInt(entC);

    if (a >= b + c || b >= a + c || c >= a + b) {
        // Saída de dados
        console.log('Invalido');
    } else if (a === b && b === c) {
        console.log('Valido-Equilatero');
        console.log('Retangulo: N');
    } else if (a !== b && a !== c && b !== c) {
        console.log('Valido-Escaleno');

        if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
            console.log('Retangulo: S');
        } else {
            console.log('Retangulo: N');
        }
    } else {
        console.log('Valido-Isoceles');

        if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
            console.log('Retangulo: S');
        } else {
            console.log('Retangulo: N');
        }
    }
}
