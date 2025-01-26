const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoselecionado () {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao () {
    cartoes[cartaoAtual].classList.add("selecionado");
}

// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista

btnAvancar.addEventListener("click", function (){
    console.log(cartaoAtual);
    console.log(cartoes.length - 1);
    
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoselecionado();
    cartaoAtual++;
    mostrarCartao();
});

// OBEJTIVO 2 - quando clicarmos na seta voltar, temos que msotrar o cartão anterior da lista.


btnVoltar.addEventListener("click", function (){
    console.log(cartaoAtual);
    
    if(cartaoAtual === 0) return;
    
    esconderCartaoselecionado();
    cartaoAtual--;
    mostrarCartao();
    
});




