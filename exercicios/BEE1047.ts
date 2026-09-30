// Declarar as variáveis
let entHoraIni: string;
let entMinIni: string;
let entHoraFim: string;
let entMinFim: string;
let horaInicial: number;
let minutoInicial: number;
let horaFinal: number;
let minutoFinal: number;
let duracao: number;
let horas: number;
let minutos: number;

// Entrada de dados
entHoraIni = prompt('Digite a hora inicial: ')!;
entMinIni = prompt('Digite o minuto inicial: ')!;
entHoraFim = prompt('Digite a hora final: ')!;
entMinFim = prompt('Digite o minuto final: ')!;

// Processamento dos dados
horaInicial = parseInt(entHoraIni);
minutoInicial = parseInt(entMinIni);
horaFinal = parseInt(entHoraFim);
minutoFinal = parseInt(entMinFim);
duracao = (horaFinal * 60 + minutoFinal) - (horaInicial * 60 + minutoInicial);

if (duracao <= 0) {
    duracao += 24 * 60;
}

minutos = duracao % 60;
horas = (duracao - minutos) / 60;

// Saída de dados
console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
