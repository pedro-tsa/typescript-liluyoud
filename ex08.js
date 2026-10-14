"use strict";
let codigo = 42;
function formatarCodigo(c) {
    if (typeof c === "number") {
        return `CLI-${String(c).padStart(4, "0")}`;
    }
    const texto = c.trim().toUpperCase();
    if (texto.startsWith("CLI-")) {
        return texto;
    }
    return `CLI-${texto.replace(/\D/g, "").padStart(4, "0")}`;
}
let tamanho = "M";
function calcularFrete(regiao) {
    switch (regiao) {
        case "norte":
            return 25;
        case "nordeste":
            return 20;
        case "centro-oeste":
            return 18;
        case "sudeste":
            return 12;
        case "sul":
            return 15;
    }
}
const rua = "Rua das Flores, 100";
const complemento = null;
function limparTelefone(tel) {
    if (typeof tel === "number") {
        return String(tel);
    }
    return tel.replace(/\D/g, "");
}
const r = "sul";
const freteR = calcularFrete(r);
let r2 = "sul";
const freteR2 = calcularFrete(r2);
// Com const, o valor nunca muda, então o TypeScript infere o tipo literal
// "sul", que é um dos valores aceitos por calcularFrete.
// Com let, a variável pode ser reatribuída depois (r2 = "qualquer coisa"),
// então o TypeScript "alarga" o tipo para string. Como string pode ser
// qualquer texto, não é garantido que seja uma região válida, e a chamada
// dá erro: Argument of type 'string' is not assignable to parameter of type
// 'Regiao'.
// O 'as const' pede para o TypeScript manter o tipo literal "sul" mesmo no
// let. Outra correção possível seria anotar: let r2: Regiao = "sul";
console.log(`Cliente: ${formatarCodigo(codigo)} | Camiseta: ${tamanho}`);
console.log(`Entrega: ${rua} - ${complemento ?? "(sem complemento)"}`);
console.log(`Frete para o sul: R$ ${calcularFrete("sul").toFixed(2)}`);
console.log(`Telefone: ${limparTelefone("(69) 99999-0000")}`);
