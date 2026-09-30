// Declarar as variáveis
let passo: number;
let j: number;
let i: number;
let valorJ: number;
let textoI: string;
let textoJ: string;

// Usar passos inteiros evita erro de arredondamento ao somar 0.2.
// Entrada de dados: não há entrada neste problema.
// Processamento dos dados
for (passo = 0; passo <= 10; passo++) {
    i = passo / 5;

    for (j = 1; j <= 3; j++) {
        valorJ = j + i;

        if (passo % 5 === 0) {
            textoI = `${i}`;
            textoJ = `${valorJ}`;
        } else {
            textoI = i.toFixed(1);
            textoJ = valorJ.toFixed(1);
        }

        // Saída de dados
        console.log(`I=${textoI} J=${textoJ}`);
    }
}
