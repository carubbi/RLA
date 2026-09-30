// BEE2685 - A Mudança
// Declarar as variáveis
let entAngulo: string | null;
let angulo: number;

// Entrada de dados
entAngulo = prompt('Ângulo:');

// Processamento dos dados
while (entAngulo !== null) {
    angulo = parseFloat(entAngulo) % 360;
    if (angulo < 90) {
        // Saída de dados
        console.log('Bom Dia!!');
    } else if (angulo < 180) {
        console.log('Boa Tarde!!');
    } else if (angulo < 270) {
        console.log('Boa Noite!!');
    } else {
        console.log('De Madrugada!!');
    }

    entAngulo = prompt('Ângulo:');
}
