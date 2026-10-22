// Declarar as variáveis
let entA: string | null;
let entB: string | null;
let entC: string | null;
let a: number;
let b: number;
let c: number;
let temp: number;

// Entrada de dados
entA = prompt('Digite A: ');
entB = prompt('Digite B: ');
entC = prompt('Digite C: ');

// Processamento dos dados
if (entA !== null && entB !== null && entC !== null) {
    a = parseInt(entA);
    b = parseInt(entB);
    c = parseInt(entC);

    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    if (a > c) {
        temp = a;
        a = c;
        c = temp;
    }

    if (b > c) {
        temp = b;
        b = c;
        c = temp;
    }

    // Saída de dados
    console.log(a);
    console.log(b);
    console.log(c);
    console.log('');
    console.log(entA);
    console.log(entB);
    console.log(entC);
}
