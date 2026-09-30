// BEE2140 - Duas Notas
// Declarar as variáveis
let i: number;
let j: number;
let entCompra: string | null;
let entPago: string | null;
let troco: number;
let notas: number[];
let possivel: boolean;

// Entrada de dados
entCompra = prompt('Valor da compra (0 para encerrar):');

// Processamento dos dados
while (entCompra !== null && parseInt(entCompra) !== 0) {
    entPago = prompt('Valor pago:');
    if (entPago !== null) {
        troco = parseInt(entPago) - parseInt(entCompra);
        notas = [2, 5, 10, 20, 50, 100];
        possivel = false;
        for (i = 0; i < notas.length; i++) {
            for (j = i; j < notas.length; j++) {
                if (notas[i] + notas[j] === troco) {
                    possivel = true;
                }
            }
        }

        if (possivel) {
            // Saída de dados
            console.log('possible');
        } else {
            console.log('impossible');
        }
    }

    entCompra = prompt('Valor da compra (0 para encerrar):');
}
