// Declarar as variáveis
let entNum: string;
let entHoras: string;
let entValorHora: string;
let numero: number;
let horas: number;
let valorHora: number;
let salario: number;

// Entrada de dados
entNum = prompt('Digite o numero do funcionario: ')!;
entHoras = prompt('Digite as horas trabalhadas: ')!;
entValorHora = prompt('Digite o valor por hora: ')!;

// Processamento dos dados
numero = parseInt(entNum);
horas = parseInt(entHoras);
valorHora = parseFloat(entValorHora);

salario = horas * valorHora;

// Saída de dados
console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
