// BEE2167 - Falha do Motor
// Declarar as variáveis
let i: number;
let entMedidas: string | null;
let medidas: number;
let anterior: number;
let primeiraFalha: number;
let entrada: string | null;
let atual: number;

// Entrada de dados
entMedidas = prompt('Quantidade de medidas:');

// Processamento dos dados
if (entMedidas !== null) {
    medidas = parseInt(entMedidas);
    anterior = 0;
    primeiraFalha = 0;
    for (i = 1; i <= medidas; i++) {
        entrada = prompt('Velocidade do motor:');
        if (entrada !== null) {
            atual = parseInt(entrada);
            if (i > 1 && atual < anterior && primeiraFalha === 0) {
                primeiraFalha = i;
            }

            anterior = atual;
        }
    }

    // Saída de dados
    console.log(primeiraFalha);
}
