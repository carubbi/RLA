// Declarar as variáveis
let entCha: string | null;
let entResposta: string | null;
let cha: number;
let resposta: number;
let acertos: number;
let i: number;

// Entrada de dados
entCha = prompt('Digite o tipo de chá: ');

if (entCha !== null) {
    cha = parseInt(entCha);
    acertos = 0;

    // Processamento dos dados
    for (i = 0; i < 5; i++) {
        entResposta = prompt(`Digite a resposta ${i + 1}: `);

        if (entResposta !== null) {
            resposta = parseInt(entResposta);

            if (resposta === cha) {
                acertos++;
            }
        }
    }

    // Saída de dados
    console.log(acertos);
}
