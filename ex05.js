"use strict";
const leituras = [
    ["Porto Velho", 34],
    ["Curitiba", 12],
    ["Manaus", 31],
    ["Porto Alegre", 9],
    ["Natal", 29],
];
function extremos(temps) {
    return [Math.min(...temps), Math.max(...temps)];
}
const temperaturas = leituras.map(([, temp]) => temp);
const [minima, maxima] = extremos(temperaturas);
const mediaGeral = temperaturas.reduce((soma, t) => soma + t, 0) / temperaturas.length;
for (const [cidade, temp] of leituras) {
    console.log(`${cidade}: ${temp}°C`);
}
const contatoComEmail = ["Fernanda Rocha", "(69) 98888-1111", "fernanda@jornal.com"];
const contatoSemEmail = ["Ricardo Alves", "(41) 97777-2222"];
const historicoSemanal = ["Porto Velho", 33, 35, 34, 32, 36, 34, 33];
const [cidadeHistorico, ...tempsSemana] = historicoSemanal;
const mediaSemanal = tempsSemana.reduce((soma, t) => soma + t, 0) / tempsSemana.length;
const capitalOficial = ["RO", "Porto Velho"];
// Erro: Cannot assign to '1' because it is a read-only property.
// capitalOficial[1] = "Ariquemes";
console.log(`Mínima: ${minima}°C | Máxima: ${maxima}°C | Média: ${mediaGeral.toFixed(1)}°C`);
