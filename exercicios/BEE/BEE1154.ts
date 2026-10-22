// Declarar as variáveis
let entIdade: string | null;
let idade: number;
let soma: number;
let quantidade: number;

// Entrada de dados
entIdade = prompt('Digite uma idade (negativa para encerrar): ');
soma = 0;
quantidade = 0;

// Processamento dos dados
if (entIdade !== null) {
    idade = parseInt(entIdade);

    while (idade >= 0 && entIdade !== null) {
        soma += idade;
        quantidade++;
        entIdade = prompt('Digite uma idade (negativa para encerrar): ');

        if (entIdade !== null) {
            idade = parseInt(entIdade);
        }
    }
}

// Saída de dados
if (quantidade > 0) {
    console.log((soma / quantidade).toFixed(2));
}
