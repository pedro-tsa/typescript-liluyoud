enum StatusPedido {
  Recebido = 1,
  EmPreparo,
  SaiuParaEntrega,
  Entregue,
  Cancelado,
}

enum FormaPagamento {
  Pix = "PIX",
  Cartao = "CARTAO",
  Dinheiro = "DINHEIRO",
}

function mensagem(status: StatusPedido): string {
  switch (status) {
    case StatusPedido.Recebido:
      return "Recebemos seu pedido!";
    case StatusPedido.EmPreparo:
      return "Seu pedido está sendo preparado 🍳";
    case StatusPedido.SaiuParaEntrega:
      return "O entregador está a caminho 🛵";
    case StatusPedido.Entregue:
      return "Pedido entregue. Bom apetite!";
    case StatusPedido.Cancelado:
      return "Seu pedido foi cancelado.";
  }
}

function avancar(status: StatusPedido): StatusPedido {
  switch (status) {
    case StatusPedido.Recebido:
      return StatusPedido.EmPreparo;
    case StatusPedido.EmPreparo:
      return StatusPedido.SaiuParaEntrega;
    case StatusPedido.SaiuParaEntrega:
      return StatusPedido.Entregue;
    default:
      return status;
  }
}

let statusAtual: StatusPedido = StatusPedido.Recebido;

while (true) {
  console.log(`[${statusAtual} - ${StatusPedido[statusAtual]}] ${mensagem(statusAtual)}`);

  if (statusAtual === StatusPedido.Entregue) {
    break;
  }

  statusAtual = avancar(statusAtual);
}

const pagamento: FormaPagamento = FormaPagamento.Pix;

// Erro: Type '"PIX"' is not assignable to type 'FormaPagamento'.
// const pagamentoErrado: FormaPagamento = "PIX";

// Enums de string são nominais: o TypeScript só aceita os membros do próprio
// enum (FormaPagamento.Pix), mesmo que o valor por baixo seja a mesma string
// "PIX". Isso obriga o código a passar pelo enum, garantindo que um valor
// solto não entre sem querer. Enums numéricos não têm essa proteção completa,
// e mapeamento reverso também não existe nos de string.

console.log(`Pagamento: ${pagamento}`);
