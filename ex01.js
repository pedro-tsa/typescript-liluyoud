// Produtos com anotação de tipo explícita
const nomeProduto1 = "Pão francês";
const precoUnitario1 = 0.75;
let quantidade1 = 12;
const nomeProduto2 = "Bolo de cenoura";
const precoUnitario2 = 18.5;
const quantidade2 = 2;
// Tipo inferido: boolean
let aberta = true;
// Cálculo da venda
const subtotal1 = precoUnitario1 * quantidade1;
const subtotal2 = precoUnitario2 * quantidade2;
const total = subtotal1 + subtotal2;
// Separadores numéricos
const paesVendidos = 1250000;
// Código da categoria "Panificação" em hexadecimal
const categoria = 0x1a;
// Erro: Type 'string' is not assignable to type 'number'.
// quantidade1 = "doze";
console.log(`${nomeProduto1}: ${quantidade1} x R$ ${precoUnitario1.toFixed(2)} = R$ ${subtotal1.toFixed(2)}`);
console.log(`${nomeProduto2}: ${quantidade2} x R$ ${precoUnitario2.toFixed(2)} = R$ ${subtotal2.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Padaria aberta? ${aberta}`);
console.log(`Pães vendidos no ano: ${paesVendidos}`);
console.log(`Categoria: ${categoria}`);
export {};
