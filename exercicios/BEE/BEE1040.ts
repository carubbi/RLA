// Declarar as variáveis
let entN1: string | null;
let entN2: string | null;
let entN3: string | null;
let entN4: string | null;
let entExame: string | null;
let n1: number;
let n2: number;
let n3: number;
let n4: number;
let media: number;
let exame: number;
let mediaFinal: number;

// Entrada de dados
entN1 = prompt('Digite a nota 1: ');
entN2 = prompt('Digite a nota 2: ');
entN3 = prompt('Digite a nota 3: ');
entN4 = prompt('Digite a nota 4: ');

// Processamento dos dados
if (
    entN1 !== null &&
    entN2 !== null &&
    entN3 !== null &&
    entN4 !== null
) {
    n1 = parseFloat(entN1);
    n2 = parseFloat(entN2);
    n3 = parseFloat(entN3);
    n4 = parseFloat(entN4);
    media = (n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10;

    // Saída de dados
    console.log(`Media: ${media.toFixed(1)}`);

    if (media >= 7.0) {
        console.log('Aluno aprovado.');
    } else if (media < 5.0) {
        console.log('Aluno reprovado.');
    } else {
        console.log('Aluno em exame.');
        entExame = prompt('Digite a nota do exame: ');

        if (entExame !== null) {
            exame = parseFloat(entExame);
            console.log(`Nota do exame: ${exame.toFixed(1)}`);
            mediaFinal = (media + exame) / 2;

            if (mediaFinal >= 5.0) {
                console.log('Aluno aprovado.');
            } else {
                console.log('Aluno reprovado.');
            }

            console.log(`Media final: ${mediaFinal.toFixed(1)}`);
        }
    }
}
