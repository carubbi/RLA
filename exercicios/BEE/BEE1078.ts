// Declarar as variáveis
let entNum: string | null;
let numero: number;
let i: number;

// Entrada de dados
entNum = prompt('Digite um numero: ');

// Processamento dos dados
if (entNum !== null) {
numero = parseInt(entNum);

// Saída de dados
for (i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`);
}
}
