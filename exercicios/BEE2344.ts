// Declarar as variáveis
let entNota: string;
let nota: number;
let conceito: string;

// Entrada de dados
entNota = prompt('Digite a nota: ')!;

// Processamento dos dados
nota = parseInt(entNota);

if (nota === 0) {
    conceito = 'E';
} else if (nota <= 35) {
    conceito = 'D';
} else if (nota <= 60) {
    conceito = 'C';
} else if (nota <= 85) {
    conceito = 'B';
} else {
    conceito = 'A';
}

// Saída de dados
console.log(conceito);
