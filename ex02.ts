const nomeDigitado: string = " maria  da silva ";

function formatarNome(nome: string): string {
  const excecoes: string[] = ["da", "de", "do"];

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

const precoLido: string = "12.40";
const quantidadeLida: string = "3un";

const preco: number = Number(precoLido);
const quantidade: number = parseInt(quantidadeLida);

const clienteFidelidade: boolean = true;

const numeroCupom: number = 42;
const subtotal: number = preco * quantidade;
const desconto: number = clienteFidelidade ? subtotal * 0.05 : 0;
const total: number = subtotal - desconto;

const cupom: string = `CUPOM Nº ${String(numeroCupom).padStart(6, "0")}
Cliente: ${formatarNome(nomeDigitado)}
Item: ${quantidade} x R$ ${preco.toFixed(2)}
Subtotal: R$ ${subtotal.toFixed(2)}
Desconto fidelidade: R$ ${desconto.toFixed(2)}
TOTAL: R$ ${total.toFixed(2)}`;

console.log(cupom);
