// Declarar as variáveis
let entSalario: string;
let salario: number;
let imposto: number;

// Entrada de dados
entSalario = prompt('Digite o salario: ')!;

// Processamento dos dados
salario = parseFloat(entSalario);

if (salario <= 2000) {
    console.log('Isento');
} else {
    if (salario <= 3000) {
        imposto = (salario - 2000) * 0.08;
    } else if (salario <= 4500) {
        imposto = 1000 * 0.08 + (salario - 3000) * 0.18;
    } else {
        imposto = 1000 * 0.08 + 1500 * 0.18 + (salario - 4500) * 0.28;
    }

    // Saída de dados
    console.log(`R$ ${imposto.toFixed(2)}`);
}
