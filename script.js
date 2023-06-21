// // PEGAR O NOME DO CLIENTE

// Obtém o valor do parâmetro de consulta "nomeCliente"
const params = new URLSearchParams(window.location.search);
const nomeCliente = params.get("nomeCliente");

// Atualiza o conteúdo do elemento "nomeDoCliente"
const nomeDoClienteElement = document.getElementById("nomeDoCliente");
nomeDoClienteElement.textContent = nomeCliente;

// //RETRATIL DOS BALÕES
function retratil() {
  var textDiv = document.querySelector(".text");
  var tabelaPedidos = document.querySelectorAll(".tabelaPedido");

  textDiv.style.display = "none";

  for (var i = 0; i < tabelaPedidos.length; i++) {
    tabelaPedidos[i].style.display = "flex";
  }

  ocultarTodasText();
}

//OCULTAR TEXTO INICIAL
function ocultarTodasText() {
  var divsText = document.querySelectorAll(".text");

  for (var i = 0; i < divsText.length; i++) {
    divsText[i].style.display = "none";
  }
}

//clicar no botão para somar valor

// Obtém todos os elementos com a classe "tabelaPedido"
const tabelasPedido = document.querySelectorAll(".tabelaPedido");

// Percorre cada elemento
tabelasPedido.forEach(function (tabela) {
  // Obtém os elementos dentro de cada tabela
  const somatorio = tabela.querySelector(".somatorio");
  const somar = somatorio.querySelector('img[alt="adicionar"]');
  const diminuir = somatorio.querySelector('img[alt="diminuir"]');
  const quantidade = somatorio.querySelector(".qtd");

  // Define o valor inicial de "p" para 0
  somar.setAttribute("value", "0");
  quantidade.textContent = "0";

  // Adiciona os manipuladores de eventos
  somar.addEventListener("click", function () {
    // Obtém o valor atual de "p" e converte para número
    let valorP = parseInt(somar.getAttribute("value"));

    // Incrementa o valor de "p" e atualiza o atributo e o conteúdo do parágrafo
    valorP++;
    somar.setAttribute("value", valorP);
    quantidade.textContent = valorP;
  });

  diminuir.addEventListener("click", function () {
    // Obtém o valor atual de "p" e converte para número
    let valorP = parseInt(somar.getAttribute("value"));

    // Decrementa o valor de "p" se for maior que zero, e atualiza o atributo e o conteúdo do parágrafo
    if (valorP > 0) {
      valorP--;
      somar.setAttribute("value", valorP);
      quantidade.textContent = valorP;
    }
  });
});

//budweiser

let qtd = 0;
let valores = 12;
function somarBud() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrBud() {
  if (qtd >= 1) {
    qtd--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;
    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

//heineken
let qtd2 = 0;
const valoresHei = 12;
function somarHei() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd2++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrHei() {
  if (qtd2 >= 1) {
    qtd2--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

//coca-cola 700ml
let qtd3 = 0;
const valoresCoca = 7;
function somarCoca700() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd3++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;
  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrCoca700() {
  if (qtd3 >= 1) {
    qtd3--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

//coca-cola lata
let qtd4 = 0;
const valoresCocaLata = 5;
function somarCocaLata() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd4++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrCocaLata() {
  if (qtd4 >= 1) {
    qtd4--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;
    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

//drinks
let qtd5 = 0;
const valoresDrinkCaipirinha = 15;
function somarCaipirinha() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd5++;
  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrCaipirinha() {
  if (qtd5 >= 1) {
    qtd5--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

//VODKA
let qtd6 = 0;
const valoresVodka = 8;
function somarVodka() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd6++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrVodka() {
  if (qtd6 >= 1) {
    qtd6--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

let qtd7 = 0;
const valoresWhisky = 10;
function somarWhisky() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd7++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrWhisky() {
  if (qtd7 >= 1) {
    qtd7--;
    let multiplicar = qtd7 * valoresWhisky;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

// WHISKY COM ENERGETICO
let qtd8 = 0;
const valoresWhiskyEner = 15;
function somarWhiskyEner() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd8++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrWhiskyEner() {
  if (qtd8 >= 1) {
    qtd8--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

const valoresEspetinho = 13;
let qtd9 = 0;
function somarEspetinho() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd9++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrEspetinho() {
  if (qtd9 >= 1) {
    qtd9--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

// HAMBURGUER
let qtd10 = 0;
const valoresHamburguer = 20;
function somarHamburguer() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd10++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrHamburguer() {
  if (qtd10 >= 1) {
    qtd10--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

// PORÇÕES
const valoresPorcaoMedia = 40;
let qtd11 = 0;
function somarPorcaoMedia() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd11++;
  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrPorcaoMedia() {
  if (qtd11 >= 1) {
    qtd11--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

// PORÇÃO G
let qtd12 = 0;
const valoresPorcaoG = 75.99;
function somarPorcaoG() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd12++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrPorcaoG() {
  if (qtd12 >= 1) {
    qtd12--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

// PRATOS
let qtd13 = 0;
const valoresTropeiro = 15.99;
function somarTropeiro() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd13++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrTropeiro() {
  if (qtd13 >= 1) {
    qtd13--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

// PARMEDIANA
let qtd14 = 0;
const valoresParmediana = 19.99;
function somarParmediana() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd14++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrParmediana() {
  if (qtd14 >= 1) {
    qtd14--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

// PRATO DA CASA
let qtd15 = 0;
const valoresCasa = 18.99;
function somarCasa() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd15++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrCasa() {
  if (qtd15 >= 1) {
    qtd15--;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}

// STROGONOFF
let qtd16 = 0;
const valoresStrogonoff = 22;
function somarStrogonoff() {
  document.querySelector(".total").style = "display:block";
  document.querySelector(".fecharComanda").style = "display:none";

  qtd16++;

  let soma =
    qtd * valores +
    qtd2 * valoresHei +
    qtd3 * valoresCoca +
    qtd4 * valoresCocaLata +
    qtd5 * valoresDrinkCaipirinha +
    qtd6 * valoresVodka +
    qtd7 * valoresWhisky +
    qtd8 * valoresWhiskyEner +
    qtd9 * valoresEspetinho +
    qtd10 * valoresHamburguer +
    qtd11 * valoresPorcaoMedia +
    qtd12 * valoresPorcaoG +
    qtd13 * valoresTropeiro +
    qtd14 * valoresParmediana +
    qtd15 * valoresCasa +
    qtd16 * valoresStrogonoff;

  document.querySelector(".resultado").innerHTML = soma.toFixed(2);
}
function subtrStrogonoff() {
  if (qtd16 >= 1) {
    qtd16--;
    let multiplicar = qtd16 * valoresStrogonoff;

    let soma =
      qtd * valores +
      qtd2 * valoresHei +
      qtd3 * valoresCoca +
      qtd4 * valoresCocaLata +
      qtd5 * valoresDrinkCaipirinha +
      qtd6 * valoresVodka +
      qtd7 * valoresWhisky +
      qtd8 * valoresWhiskyEner +
      qtd9 * valoresEspetinho +
      qtd10 * valoresHamburguer +
      qtd11 * valoresPorcaoMedia +
      qtd12 * valoresPorcaoG +
      qtd13 * valoresTropeiro +
      qtd14 * valoresParmediana +
      qtd15 * valoresCasa +
      qtd16 * valoresStrogonoff;

    document.querySelector(".resultado").innerHTML = soma.toFixed(2);
  }
}
 function solicitar(){
    document.querySelector(".pedidoRealizado").style = "display:flex";

    document.querySelector(".pedidos").style = "opacity:0.5";

    document.querySelector(".total").style = "display:none"


 }

 function cancel(){
  // window.location.reload();
  document.querySelector(".pedidoRealizado").style = "display:none";

  document.querySelector(".pedidos").style = "opacity:1";

  document.querySelector(".fecharComanda").style = "display:block"

  
 }
