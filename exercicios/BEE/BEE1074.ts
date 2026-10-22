// Declarar as variáveis
let entTestes: string | null;
let entNum: string | null;
let testes: number;
let numero: number;
let i: number;
let paridade: string;
let sinal: string;

// Entrada de dados
entTestes = prompt('Digite a quantidade de testes: ');

// Processamento dos dados
if (entTestes !== null) {
    testes = parseInt(entTestes);

    for (i = 0; i < testes; i++) {
        entNum = prompt('Digite um numero: ');

        if (entNum !== null) {
            numero = parseInt(entNum);

            if (numero === 0) {
                // Saída de dados
                console.log('NULL');
            } else {
                paridade = numero % 2 === 0 ? 'EVEN' : 'ODD';
                sinal = numero > 0 ? 'POSITIVE' : 'NEGATIVE';
                console.log(`${paridade} ${sinal}`);
            }
        }
    }
}
