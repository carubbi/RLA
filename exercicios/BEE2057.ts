// Declarar as variáveis
let entSaida: string;
let entDuracao: string;
let entFuso: string;
let saida: number;
let duracao: number;
let fuso: number;
let chegada: number;

// Entrada de dados
entSaida = prompt('Digite a hora de saída: ')!;
entDuracao = prompt('Digite a duração da viagem: ')!;
entFuso = prompt('Digite a diferença de fuso: ')!;

// Processamento dos dados
saida = parseInt(entSaida);
duracao = parseInt(entDuracao);
fuso = parseInt(entFuso);
chegada = saida + duracao + fuso;

if (chegada >= 24) {
    chegada -= 24;
} else if (chegada < 0) {
    chegada += 24;
}

// Saída de dados
console.log(chegada);
