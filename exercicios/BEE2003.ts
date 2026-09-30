// BEE2003 - Domingo de Manhã
// Declarar as variáveis
let horario: string | null;
let partes: string[];
let minutosSaida: number;
let atraso: number;

// Entrada de dados
horario = prompt('Hora de saída (HH:MM):');

// Processamento dos dados
while (horario !== null) {
    partes = horario.split(':');
    minutosSaida = parseInt(partes[0]) * 60 + parseInt(partes[1]);
    atraso = minutosSaida + 60 - 8 * 60;
    if (atraso > 0) {
        // Saída de dados
        console.log('Atraso maximo: ' + atraso);
    } else {
        console.log('Atraso maximo: 0');
    }

    horario = prompt('Hora de saída (HH:MM):');
}
