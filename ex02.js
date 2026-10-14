"use strict";
const nomeDigitado = " maria  da silva ";
function formatarNome(nome) {
    const excecoes = ["da", "de", "do"];
    return nome
        .trim()
        .split(" ")
        .filter(palavra => palavra !== "")
        .map(palavra => {
        const minuscula = palavra.toLowerCase();
        if (excecoes.includes(minuscula)) {
            return minuscula;
        }
        return minuscula.charAt(0).toUpperCase() + minuscula.slice(1);
    })
        .join(" ");
}
const precoLido = "12.40";
const quantidadeLida = "3un";
const preco = Number(precoLido);
const quantidade = parseInt(quantidadeLida);
const clienteFidelidade = true;
const numeroCupom = 42;
const subtotal = preco * quantidade;
const desconto = clienteFidelidade ? subtotal * 0.05 : 0;
const total = subtotal - desconto;
const cupom = `CUPOM Nº ${String(numeroCupom).padStart(6, "0")}
Cliente: ${formatarNome(nomeDigitado)}
Item: ${quantidade} x R$ ${preco.toFixed(2)}
Subtotal: R$ ${subtotal.toFixed(2)}
Desconto fidelidade: R$ ${desconto.toFixed(2)}
TOTAL: R$ ${total.toFixed(2)}`;
console.log(cupom);
