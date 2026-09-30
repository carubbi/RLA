// BEE2168 - Crepúsculo em Portland
// Declarar as variáveis
let entTamanho: string | null;
let tamanho: number;
let cameras: number[][];
let linha: number;
let coluna: number;
let entrada: string | null;
let resultado: string;
let total: number;

// Entrada de dados
entTamanho = prompt('Quantidade de quadras por lado:');

// Processamento dos dados
if (entTamanho !== null) {
    tamanho = parseInt(entTamanho);
    cameras = [];
    for (linha = 0; linha <= tamanho; linha++) {
        cameras[linha] = [];
        for (coluna = 0; coluna <= tamanho; coluna++) {
            entrada = prompt('Câmera (0 ou 1):');
            if (entrada !== null) {
                cameras[linha][coluna] = parseInt(entrada);
            }
        }
    }

    for (linha = 0; linha < tamanho; linha++) {
        resultado = '';
        for (coluna = 0; coluna < tamanho; coluna++) {
            total = cameras[linha][coluna] + cameras[linha + 1][coluna] +                cameras[linha][coluna + 1] + cameras[linha + 1][coluna + 1];
            if (total >= 2) {
                resultado += 'S';
            } else {
                resultado += 'U';
            }
        }

        // Saída de dados
        console.log(resultado);
    }
}
