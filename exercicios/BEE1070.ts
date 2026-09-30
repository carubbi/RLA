// Declarar as variáveis
let entX: string | null;
let x: number;
let i: number;

// Entrada de dados
entX = prompt('Digite X: ');

// Processamento dos dados
if (entX !== null) {
x = parseInt(entX);

if (x % 2 === 0) {
    x++;
}

// Saída de dados
for (i = 0; i < 6; i++) {
    console.log(x);
    x += 2;
}
}
