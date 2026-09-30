// Declarar as variáveis
let entQtd: string | null;
let entNum: string | null;
let quantidade: number;
let numero: number;
let dentro: number;
let fora: number;
let i: number;

// Entrada de dados
entQtd = prompt('Digite a quantidade de valores: ');

// Processamento dos dados
if (entQtd !== null) {
quantidade = parseInt(entQtd);
dentro = 0;
fora = 0;
entNum = "";

for (i = 0; i < quantidade && entNum !== null; i++) {
    entNum = prompt('Digite um valor: ');

    if (entNum !== null) {
        numero = parseInt(entNum);

        if (numero >= 10 && numero <= 20) {
            dentro++;
        } else {
            fora++;
        }
    }
}

// Saída de dados
if (entNum !== null) {
    console.log(`${dentro} in`);
    console.log(`${fora} out`);
}
}
