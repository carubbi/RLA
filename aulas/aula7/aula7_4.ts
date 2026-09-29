// Aula 7 - Exemplo 4 (do...while em uma bilheteria)
let opcao: string | null;
let qtd: number;
let msg: string;

qtd = 0;

do {
    opcao = prompt("Bilheteria: 1 vender, 2 consultar, 0 sair");

    if (opcao === "1") {
        qtd++;
        msg = `Venda registrada. Total: ${qtd}`;
    } else if (opcao === "2") {
        msg = `Ingressos vendidos: ${qtd}`;
    } else if (opcao === "0") {
        msg = `Bilheteria encerrada. Total: ${qtd}`;
    } else if (opcao === null) {
        msg = "Operação cancelada";
    } else {
        msg = "Opção inválida";
    }

    console.log(msg);
} while (opcao !== "0" && opcao !== null);
