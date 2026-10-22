// Declarar as variáveis
let entNum: string | null;
let numero: number;
let maior: number;
let posicao: number;
let i: number;

// Entrada de dados: os números são lidos no laço.

// Processamento dos dados
maior = 0;
posicao = 0;

for (i = 1; i <= 100; i++) {
    entNum = prompt(`Digite o ${i}o numero: `);

    if (entNum !== null) {
        numero = parseInt(entNum);

        if (i === 1 || numero > maior) {
            maior = numero;
            posicao = i;
        }
    }
}

// Saída de dados
console.log(maior);
console.log(posicao);
