// Declarar as variáveis
let entNum: string | null;
let numero: number;
let i: number;

// Entrada de dados
entNum = prompt('Digite um numero: ');

// Processamento dos dados
if (entNum !== null) {
    numero = parseInt(entNum);

    for (i = 2; i <= numero; i += 2) {
        // Saída de dados
        console.log(`${i}^2 = ${i * i}`);
    }
}
