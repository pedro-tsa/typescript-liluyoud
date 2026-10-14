let paciente = {
    cpf: "123.456.789-00",
    nome: "Ana Souza",
    idade: 34,
    plano: true,
    alergias: ["dipirona", "lactose"],
    contatoEmergencia: { nome: "João Souza", telefone: "(69) 99999-0000" },
};
let paciente2 = {
    cpf: "987.654.321-00",
    nome: "Carlos Lima",
    idade: 61,
    plano: false,
};
function resumo(p) {
    const textoAlergias = p.alergias
        ? `Alergias: ${p.alergias.join(", ")}`
        : "Sem alergias registradas";
    return `${p.nome}, ${p.idade} anos. ${textoAlergias}`;
}
console.log(resumo(paciente));
console.log(resumo(paciente2));
// Erro: Cannot assign to 'cpf' because it is a read-only property.
// paciente.cpf = "000.000.000-00";
// Erro: Property 'peso' does not exist on type '{ readonly cpf: string; ... }'.
// paciente.peso = 70;
let dados = paciente;
// Erro: Property 'nome' does not exist on type 'object'.
// console.log(dados.nome);
// O tipo 'object' só diz que o valor é "algo não primitivo", sem descrever
// nenhuma propriedade. Ao atribuir paciente a uma variável do tipo object, o
// TypeScript passa a enxergar só esse tipo genérico e esquece o formato
// original, então não sabe que 'nome' existe. A checagem usa o tipo declarado
// da variável, não o valor que está dentro dela.
let x = 10;
export {};
// let y: object = 10;
// '{}' significa "qualquer valor que não seja null nem undefined". Como o
// número 10 tem propriedades (por exemplo, toFixed), ele se encaixa nesse
// formato vazio, então é aceito.
// 'object' aceita apenas valores não primitivos (objetos, arrays, funções).
// Como 10 é um primitivo do tipo number, a atribuição dá erro.
