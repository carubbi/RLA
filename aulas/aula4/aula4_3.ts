// Exemplo 3 - if...else if...else (autenticacao)
let usuario: string;
let senha: string;
let msg: string;

usuario = prompt("Digite o usuario:")!;
senha = prompt("Digite a senha:")!;

if (usuario !== "usuario123") {
    msg = "Usuario incorreto";
} else if (senha !== "123456") {
    msg = "Senha incorreta";
} else {
    msg = "Acesso permitido";
}

console.log(msg);
