// Aula 7 - Exemplo 3 (do...while para pedir uma senha)
let senha: string | null;

do {
    senha = prompt("Digite a senha:"); // 1111, 9999, 1234

    if (senha !== "1234" && senha !== null) {
        console.log("Senha incorreta");
    }
} while (senha !== "1234" && senha !== null);

if (senha !== null) {
    console.log("Acesso liberado");
}
