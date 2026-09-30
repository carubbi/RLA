// BEE2542 - Iu-Di-Oh!
// Declarar as variáveis
let entAtributos: string | null;
let atributos: number;
let entMarcos: string | null;
let entLeonardo: string | null;
let cartasMarcos: number[][];
let cartasLeonardo: number[][];
let i: number;
let j: number;
let entrada: string | null;
let entCartaMarcos: string | null;
let entCartaLeonardo: string | null;
let entAtributo: string | null;
let atributo: number;
let marcos: number;
let leonardo: number;

// Entrada de dados
entAtributos = prompt('Quantidade de atributos:');

// Processamento dos dados
while (entAtributos !== null) {
    atributos = parseInt(entAtributos);
    entMarcos = prompt('Quantidade de cartas de Marcos:');
    entLeonardo = prompt('Quantidade de cartas de Leonardo:');
    if (entMarcos !== null && entLeonardo !== null) {
        cartasMarcos = [];
        cartasLeonardo = [];
        for (i = 0; i < parseInt(entMarcos); i++) {
            cartasMarcos[i] = [];
            for (j = 0; j < atributos; j++) {
                entrada = prompt('Atributo da carta de Marcos:');
                if (entrada !== null) {
                    cartasMarcos[i][j] = parseInt(entrada);
                }
            }
        }

        for (i = 0; i < parseInt(entLeonardo); i++) {
            cartasLeonardo[i] = [];
            for (j = 0; j < atributos; j++) {
                entrada = prompt('Atributo da carta de Leonardo:');
                if (entrada !== null) {
                    cartasLeonardo[i][j] = parseInt(entrada);
                }
            }
        }

        entCartaMarcos = prompt('Carta escolhida por Marcos:');
        entCartaLeonardo = prompt('Carta escolhida por Leonardo:');
        entAtributo = prompt('Atributo sorteado:');
        if (entCartaMarcos !== null && entCartaLeonardo !== null &&
            entAtributo !== null) {
            atributo = parseInt(entAtributo) - 1;
            marcos = cartasMarcos[parseInt(entCartaMarcos) - 1][atributo];
            leonardo = cartasLeonardo[parseInt(entCartaLeonardo) - 1][atributo];
            if (marcos > leonardo) {
                // Saída de dados
                console.log('Marcos');
            } else if (leonardo > marcos) {
                console.log('Leonardo');
            } else {
                console.log('Empate');
            }
        }
    }

    entAtributos = prompt('Quantidade de atributos:');
}
