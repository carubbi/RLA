// Declarar as variáveis
let entCod: string;
let entQtd: string;
let codProd: number;
let qtdProd: number;
let precoProd: number;
let totalPagar: number;

// Entrada de dados
entCod = prompt('Digite o código do produto: ')!;
entQtd = prompt('Digite a quantidade do produto: ')!;

// Processamento dos dados
// Converter as entradas (string) para numérico
codProd = parseInt(entCod);
qtdProd = parseInt(entQtd);

// Definir o preço do produto
switch (codProd) {
    case 1:
        precoProd = 4;
        break;
    case 2:
        precoProd = 4.5;
        break;
    case 3:
        precoProd = 5;
        break;
    case 4:
        precoProd = 2;
        break;
    default:
        precoProd = 1.5;
}

// Calcular o total a pagar
totalPagar = qtdProd * precoProd;

// Saída de dados
console.log(`Total: R$ ${totalPagar.toFixed(2)}`);
