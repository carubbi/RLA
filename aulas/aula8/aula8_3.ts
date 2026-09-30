// Aula 8 - Exemplo 3 (reutilizacao de codigo com funcao)
/** Calcula o dobro de um número. */
function calcularDobro(num: number): number {
    return num * 2;
}

// Declaração de variáveis globais
let entVal1: string | null;
let entVal2: string | null;
let entVal3: string | null;
let val1: number;
let val2: number;
let val3: number;

// Entrada
entVal1 = prompt("Digite o primeiro valor:"); // 5
entVal2 = prompt("Digite o segundo valor:"); // 8
entVal3 = prompt("Digite o terceiro valor:"); // 12

// Processamento
if (entVal1 !== null && entVal2 !== null && entVal3 !== null) {
    val1 = parseFloat(entVal1);
    val2 = parseFloat(entVal2);
    val3 = parseFloat(entVal3);
    val1 = calcularDobro(val1);
    val2 = calcularDobro(val2);
    val3 = calcularDobro(val3);

    // Saida
    console.log(val1);
    console.log(val2);
    console.log(val3);
}
