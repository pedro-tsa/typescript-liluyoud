let aberta = true;
let paesVendidos = 1250000;
let categoria = "0x1A";
//boolean como tipo inferido;
function subtotal(p) {
    return p.precoUnitario * p.quantidade;
}
function totalFunc(p) {
    let total = 0;
    for (const i of p) {
        total += subtotal(i);
    }
    return total;
}
let paoFrances = {
    nomeProduto: "Pão Francẽs",
    precoUnitario: 0.75,
    quantidade: 12
};
let boloCenoura = {
    nomeProduto: "Bolo de Cenoura",
    precoUnitario: 18.50,
    quantidade: 2
};
let carrinho = {
    itens: [paoFrances, boloCenoura],
    total: 0
};
carrinho.total = totalFunc(carrinho.itens);
for (const i of carrinho.itens) {
    let _subtotal = subtotal(i);
    console.log(`${i.nomeProduto}: ${i.quantidade} x R$ ${i.precoUnitario.toFixed(2)} = R$ ${_subtotal.toFixed(2)}`);
}
console.log(`Total: R$ ${carrinho.total.toFixed(2)}`);
console.log(`Padaria Aberta? ${aberta}`);
console.log(`Pães vendidos no ano: ${paesVendidos}`);
console.log(`Categoria: ${parseInt(categoria, 16)}`);
export {};
