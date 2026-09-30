// BEE1117 - Validação de Nota: solução com funções
// Declarar as variáveis globais
let entNota: string | null;
let nota: number;
let nota1: number;
let nota2: number;
let qtdValidas: number;
let media: number;

/** Verifica se a nota está entre 0 e 10. */
function notaValida(nota: number): boolean {
    // Declarar as variáveis locais
    let valida: boolean;

    valida = nota >= 0 && nota <= 10;
    return valida;
}

/** Calcula a média de duas notas. */
function calcularMedia(nota1: number, nota2: number): number {
    // Declarar as variáveis locais
    let res: number;

    res = (nota1 + nota2) / 2;
    return res;
}

// Entrada de dados: a leitura se repete até obter duas notas válidas.
entNota = "";

// Processamento dos dados
qtdValidas = 0;
nota1 = 0;
nota2 = 0;
while (qtdValidas < 2 && entNota !== null) {
    entNota = prompt('Digite uma nota: ');

    if (entNota !== null) {
        nota = parseFloat(entNota);

        if (notaValida(nota)) {
            if (qtdValidas === 0) {
                nota1 = nota;
            } else {
                nota2 = nota;
            }
            qtdValidas++;
        } else {
            // Saída de dados
            console.log('nota invalida');
        }
    }
}

if (qtdValidas === 2) {
    media = calcularMedia(nota1, nota2);

    // Saída de dados
    console.log(`media = ${media.toFixed(2)}`);
}
