// Declarar as variáveis
let entSenha: string | null;
let senha: number;

// Entrada de dados
entSenha = prompt('Digite a senha: ');

// Processamento dos dados
if (entSenha !== null) {
    senha = parseInt(entSenha);

    while (senha !== 2002 && entSenha !== null) {
        // Saída de dados
        console.log('Senha Invalida');
        entSenha = prompt('Digite a senha: ');

        if (entSenha !== null) {
            senha = parseInt(entSenha);
        }
    }

    if (entSenha !== null) {
        console.log('Acesso Permitido');
    }
}
