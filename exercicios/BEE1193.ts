// BEE1193 - Conversão entre Bases
// Declarar as variáveis
let entTestes: string | null;
let testes: number;
let i: number;
let valor: string | null;
let origem: string | null;
let decimal: number;

function paraDecimal(valor: string, base: number): number {
    // Declarar as variáveis
    let digitos: string[];
    let caracteres: string[];
    let decimal: number;
    let i: number;
    let algarismo: number;
    let j: number;

    digitos = ['0', '1', '2', '3', '4', '5', '6', '7',
        '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    caracteres = valor.split('');
    decimal = 0;

    for (i = 0; i < caracteres.length; i++) {
        algarismo = 0;
        for (j = 0; j < base; j++) {
            if (caracteres[i] === digitos[j]) {
                algarismo = j;
            }
        }
        decimal = decimal * base + algarismo;
    }

    return decimal;
}

function deDecimal(valor: number, base: number): string {
    // Declarar as variáveis
    let digitos: string[];
    let resultado: string;
    let restante: number;

    digitos = ['0', '1', '2', '3', '4', '5', '6', '7',
        '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    resultado = '';
    restante = valor;

    if (restante === 0) {
        resultado = '0';
    }
    while (restante > 0) {
        resultado = digitos[restante % base] + resultado;
        restante = (restante - restante % base) / base;
    }

    return resultado;
}

// Entrada de dados
entTestes = prompt('Quantidade de casos:');

// Processamento dos dados
if (entTestes !== null) {
    testes = parseInt(entTestes);

    for (i = 1; i <= testes; i++) {
        valor = prompt('Número:');
        origem = prompt('Base (dec, bin ou hex):');

        if (valor !== null && origem !== null) {
            // Saída de dados
            console.log('Case ' + i + ':');

            if (origem === 'dec') {
                decimal = parseInt(valor);
                console.log(deDecimal(decimal, 16) + ' hex');
                console.log(deDecimal(decimal, 2) + ' bin');
            } else if (origem === 'bin') {
                decimal = paraDecimal(valor, 2);
                console.log(decimal + ' dec');
                console.log(deDecimal(decimal, 16) + ' hex');
            } else {
                decimal = paraDecimal(valor, 16);
                console.log(decimal + ' dec');
                console.log(deDecimal(decimal, 2) + ' bin');
            }

            console.log('');
        }
    }
}
