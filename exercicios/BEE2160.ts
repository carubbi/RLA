// Declarar as variáveis
let nome: string | null;

// Entrada de dados
nome = prompt('Digite o nome: ');

// Processamento dos dados
if (nome !== null) {
    if (nome.length <= 80) {
        // Saída de dados
        console.log('YES');
    } else {
        console.log('NO');
    }
}
