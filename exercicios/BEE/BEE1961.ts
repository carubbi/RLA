// BEE1961 - Pula Sapo
// Declarar as variáveis
let i: number;
let entPulo: string | null;
let entCanos: string | null;
let pulo: number;
let canos: number;
let anterior: number;
let venceu: boolean;
let entAltura: string | null;
let altura: number;

// Entrada de dados
entPulo = prompt('Altura máxima do pulo:');entCanos = prompt('Quantidade de canos:');

// Processamento dos dados
if (entPulo !== null && entCanos !== null) {
    pulo = parseInt(entPulo);
    canos = parseInt(entCanos);
    anterior = 0;
    venceu = true;
    for (i = 0; i < canos; i++) {
        entAltura = prompt('Altura do cano:');
        if (entAltura !== null) {
            altura = parseInt(entAltura);
            if (i > 0 && (altura - anterior > pulo || anterior - altura > pulo)) {
                venceu = false;
            }

            anterior = altura;
        }
    }

    if (venceu) {
        // Saída de dados
        console.log('YOU WIN');
    } else {
        console.log('GAME OVER');
    }
}
