// Declarar as variáveis
let entTestes: string | null;
let entX: string | null;
let entY: string | null;
let testes: number;
let x: number;
let y: number;
let menor: number;
let maior: number;
let soma: number;
let caso: number;
let i: number;

// Entrada de dados
entTestes = prompt('Digite a quantidade de testes: ');

// Processamento dos dados
if (entTestes !== null) {
    testes = parseInt(entTestes);

    for (caso = 0; caso < testes; caso++) {
        entX = prompt('Digite X: ');
        entY = prompt('Digite Y: ');

        if (entX !== null && entY !== null) {
            x = parseInt(entX);
            y = parseInt(entY);
            menor = x;
            maior = y;

            if (x > y) {
                menor = y;
                maior = x;
            }

            soma = 0;

            for (i = menor + 1; i < maior; i++) {
                if (i % 2 !== 0) {
                    soma += i;
                }
            }

            // Saída de dados
            console.log(soma);
        }
    }
}
