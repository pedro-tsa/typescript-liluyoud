export {};

const itens: { nome: string; preco: number; quantidade: number }[] = [
  { nome: "Arroz 5kg", preco: 28.9, quantidade: 1 },
  { nome: "Feijão 1kg", preco: 8.49, quantidade: 2 },
  { nome: "Leite 1L", preco: 4.99, quantidade: 6 },
  { nome: "Café 500g", preco: 17.9, quantidade: 1 },
  { nome: "Sabão em pó", preco: 12.5, quantidade: 1 },
];

const nomes: string[] = itens.map(item => item.nome);

const caros: { nome: string; preco: number; quantidade: number }[] = itens.filter(item => item.preco > 10);

const total: number = itens.reduce(
  (soma, item) => soma + item.preco * item.quantidade,
  0
);

const categorias: readonly string[] = ["Mercearia", "Laticínios", "Limpeza"];

// Erro: Property 'push' does not exist on type 'readonly string[]'.
// categorias.push("Hortifruti");

const despensa: number[][] = [[2, 0, 1], [4, 4], [1]];

const itensNaDespensa: number = despensa.reduce(
  (somaTotal, prateleira) =>
    somaTotal + prateleira.reduce((soma, qtd) => soma + qtd, 0),
  0
);

const [primeiro, segundo] = itens;

const novaLista = [...itens, { nome: "Açúcar 1kg", preco: 4.79, quantidade: 2 }];

console.log(`Itens: ${nomes.join(", ")}`);
console.log(`Acima de R$ 10: ${caros.map(item => item.nome).join(", ")}`);
console.log(`Total da compra: R$ ${total.toFixed(2)}`);
console.log(`Itens na despensa: ${itensNaDespensa}`);
