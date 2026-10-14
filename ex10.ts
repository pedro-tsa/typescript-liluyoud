type Placa = string;
type Periodo = [entrada: number, saida: number];

type Carro = {
  readonly placa: Placa;
  tipo: "carro";
  portas: 2 | 4;
};

type Moto = {
  readonly placa: Placa;
  tipo: "moto";
  cilindradas: number;
};

type Caminhao = {
  readonly placa: Placa;
  tipo: "caminhao";
  eixos: number;
};

// type Van = {
//   readonly placa: Placa;
//   tipo: "van";
//   lugares: number;
// };

type Veiculo = Carro | Moto | Caminhao; // | Van

// Ao incluir Van na união sem tratá-la no switch de calcularTarifa, aparece:
// Type 'Van' is not assignable to type 'never'.
// No default, 'v' só deveria sobrar como 'never' (nenhum tipo restante) se
// todos os casos tivessem sido tratados. Com Van sem 'case', ela sobra ali,
// e a atribuição a 'never' falha. Ou seja, o never garante em tempo de
// compilação que nenhum tipo novo de veículo seja esquecido no cálculo.

enum SituacaoTicket {
  Aberto = "ABERTO",
  Pago = "PAGO",
}

type Ticket = {
  veiculo: Veiculo;
  periodo: Periodo;
  selo: boolean;
  situacao: SituacaoTicket;
  valor?: number;
};

function calcularTarifa(v: Veiculo, horas: number): number {
  const adicionais = horas - 1;

  switch (v.tipo) {
    case "carro":
      return 8 + adicionais * 5;
    case "moto":
      return 4 + adicionais * 2;
    case "caminhao":
      return 15 + adicionais * 10;
    default: {
      const _naoTratado: never = v;
      return _naoTratado;
    }
  }
}

function calcularHoras(periodo: Periodo): number {
  const [entrada, saida] = periodo;
  return Math.max(saida - entrada, 1);
}

function fecharTicket(t: Ticket): Ticket {
  const horas = calcularHoras(t.periodo);
  const tarifa = calcularTarifa(t.veiculo, horas);
  const valor = t.selo ? tarifa * 0.5 : tarifa;

  return { ...t, valor, situacao: SituacaoTicket.Pago };
}

function registrar(msg: string): void {
  console.log(msg);
}

function falhar(mensagem: string): never {
  throw new Error(mensagem);
}

function lerVeiculo(json: string): Veiculo {
  let dados: unknown;

  try {
    dados = JSON.parse(json);
  } catch {
    falhar("JSON malformado");
  }

  if (typeof dados !== "object" || dados === null) {
    falhar("dados não são um objeto");
  }

  if (!("placa" in dados) || typeof dados.placa !== "string") {
    falhar('campo "placa" inválido');
  }

  if (!("tipo" in dados) || typeof dados.tipo !== "string") {
    falhar('campo "tipo" inválido');
  }

  switch (dados.tipo) {
    case "carro":
      if (!("portas" in dados) || (dados.portas !== 2 && dados.portas !== 4)) {
        falhar('campo "portas" inválido');
      }
      return { placa: dados.placa, tipo: "carro", portas: dados.portas };

    case "moto":
      if (!("cilindradas" in dados) || typeof dados.cilindradas !== "number") {
        falhar('campo "cilindradas" inválido');
      }
      return { placa: dados.placa, tipo: "moto", cilindradas: dados.cilindradas };

    case "caminhao":
      if (!("eixos" in dados) || typeof dados.eixos !== "number") {
        falhar('campo "eixos" inválido');
      }
      return { placa: dados.placa, tipo: "caminhao", eixos: dados.eixos };

    default:
      return falhar(`tipo "${dados.tipo}" desconhecido`);
  }
}

const entradas: [json: string, periodo: Periodo, selo: boolean][] = [
  ['{"placa":"ABC1D23","tipo":"carro","portas":4}', [8, 11], false],
  ['{"placa":"MOT0A12","tipo":"moto","cilindradas":160}', [9, 10], false],
  ['{"placa":"CAM9Z99","tipo":"caminhao","eixos":3}', [7, 12], false],
  ['{"placa":"XYZ4E56","tipo":"carro","portas":2}', [14, 16], true],
];

const tickets: Ticket[] = entradas.map(([json, periodo, selo]) => ({
  veiculo: lerVeiculo(json),
  periodo,
  selo,
  situacao: SituacaoTicket.Aberto,
}));

const fechados: Ticket[] = tickets
  .map(fecharTicket)
  .filter(t => t.situacao === SituacaoTicket.Pago);

fechados.forEach(t => {
  const horas = calcularHoras(t.periodo);
  const valor = (t.valor ?? 0).toFixed(2);
  const selo = t.selo ? " (selo -50%)" : "";
  registrar(`[${t.situacao}] ${t.veiculo.placa} (${t.veiculo.tipo}) - ${horas}h - R$ ${valor}${selo}`);
});

const faturamento: number = fechados.reduce((soma, t) => soma + (t.valor ?? 0), 0);

const contagem = tickets.reduce(
  (acc, t) => ({ ...acc, [t.veiculo.tipo]: acc[t.veiculo.tipo] + 1 }),
  { carro: 0, moto: 0, caminhao: 0 }
);

registrar(`Faturamento: R$ ${faturamento.toFixed(2)}`);
registrar(`Entradas: carro=${contagem.carro}, moto=${contagem.moto}, caminhao=${contagem.caminhao}`);

try {
  lerVeiculo('{"placa":"BIC0000","tipo":"bicicleta"}');
} catch (erro: unknown) {
  if (erro instanceof Error) {
    registrar(`Erro ao ler veículo: ${erro.message}`);
  }
}
