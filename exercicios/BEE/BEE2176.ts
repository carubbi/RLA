// BEE2176 - Paridade
// Declarar as variáveis
let bits: string | null;
let caracteres: string[];
let uns: number;
let i: number;

// Entrada de dados
bits = prompt('Sequência de bits:');

// Processamento dos dados
if (bits !== null) {
    caracteres = bits.split('');
    uns = 0;
    for (i = 0; i < caracteres.length; i++) {
        if (caracteres[i] === '1') {
            uns++;
        }
    }

    if (uns % 2 === 0) {
        // Saída de dados
        console.log(bits + '0');
    } else {
        console.log(bits + '1');
    }
}
