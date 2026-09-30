// Declarar as variáveis
let entDist: string | null;
let distancia: number;

function calcularPontuacao(distancia: number): number {
    if (distancia <= 800) {
        return 1;
    } else if (distancia <= 1400) {
        return 2;
    } else {
        return 3;
    }
}

// Entrada de dados
entDist = prompt('Digite a distancia: ');

// Processamento dos dados
if (entDist !== null) {
    distancia = parseInt(entDist);

    // Saída de dados
    console.log(calcularPontuacao(distancia));
}
