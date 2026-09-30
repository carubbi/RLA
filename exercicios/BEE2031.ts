// BEE2031 - Pedra, Papel, Ataque Aéreo
// Declarar as variáveis
let entTestes: string | null;
let testes: number;
let i: number;
let primeiro: string | null;
let segundo: string | null;

// Entrada de dados
entTestes = prompt('Quantidade de partidas:');

// Processamento dos dados
if (entTestes !== null) {
    testes = parseInt(entTestes);
    for (i = 0; i < testes; i++) {
        primeiro = prompt('Jogada do primeiro jogador:');
        segundo = prompt('Jogada do segundo jogador:');
        if (primeiro !== null && segundo !== null) {
            if (primeiro === 'ataque' && segundo === 'ataque') {
                // Saída de dados
                console.log('Aniquilacao mutua');
            } else if (primeiro === 'papel' && segundo === 'papel') {
                console.log('Ambos venceram');
            } else if (primeiro === 'pedra' && segundo === 'pedra') {
                console.log('Sem ganhador');
            } else if (primeiro === 'ataque' ||
                (primeiro === 'pedra' && segundo === 'papel')) {
                console.log('Jogador 1 venceu');
            } else {
                console.log('Jogador 2 venceu');
            }
        }
    }
}
