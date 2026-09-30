// Declarar as variáveis
let entM: string | null;
let entN: string | null;
let m: number;
let n: number;
let menor: number;
let maior: number;
let soma: number;
let linha: string;
let i: number;

// Entrada de dados
entM = prompt('Digite M: ');
entN = prompt('Digite N: ');

// Processamento dos dados
if (entM !== null && entN !== null) {
    m = parseInt(entM);
    n = parseInt(entN);

    while (m > 0 && n > 0 && entM !== null && entN !== null) {
        menor = m;
        maior = n;

        if (m > n) {
            menor = n;
            maior = m;
        }

        soma = 0;
        linha = '';

        for (i = menor; i <= maior; i++) {
            linha += `${i} `;
            soma += i;
        }

        // Saída de dados
        console.log(`${linha}Sum=${soma}`);
        entM = prompt('Digite M: ');
        entN = prompt('Digite N: ');

        if (entM !== null && entN !== null) {
            m = parseInt(entM);
            n = parseInt(entN);
        }
    }
}
