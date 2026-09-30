// BEE2770 - Tamanho da Placa
// Declarar as variáveis
let entX: string | null;
let entY: string | null;
let entMedidas: string | null;
let x: number;
let y: number;
let medidas: number;
let i: number;
let entLargura: string | null;
let entAltura: string | null;
let largura: number;
let altura: number;

// Entrada de dados
entX = prompt('Largura da placa:');

// Processamento dos dados
while (entX !== null) {
    entY = prompt('Altura da placa:');
    entMedidas = prompt('Quantidade de pedidos:');
    if (entY !== null && entMedidas !== null) {
        x = parseInt(entX);
        y = parseInt(entY);
        medidas = parseInt(entMedidas);
        for (i = 0; i < medidas; i++) {
            entLargura = prompt('Largura do circuito:');
            entAltura = prompt('Altura do circuito:');
            if (entLargura !== null && entAltura !== null) {
                largura = parseInt(entLargura);
                altura = parseInt(entAltura);
                if ((largura <= x && altura <= y) || (largura <= y && altura <= x)) {
                    // Saída de dados
                    console.log('Sim');
                } else {
                    console.log('Nao');
                }
            }
        }
    }

    entX = prompt('Largura da placa:');
}
