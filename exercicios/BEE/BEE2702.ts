// Declarar as variáveis
let entFrangoDisp: string;
let entBifeDisp: string;
let entMassaDisp: string;
let entFrangoPed: string;
let entBifePed: string;
let entMassaPed: string;
let faltaFrango: number;
let faltaBife: number;
let faltaMassa: number;

// Entrada de dados
entFrangoDisp = prompt('Refeições de frango disponíveis: ')!;
entBifeDisp = prompt('Refeições de bife disponíveis: ')!;
entMassaDisp = prompt('Refeições de massa disponíveis: ')!;
entFrangoPed = prompt('Pedidos de frango: ')!;
entBifePed = prompt('Pedidos de bife: ')!;
entMassaPed = prompt('Pedidos de massa: ')!;

// Processamento dos dados
faltaFrango = parseInt(entFrangoPed) - parseInt(entFrangoDisp);
faltaBife = parseInt(entBifePed) - parseInt(entBifeDisp);
faltaMassa = parseInt(entMassaPed) - parseInt(entMassaDisp);

if (faltaFrango < 0) {
    faltaFrango = 0;
}

if (faltaBife < 0) {
    faltaBife = 0;
}

if (faltaMassa < 0) {
    faltaMassa = 0;
}

// Saída de dados
console.log(faltaFrango + faltaBife + faltaMassa);
