// BEE2632 - Magia e Espada
// Declarar as variáveis
let entTestes: string | null;
let testes: number;
let i: number;
let entLargura: string | null;
let entAltura: string | null;
let entX: string | null;
let entY: string | null;
let magia: string | null;
let entNivel: string | null;
let entCentroX: string | null;
let entCentroY: string | null;
let largura: number;
let altura: number;
let x: number;
let y: number;
let nivel: number;
let centroX: number;
let centroY: number;
let dano: number;
let raio: number;
let proximoX: number;
let proximoY: number;
let distanciaQuadrada: number;

// Entrada de dados
entTestes = prompt('Quantidade de ataques:');

// Processamento dos dados
if (entTestes !== null) {
    testes = parseInt(entTestes);
    for (i = 0; i < testes; i++) {
        entLargura = prompt('Largura do monstro:');
        entAltura = prompt('Altura do monstro:');
        entX = prompt('Posição X do monstro:');
        entY = prompt('Posição Y do monstro:');
        magia = prompt('Magia:');
        entNivel = prompt('Nível da magia:');
        entCentroX = prompt('Centro X da magia:');
        entCentroY = prompt('Centro Y da magia:');
        if (entLargura !== null && entAltura !== null && entX !== null &&
            entY !== null && magia !== null && entNivel !== null &&
            entCentroX !== null && entCentroY !== null) {
            largura = parseInt(entLargura);
            altura = parseInt(entAltura);
            x = parseInt(entX);
            y = parseInt(entY);
            nivel = parseInt(entNivel);
            centroX = parseInt(entCentroX);
            centroY = parseInt(entCentroY);
            dano = 0;
            raio = 0;
            if (magia === 'fire') {
                dano = 200;
                if (nivel === 1) {
                    raio = 20;
                } else if (nivel === 2) {
                    raio = 30;
                } else {
                    raio = 50;
                }
            } else if (magia === 'water') {
                dano = 300;
                if (nivel === 1) {
                    raio = 10;
                } else if (nivel === 2) {
                    raio = 25;
                } else {
                    raio = 40;
                }
            } else if (magia === 'earth') {
                dano = 400;
                if (nivel === 1) {
                    raio = 25;
                } else if (nivel === 2) {
                    raio = 55;
                } else {
                    raio = 70;
                }
            } else {
                dano = 100;
                if (nivel === 1) {
                    raio = 18;
                } else if (nivel === 2) {
                    raio = 38;
                } else {
                    raio = 60;
                }
            }

            proximoX = centroX;
            proximoY = centroY;
            if (proximoX < x) {
                proximoX = x;
            } else if (proximoX > x + largura) {
                proximoX = x + largura;
            }
            if (proximoY < y) {
                proximoY = y;
            } else if (proximoY > y + altura) {
                proximoY = y + altura;
            }

            distanciaQuadrada = (proximoX - centroX) ** 2 +                (proximoY - centroY) ** 2;
            if (distanciaQuadrada <= raio ** 2) {
                // Saída de dados
                console.log(dano);
            } else {
                console.log(0);
            }
        }
    }
}
