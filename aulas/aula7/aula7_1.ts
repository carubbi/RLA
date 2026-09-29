// Aula 7 - Exemplo 1 (while ate cancelar a entrada)
let nome: string | null;
let total: number;

total = 0;
nome = prompt("Digite um nome (Cancelar para encerrar):");

while (nome !== null) {
    total++;
    nome = prompt("Digite um nome (Cancelar para encerrar):");
}

console.log(`Nomes informados: ${total}`);
