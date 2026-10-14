"use strict";
const porEmail = (destinatario, mensagem) => {
    console.log(`[E-MAIL] para ${destinatario}: ${mensagem}`);
};
const porSms = (destinatario, mensagem) => {
    if (mensagem.length > 160) {
        console.log("SMS ignorado: mensagem longa");
        return;
    }
    console.log(`[SMS] para ${destinatario}: ${mensagem}`);
};
const porApp = (destinatario, mensagem) => {
    console.log(`[APP] para ${destinatario}: ${mensagem}`);
};
function notificarTodos(destinatarios, mensagem, enviar) {
    destinatarios.forEach(destinatario => enviar(destinatario, mensagem));
}
const aviso = "Reunião de pais sexta às 19h";
const avisoLongo = "Prezados responsáveis, informamos que a reunião de pais foi remarcada para sexta-feira " +
    "às 19h no auditório principal. Pedimos que tragam a ficha de autorização assinada e " +
    "confirmem presença pelo app.";
notificarTodos(["ana@escola.com"], aviso, porEmail);
notificarTodos(["joao.resp"], aviso, porApp);
notificarTodos(["(69) 99999-0000"], avisoLongo, porSms);
// Erro: Type 'number' is not assignable to type 'void'.
// function teste(): void { return 10; }
const contar = (d, m) => m.length;
// Quando um TIPO de função declara retorno void, ele quer dizer "quem chama
// não vai usar o retorno", e não "a função é proibida de retornar algo".
// Por isso o TypeScript aceita uma função que devolve number nesse lugar:
// o valor existe, mas é simplesmente ignorado por quem chama.
// Isso permite, por exemplo, passar funções que retornam algo para métodos
// como forEach, cujo callback é tipado como void (o push retorna o novo
// tamanho do array, e mesmo assim lista.forEach(x => outra.push(x)) compila).
// Já em uma DECLARAÇÃO de função com ': void' escrito diretamente, como em
// teste(), retornar um valor é um erro, porque ali o void é uma promessa
// explícita da própria função.
