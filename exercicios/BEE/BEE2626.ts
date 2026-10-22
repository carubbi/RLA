// BEE2626 - Turma do JB6
// Declarar as variáveis
let dodo: string | null;
let leo: string | null;
let pepper: string | null;

function ganhou(jogada: string, adversaria: string): boolean {
    return (jogada === 'pedra' && adversaria === 'tesoura') ||
        (jogada === 'tesoura' && adversaria === 'papel') ||
        (jogada === 'papel' && adversaria === 'pedra');
}

// Entrada de dados
dodo = prompt('Jogada de Dodo:');

// Processamento dos dados
while (dodo !== null) {
    leo = prompt('Jogada de Leo:');
    pepper = prompt('Jogada de Pepper:');

    if (leo !== null && pepper !== null) {
        // Saída de dados
        if (ganhou(dodo, leo) && ganhou(dodo, pepper)) {
            console.log('Os atributos dos monstros vao ser inteligencia, sabedoria...');
        } else if (ganhou(leo, dodo) && ganhou(leo, pepper)) {
            console.log("Iron Maiden's gonna get you, no matter how far!");
        } else if (ganhou(pepper, dodo) && ganhou(pepper, leo)) {
            console.log('Urano perdeu algo muito precioso...');
        } else {
            console.log('Putz vei, o Leo ta demorando muito pra jogar...');
        }
    }

    dodo = prompt('Jogada de Dodo:');
}
