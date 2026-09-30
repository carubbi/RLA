// Declarar as variáveis
let entInicio: string;
let entFim: string;
let inicio: number;
let fim: number;
let duracao: number;

// Entrada de dados
entInicio = prompt('Digite a hora inicial: ')!;
entFim = prompt('Digite a hora final: ')!;

// Processamento dos dados
inicio = parseInt(entInicio);
fim = parseInt(entFim);

if (inicio < fim) {
    duracao = fim - inicio;
} else {
    duracao = (24 - inicio) + fim;
}

// Saída de dados
console.log(`O JOGO DUROU ${duracao} HORA(S)`);
