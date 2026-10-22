// BEE2554 - Pizza Antes de BH
// Declarar as variáveis
let entPessoas: string | null;
let entDatas: string | null;
let pessoas: number;
let datas: number;
let primeiraData: string;
let i: number;
let data: string | null;
let podemIr: number;
let j: number;
let entrada: string | null;

// Entrada de dados
entPessoas = prompt('Quantidade de pessoas:');

// Processamento dos dados
while (entPessoas !== null) {
    entDatas = prompt('Quantidade de datas:');
    if (entDatas !== null) {
        pessoas = parseInt(entPessoas);
        datas = parseInt(entDatas);
        primeiraData = '';
        for (i = 0; i < datas; i++) {
            data = prompt('Data:');
            podemIr = 0;
            for (j = 0; j < pessoas; j++) {
                entrada = prompt('Pode comparecer (0 ou 1):');
                if (entrada !== null && parseInt(entrada) === 1) {
                    podemIr++;
                }
            }

            if (data !== null && podemIr === pessoas && primeiraData === '') {
                primeiraData = data;
            }
        }

        if (primeiraData === '') {
            // Saída de dados
            console.log('Pizza antes de FdI');
        } else {
            console.log(primeiraData);
        }
    }

    entPessoas = prompt('Quantidade de pessoas:');
}
