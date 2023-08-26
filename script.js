const tela = document.querySelector(".form-control");
const botoes = document.querySelectorAll(".btn");

let resultado = "";

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const valor = botao.textContent;

        if (valor === "=") {
            resultado = eval(resultado);
        } else if (valor === "C") {
            resultado = "";
        } else {
            resultado += valor;
        }

        tela.value = resultado;
    });
});
