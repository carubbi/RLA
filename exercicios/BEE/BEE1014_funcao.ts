// BEE1014 - Consumo: solução com função
// Declarar as variáveis globais
let entDist: string | null;
let entComb: string | null;
let distancia: number;
let combustivel: number;
let consumo: number;

/** Calcula o consumo médio de combustível. */
function calcularConsumo(dist: number, litros: number): number {
    // Declarar as variáveis locais
    let res: number;

    res = dist / litros;
    return res;
}

// Entrada de dados
entDist = prompt('Digite a distancia total: ');
entComb = prompt('Digite o combustivel gasto: ');

// Processamento dos dados
if (entDist !== null && entComb !== null) {
    distancia = parseInt(entDist);
    combustivel = parseFloat(entComb);
    consumo = calcularConsumo(distancia, combustivel);

    // Saída de dados
    console.log(`${consumo.toFixed(3)} km/l`);
}
