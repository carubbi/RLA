// BEE2712 - Rodízio Veicular
// Declarar as variáveis
let entTestes: string | null;
let testes: number;
let i: number;
let placa: string | null;
let caracteres: string[];
let valida: boolean;
let j: number;

// Entrada de dados
entTestes = prompt('Quantidade de placas:');

// Processamento dos dados
if (entTestes !== null) {
    testes = parseInt(entTestes);
    for (i = 0; i < testes; i++) {
        placa = prompt('Placa:');
        if (placa !== null) {
            caracteres = placa.split('');
            valida = caracteres.length === 8 && caracteres[3] === '-';
            for (j = 0; j < 3; j++) {
                if (caracteres[j] < 'A' || caracteres[j] > 'Z') {
                    valida = false;
                }
            }
            for (j = 4; j < 8; j++) {
                if (caracteres[j] < '0' || caracteres[j] > '9') {
                    valida = false;
                }
            }

            if (!valida) {
                // Saída de dados
                console.log('FAILURE');
            } else if (caracteres[7] === '1' || caracteres[7] === '2') {
                console.log('MONDAY');
            } else if (caracteres[7] === '3' || caracteres[7] === '4') {
                console.log('TUESDAY');
            } else if (caracteres[7] === '5' || caracteres[7] === '6') {
                console.log('WEDNESDAY');
            } else if (caracteres[7] === '7' || caracteres[7] === '8') {
                console.log('THURSDAY');
            } else {
                console.log('FRIDAY');
            }
        }
    }
}
