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
a = parseFloat(entA);
b = parseFloat(entB);
c = parseFloat(entC);

if (a < b) {
    temp = a;
    a = b;
    b = temp;
}

if (a < c) {
    temp = a;
    a = c;
    c = temp;
}

if (b < c) {
    temp = b;
    b = c;
    c = temp;
}

if (a >= b + c) {
    console.log('NAO FORMA TRIANGULO');
} else {
    if (a * a === b * b + c * c) {
        console.log('TRIANGULO RETANGULO');
    }

    if (a * a > b * b + c * c) {
        console.log('TRIANGULO OBTUSANGULO');
    }

    if (a * a < b * b + c * c) {
        console.log('TRIANGULO ACUTANGULO');
    }

    if (a === b && b === c) {
        console.log('TRIANGULO EQUILATERO');
    } else if (a === b || a === c || b === c) {
        console.log('TRIANGULO ISOSCELES');
    }
}
}

/*
Solução alternativa com saída única:
if (a >= b + c) {
    saida = 'NAO FORMA TRIANGULO';
} else {
    saida = '';

    if (a * a === b * b + c * c) {
        saida += 'TRIANGULO RETANGULO';
    }

    if (a * a > b * b + c * c) {
        if (saida !== '') {
            saida += '\n';
        }
        saida += 'TRIANGULO OBTUSANGULO';
    }

    if (a * a < b * b + c * c) {
        if (saida !== '') {
            saida += '\n';
        }
        saida += 'TRIANGULO ACUTANGULO';
    }

    if (a === b && b === c) {
        if (saida !== '') {
            saida += '\n';
        }
        saida += 'TRIANGULO EQUILATERO';
    } else if (a === b || a === c || b === c) {
        if (saida !== '') {
            saida += '\n';
        }
        saida += 'TRIANGULO ISOSCELES';
    }
}

// Saída de dados
console.log(saida);
*/
