// Declarar as variáveis
let entCodigo1: string;
let entQtd1: string;
let entValor1: string;
let entCodigo2: string;
let entQtd2: string;
let entValor2: string;
let codigo1: number;
let quantidade1: number;
let valor1: number;
let codigo2: number;
let quantidade2: number;
let valor2: number;
let total: number;

// Entrada de dados
entCodigo1 = prompt('Digite o codigo da peca 1: ')!;
entQtd1 = prompt('Digite a quantidade da peca 1: ')!;
entValor1 = prompt('Digite o valor unitario da peca 1: ')!;
entCodigo2 = prompt('Digite o codigo da peca 2: ')!;
entQtd2 = prompt('Digite a quantidade da peca 2: ')!;
entValor2 = prompt('Digite o valor unitario da peca 2: ')!;

// Processamento dos dados
codigo1 = parseInt(entCodigo1);
quantidade1 = parseInt(entQtd1);
valor1 = parseFloat(entValor1);
codigo2 = parseInt(entCodigo2);
quantidade2 = parseInt(entQtd2);
valor2 = parseFloat(entValor2);

total = quantidade1 * valor1 + quantidade2 * valor2;

// Saída de dados
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
