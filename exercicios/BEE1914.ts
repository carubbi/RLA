// BEE1914 - De Quem é a Vez?
// Declarar as variáveis
let i: number;
let entTestes: string | null;
let testes: number;
let nome1: string | null;
let escolha1: string | null;
let nome2: string | null;
let escolha2: string | null;
let entNum1: string | null;
let entNum2: string | null;
let soma: number;

// Entrada de dados
entTestes = prompt('Quantidade de partidas:');

// Processamento dos dados
if (entTestes !== null) {
    testes = parseInt(entTestes);
    for (i = 0; i < testes; i++) {
        nome1 = prompt('Nome do primeiro jogador:');
        escolha1 = prompt('PAR ou IMPAR:');
        nome2 = prompt('Nome do segundo jogador:');
        escolha2 = prompt('PAR ou IMPAR:');
        entNum1 = prompt('Número do primeiro jogador:');
        entNum2 = prompt('Número do segundo jogador:');
        if (nome1 !== null && escolha1 !== null && nome2 !== null &&
            escolha2 !== null && entNum1 !== null && entNum2 !== null) {
            soma = parseInt(entNum1) + parseInt(entNum2);
            if ((soma % 2 === 0 && escolha1 === 'PAR') ||
                (soma % 2 !== 0 && escolha1 === 'IMPAR')) {
                // Saída de dados
                console.log(nome1);
            } else {
                console.log(nome2);
            }
        }
    }
}
