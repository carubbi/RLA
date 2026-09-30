// BEE2540 - Impeachment do Líder
// Declarar as variáveis
let entVotos: string | null;
let votos: number;
let favoraveis: number;
let i: number;
let entVoto: string | null;

// Entrada de dados
entVotos = prompt('Quantidade de votos:');

// Processamento dos dados
while (entVotos !== null) {
    votos = parseInt(entVotos);
    favoraveis = 0;
    for (i = 0; i < votos; i++) {
        entVoto = prompt('Voto (0 ou 1):');
        if (entVoto !== null && parseInt(entVoto) === 1) {
            favoraveis++;
        }
    }

    if (favoraveis * 3 >= votos * 2) {
        // Saída de dados
        console.log('impeachment');
    } else {
        console.log('acusacao arquivada');
    }

    entVotos = prompt('Quantidade de votos:');
}
