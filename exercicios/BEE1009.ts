// Declarar as variáveis
let nome: string;
let entSalario: string;
let entVendas: string;
let salarioFixo: number;
let vendas: number;
let total: number;

// Entrada de dados
nome = prompt('Digite o nome: ')!;
entSalario = prompt('Digite o salario fixo: ')!;
entVendas = prompt('Digite o total de vendas: ')!;

// Processamento dos dados
salarioFixo = parseFloat(entSalario);
vendas = parseFloat(entVendas);

total = salarioFixo + (vendas * 0.15);

// Saída de dados
console.log(`TOTAL = R$ ${total.toFixed(2)}`);
