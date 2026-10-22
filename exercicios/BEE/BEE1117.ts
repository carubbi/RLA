// Declarar as variáveis
let entNota: string | null;
let nota: number;
let somaNotas: number;
let quantidadeValidas: number;

// Entrada de dados: a leitura se repete no laço.
entNota = "";

// Processamento dos dados
somaNotas = 0;
quantidadeValidas = 0;
while (quantidadeValidas < 2 && entNota !== null) {
    entNota = prompt('Digite uma nota: ');

    if (entNota !== null) {
        nota = parseFloat(entNota);

        if (nota >= 0 && nota <= 10) {
            somaNotas += nota;
            quantidadeValidas++;
        } else {
            // Saída de dados
            console.log('nota invalida');
        }
    }
}

if (entNota !== null) {
    console.log(`media = ${(somaNotas / 2).toFixed(2)}`);
}
