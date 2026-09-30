// Declarar as variáveis
let entTestes: string | null;
let entQtd: string | null;
let entTipo: string | null;
let testes: number;
let quantidade: number;
let coelhos: number;
let ratos: number;
let sapos: number;
let total: number;
let i: number;

// Entrada de dados
entTestes = prompt('Digite a quantidade de testes: ');

// Processamento dos dados
if (entTestes !== null) {
    testes = parseInt(entTestes);
    coelhos = 0;
    ratos = 0;
    sapos = 0;

    for (i = 0; i < testes; i++) {
        entQtd = prompt('Digite a quantidade de cobaias: ');
        entTipo = prompt('Digite o tipo (C, R ou S): ');

        if (entQtd !== null && entTipo !== null) {
            quantidade = parseInt(entQtd);

            if (entTipo === 'C') {
                coelhos += quantidade;
            } else if (entTipo === 'R') {
                ratos += quantidade;
            } else if (entTipo === 'S') {
                sapos += quantidade;
            }
        }
    }

    total = coelhos + ratos + sapos;

    // Saída de dados
    console.log(`Total: ${total} cobaias`);
    console.log(`Total de coelhos: ${coelhos}`);
    console.log(`Total de ratos: ${ratos}`);
    console.log(`Total de sapos: ${sapos}`);
    console.log(`Percentual de coelhos: ${(coelhos * 100 / total).toFixed(2)} %`);
    console.log(`Percentual de ratos: ${(ratos * 100 / total).toFixed(2)} %`);
    console.log(`Percentual de sapos: ${(sapos * 100 / total).toFixed(2)} %`);
}
