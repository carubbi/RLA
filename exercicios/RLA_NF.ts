// Declarar as variáveis
let entradaAF11: string | null;
let entradaAF12: string | null;
let entradaAS1: string | null;
let entradaAF21: string | null;
let entradaAF22: string | null;
let entradaAS2: string | null;
let entradaAV3: string | null;
let entradaFrequencia: string | null;
let af11: number;
let af12: number;
let as1: number;
let af21: number;
let af22: number;
let as2: number;
let av3: number | null;
let frequencia: number;
let af1: number;
let af2: number;
let av1: number;
let av2: number;
let mp: number;
let nf: number | null;
let situacao: string;

// AV3 e NF ficam ausentes até que o estudante tenha MP suficiente e informe a nota.
av3 = null;
nf = null;

// Entrada de dados
entradaAF11 = prompt('Digite a nota da AF1.1: ');
entradaAF12 = prompt('Digite a nota da AF1.2: ');
entradaAS1 = prompt('Digite a nota da AS1: ');
entradaAF21 = prompt('Digite a nota da AF2.1: ');
entradaAF22 = prompt('Digite a nota da AF2.2: ');
entradaAS2 = prompt('Digite a nota da AS2: ');
entradaFrequencia = prompt('Digite a frequência em percentual: ');

if (
    entradaAF11 !== null &&
    entradaAF12 !== null &&
    entradaAS1 !== null &&
    entradaAF21 !== null &&
    entradaAF22 !== null &&
    entradaAS2 !== null &&
    entradaFrequencia !== null
) {
    // Processamento dos dados
    af11 = parseFloat(entradaAF11);
    af12 = parseFloat(entradaAF12);
    as1 = parseFloat(entradaAS1);
    af21 = parseFloat(entradaAF21);
    af22 = parseFloat(entradaAF22);
    as2 = parseFloat(entradaAS2);
    frequencia = parseFloat(entradaFrequencia);

    af1 = Math.max(af11, af12);
    af2 = Math.max(af21, af22);
    av1 = 0.20 * af1 + 0.80 * as1;
    av2 = 0.20 * af2 + 0.80 * as2;
    mp = (av1 + av2) / 2;
    // Saída das avaliações e da média parcial
    console.log(`AV1 = ${av1.toFixed(2)}`);
    console.log(`AV2 = ${av2.toFixed(2)}`);
    console.log(`MP = ${mp.toFixed(2)}`);

    if (mp < 4) {
        // Sem direito à AV3, av3 e nf permanecem null.
        console.log('AV3 = nao realizada');
        console.log('NF = nao calculada');
        console.log('Situacao: Reprovado por MP inferior a 4');
    } else {
        entradaAV3 = prompt('Digite a nota da AV3: ');

        if (entradaAV3 !== null) {
            av3 = parseFloat(entradaAV3);
            nf = (mp + av3) / 2;

            if (av3 >= 4 && nf >= 5 && frequencia >= 75) {
                situacao = 'Aprovado';
            } else {
                situacao = 'Reprovado';
            }

            console.log(`AV3 = ${av3.toFixed(2)}`);
            console.log(`NF = ${nf.toFixed(2)}`);
            console.log(`Situacao: ${situacao}`);
        } else {
            console.log('Calculo cancelado.');
        }
    }
} else {
    console.log('Calculo cancelado.');
}
