// Declarar as variáveis
let entCodigo: string | null;
let codigo: number;
let alcool: number;
let gasolina: number;
let diesel: number;

// Entrada de dados: a leitura se repete no laço.
entCodigo = "";

// Processamento dos dados
alcool = 0;
gasolina = 0;
diesel = 0;
while (entCodigo !== null) {
    entCodigo = prompt('Digite o codigo: ');

    if (entCodigo !== null) {
        codigo = parseInt(entCodigo);

        if (codigo === 1) {
            alcool++;
        } else if (codigo === 2) {
            gasolina++;
        } else if (codigo === 3) {
            diesel++;
        } else if (codigo === 4) {
            break;
        }
    }
}

if (entCodigo !== null) {
    // Saída de dados
    console.log('MUITO OBRIGADO');
    console.log(`Alcool: ${alcool}`);
    console.log(`Gasolina: ${gasolina}`);
    console.log(`Diesel: ${diesel}`);
}
