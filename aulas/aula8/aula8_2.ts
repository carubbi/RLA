// Aula 8 - Exemplo 2 (escopo de variaveis em funcoes)
/** Exibe uma saudação para o nome informado. */
function mostrarMensagem(nome: string): void {
    // Declaração de variáveis locais
    let saudacao: string;

    saudacao = "Ola, " + nome;
    console.log(saudacao);
}

// Declaração de variáveis globais
let aluno: string | null;

// Entrada
aluno = prompt("Digite o nome do aluno:"); // Ana

// Processamento e saida
if (aluno !== null) {
    mostrarMensagem(aluno);
    console.log(aluno);
}
