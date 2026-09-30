// BEE1043 - Triângulo: solução com funções
// Declarar as variáveis globais
let entA: string | null;
let entB: string | null;
let entC: string | null;
let a: number;
let b: number;
let c: number;
let msg: string;
let res: number;

/** Verifica se três medidas formam um triângulo. */
function formaTriangulo(a: number, b: number, c: number): boolean {
    // Declarar as variáveis locais
    let cond: boolean;

    cond = a < b + c && b < a + c && c < a + b;
    return cond;
}

/** Calcula o perímetro do triângulo. */
function calcularPerimetro(a: number, b: number, c: number): number {
    // Declarar as variáveis locais
    let perimetro: number;

    perimetro = a + b + c;
    return perimetro;
}

/** Calcula a área do trapézio. */
function calcularAreaTrapezio(a: number, b: number, c: number): number {
    // Declarar as variáveis locais
    let area: number;

    area = (a + b) * c / 2;
    return area;
}

// Entrada de dados
entA = prompt('Digite A: ');
entB = prompt('Digite B: ');
entC = prompt('Digite C: ');

// Processamento dos dados
if (entA !== null && entB !== null && entC !== null) {
    a = parseFloat(entA);
    b = parseFloat(entB);
    c = parseFloat(entC);

    if (formaTriangulo(a, b, c)) {
        res = calcularPerimetro(a, b, c);
        msg = `Perimetro = ${res.toFixed(1)}`;
    } else {
        res = calcularAreaTrapezio(a, b, c);
        msg = `Area = ${res.toFixed(1)}`;
    }

    // Saída de dados
    console.log(msg);
}
