const respostaOk = '{"cidade":"Porto Velho","temperatura":34,"umidade":0.62}';
const respostaQuebrada = '{"cidade":"Porto Velho","temperatura":"quente"}';
const respostaInvalida = '{ cidade: Porto Velho ';

function lerComAny(json: string): void {
  const dados: any = JSON.parse(json);
  console.log(dados.temperatura.toFixed(1));
}

// lerComAny(respostaQuebrada);
// Erro em execução: TypeError: dados.temperatura.toFixed is not a function
// O código compila sem nenhum aviso, porque 'any' desliga a checagem de tipos.
// O problema só aparece ao rodar, quando "quente" (uma string) não tem toFixed.

function falhar(mensagem: string): never {
  throw new Error(mensagem);
}

function lerClima(json: string): { cidade: string; temperatura: number } {
  let dados: unknown;

  try {
    dados = JSON.parse(json);
  } catch {
    falhar("JSON malformado");
  }

  if (typeof dados !== "object" || dados === null) {
    falhar("resposta não é um objeto");
  }

  if (!("cidade" in dados) || typeof dados.cidade !== "string") {
    falhar('campo "cidade" inválido');
  }

  if (!("temperatura" in dados) || typeof dados.temperatura !== "number") {
    falhar('campo "temperatura" inválido');
  }

  return { cidade: dados.cidade, temperatura: dados.temperatura };
}

const respostas: string[] = [respostaOk, respostaQuebrada, respostaInvalida];

for (const resposta of respostas) {
  try {
    const clima = lerClima(resposta);
    console.log(`${clima.cidade}: ${clima.temperatura.toFixed(1)}°C`);
  } catch (erro: unknown) {
    if (erro instanceof Error) {
      console.log(`Erro: ${erro.message}`);
    } else {
      console.log("Erro desconhecido");
    }
  }
}
