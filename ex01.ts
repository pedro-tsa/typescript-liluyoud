export {};

type Produto = {
    nomeProduto: string;
    precoUnitario: number;
    quantidade: number;
}

let aberta = true;
let paesVendidos : number  = 1_250_000;
let categoria : string = "0x1A";

//boolean como tipo inferido;

function subtotal(p: Produto) : number
{
    return p.precoUnitario * p.quantidade;
}

function totalFunc(p:Produto[]) : number
{
    let total: number = 0;
    for(const i of p)
    {
        total += subtotal(i);
    }
    return total;
}

type Carrinho = {
    itens: Produto[];
    total: number;
}

let paoFrances : Produto = {
    nomeProduto: "Pão Francẽs",
    precoUnitario: 0.75,
    quantidade: 12
}

let boloCenoura : Produto = {
    nomeProduto: "Bolo de Cenoura",
    precoUnitario: 18.50,
    quantidade: 2
}

let carrinho : Carrinho = {
    itens: [paoFrances, boloCenoura],
    total: 0
}

carrinho.total = totalFunc(carrinho.itens);

for (const i of carrinho.itens) {
  let _subtotal: number = subtotal(i);
  console.log(`${i.nomeProduto}: ${i.quantidade} x R$ ${i.precoUnitario.toFixed(2)} = R$ ${_subtotal.toFixed(2)}`);
}

console.log(`Total: R$ ${carrinho.total.toFixed(2)}`);
console.log(`Padaria Aberta? ${aberta}`);
console.log(`Pães vendidos no ano: ${paesVendidos}`);
console.log(`Categoria: ${parseInt(categoria, 16)}`);