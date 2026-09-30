// BEE1018 - Cédulas: decomposição sequencial, sem vetor ou laço.
// Declarar as variáveis
let entrada: string;
let valor: number;
let restante: number;
let quantidade: number;

// Entrada de dados
entrada = prompt('Digite o valor:')!;

// Processamento dos dados
valor = parseInt(entrada);
restante = valor;

// Saída de dados
console.log(valor);

quantidade = (restante - restante % 100) / 100;
console.log(quantidade + ' nota(s) de R$ 100,00');
restante = restante % 100;

quantidade = (restante - restante % 50) / 50;
console.log(quantidade + ' nota(s) de R$ 50,00');
restante = restante % 50;

quantidade = (restante - restante % 20) / 20;
console.log(quantidade + ' nota(s) de R$ 20,00');
restante = restante % 20;

quantidade = (restante - restante % 10) / 10;
console.log(quantidade + ' nota(s) de R$ 10,00');
restante = restante % 10;

quantidade = (restante - restante % 5) / 5;
console.log(quantidade + ' nota(s) de R$ 5,00');
restante = restante % 5;

quantidade = (restante - restante % 2) / 2;
console.log(quantidade + ' nota(s) de R$ 2,00');
restante = restante % 2;

console.log(restante + ' nota(s) de R$ 1,00');
