// BEE2582 - System of a Download
// Declarar as variáveis
let musicas: string[];
let entTestes: string | null;
let testes: number;
let i: number;
let entA: string | null;
let entB: string | null;
let indice: number;

// Entrada de dados
entTestes = prompt('Quantidade de músicas:');

// Processamento dos dados
musicas = ['PROXYCITY', 'P.Y.N.G.', 'DNSUEY!', 'SERVERS',
    'HOST!', 'CRIPTONIZE', 'OFFLINE DAY', 'SALT', 'ANSWER!', 'RAR?', 'WIFI ANTENNAS'];
if (entTestes !== null) {
    testes = parseInt(entTestes);
    for (i = 0; i < testes; i++) {
        entA = prompt('Primeiro botão:');
        entB = prompt('Segundo botão:');
        if (entA !== null && entB !== null) {
            indice = parseInt(entA) + parseInt(entB);

            // Saída de dados
            console.log(musicas[indice]);
        }
    }
}
