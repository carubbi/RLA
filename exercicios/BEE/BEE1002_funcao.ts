// BEE1002 - Área do Círculo: solução com função
// Declarar as variáveis globais
let entRaio: string | null;
let raio: number;
let area: number;

/** Calcula a área do círculo a partir do raio. */
function calcularAreaCirculo(raio: number): number {
    // Declarar as variáveis locais
    let res: number;

    res = 3.14159 * raio * raio;
    return res;
}

// Entrada de dados
entRaio = prompt('Digite o raio: ');

// Processamento dos dados
if (entRaio !== null) {
    raio = parseFloat(entRaio);
    area = calcularAreaCirculo(raio);

    // Saída de dados
    console.log(`A=${area.toFixed(4)}`);
}
