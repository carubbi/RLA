// BEE2486 - C Mais ou Menos?
// Declarar as variáveis
let entAlimentos: string | null;
let alimentos: number;
let vitaminaC: number;
let i: number;
let entQtd: string | null;
let nome: string | null;
let quantidade: number;
let miligramas: number;

// Entrada de dados
entAlimentos = prompt('Quantidade de alimentos (0 para encerrar):');

// Processamento dos dados
while (entAlimentos !== null && parseInt(entAlimentos) !== 0) {
    alimentos = parseInt(entAlimentos);
    vitaminaC = 0;
    for (i = 0; i < alimentos; i++) {
        entQtd = prompt('Quantidade consumida:');
        nome = prompt('Nome do alimento:');
        if (entQtd !== null && nome !== null) {
            quantidade = parseInt(entQtd);
            miligramas = 0;
            if (nome === 'suco de laranja') {
                miligramas = 120;
            } else if (nome === 'morango fresco' || nome === 'mamao') {
                miligramas = 85;
            } else if (nome === 'goiaba vermelha') {
                miligramas = 70;
            } else if (nome === 'manga') {
                miligramas = 56;
            } else if (nome === 'laranja') {
                miligramas = 50;
            } else if (nome === 'brocolis') {
                miligramas = 34;
            }

            vitaminaC += quantidade * miligramas;
        }
    }

    if (vitaminaC < 110) {
        // Saída de dados
        console.log('Mais ' + (110 - vitaminaC) + ' mg');
    } else if (vitaminaC > 130) {
        console.log('Menos ' + (vitaminaC - 130) + ' mg');
    } else {
        console.log(vitaminaC + ' mg');
    }

    entAlimentos = prompt('Quantidade de alimentos (0 para encerrar):');
}
