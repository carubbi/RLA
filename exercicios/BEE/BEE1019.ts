// Declarar as variáveis
let entTempo: string;
let tempo: number;
let horas: number;
let minutos: number;
let segundos: number;
let resto: number;

// Entrada de dados
entTempo = prompt('Digite o tempo em segundos: ')!;

// Processamento dos dados
tempo = parseInt(entTempo);

horas = parseInt(String(tempo / 3600));
resto = tempo % 3600;
minutos = parseInt(String(resto / 60));
segundos = resto % 60;

// Saída de dados
console.log(`${horas}:${minutos}:${segundos}`);
