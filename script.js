// //RETRATIL DOS BALÕES
function retratil() {
    var textDiv = document.querySelector('.text');
    var tabelaPedidos = document.querySelectorAll('.tabelaPedido');

    textDiv.style.display = 'none';

    for (var i = 0; i < tabelaPedidos.length; i++) {
        tabelaPedidos[i].style.display = 'flex';
    }

    ocultarTodasText()
}


//OCULTAR TEXTO INICIAL
function ocultarTodasText() {
    var divsText = document.querySelectorAll('.text');
    
    for (var i = 0; i < divsText.length; i++) {
      divsText[i].style.display = 'none';
    }
  }

//clicar no botão para somar valor

// Obtém todos os elementos com a classe "tabelaPedido"
const tabelasPedido = document.querySelectorAll('.tabelaPedido');

// Percorre cada elemento
tabelasPedido.forEach(function(tabela) {
  // Obtém os elementos dentro de cada tabela
  const somatorio = tabela.querySelector('.somatorio');
  const somar = somatorio.querySelector('img[alt="adicionar"]');
  const diminuir = somatorio.querySelector('img[alt="diminuir"]');
  const quantidade = somatorio.querySelector('.qtd');

  // Define o valor inicial de "p" para 0
  somar.setAttribute('value', '0');
  quantidade.textContent = '0';

  // Adiciona os manipuladores de eventos
  somar.addEventListener('click', function() {
    // Obtém o valor atual de "p" e converte para número
    let valorP = parseInt(somar.getAttribute('value'));

    // Incrementa o valor de "p" e atualiza o atributo e o conteúdo do parágrafo
    valorP++;
    somar.setAttribute('value', valorP);
    quantidade.textContent = valorP;

    
  });

  diminuir.addEventListener('click', function() {
    // Obtém o valor atual de "p" e converte para número
    let valorP = parseInt(somar.getAttribute('value'));

    // Decrementa o valor de "p" se for maior que zero, e atualiza o atributo e o conteúdo do parágrafo
    if (valorP > 0) {
      valorP--;
      somar.setAttribute('value', valorP);
      quantidade.textContent = valorP;
    }
  });
});


//budweiser

let qtd = 0;
let valores = 12;
function somarBud(){
  document.querySelector('.total').style = 'display:block'
  document.querySelector('.fecharComanda').style = 'display:none'

  

  qtd++;
  let multiplicar = qtd * valores;
  console.log(multiplicar);
  console.log(qtd);

  document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
 
}
function subtrBud(){
  if (qtd >= 1) {
    qtd--;
    let multiplicar = qtd * valores;
    console.log(multiplicar);
    console.log(qtd);
    document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
  }
}

//heineken
function somarHei(){
  document.querySelector('.total').style = 'display:block'
  document.querySelector('.fecharComanda').style = 'display:none'

  

  qtd++;
  let multiplicar = qtd * valores;
  console.log(multiplicar);
  console.log(qtd);

  document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
 
}
function subtrHei(){
  if (qtd >= 1) {
    qtd--;
    let multiplicar = qtd * valores;
    console.log(multiplicar);
    console.log(qtd);
    document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
  }
}

//coca-cola 700ml
valoresCoca =7
function somarCoca700(){
  document.querySelector('.total').style = 'display:block'
  document.querySelector('.fecharComanda').style = 'display:none'

  

  qtd++;
  let multiplicar = qtd * valoresCoca;
  console.log(multiplicar);
  console.log(qtd);

  document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
 
}
function subtrCoca700(){
  if (qtd >= 1) {
    qtd--;
    let multiplicar = qtd * valoresCoca;
    console.log(multiplicar);
    console.log(qtd);
    document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
  }
}

//coca-cola lata
valoresCocaLata =5
function somarCocaLata(){
  document.querySelector('.total').style = 'display:block'
  document.querySelector('.fecharComanda').style = 'display:none'

  

  qtd++;
  let multiplicar = qtd * valoresCocaLata;
  console.log(multiplicar);
  console.log(qtd);

  document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
 
}
function subtrCocaLata(){
  if (qtd >= 1) {
    qtd--;
    let multiplicar = qtd * valoresCocaLata;
    console.log(multiplicar);
    console.log(qtd);
    document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
  }
}


//drinks
valoresDrinkCaipirinha =15
function somarCaipirinha(){
  document.querySelector('.total').style = 'display:block'
  document.querySelector('.fecharComanda').style = 'display:none'

  

  qtd++;
  let multiplicar = qtd * valoresDrinkCaipirinha;
  console.log(multiplicar);
  console.log(qtd);

  document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
 
}
function subtrCaipirinha(){
  if (qtd >= 1) {
    qtd--;
    let multiplicar = qtd * valoresDrinkCaipirinha;
    console.log(multiplicar);
    console.log(qtd);
    document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
  }
}
//VODKA
valoresVodka = 8
function somarVodka(){
  document.querySelector('.total').style = 'display:block'
  document.querySelector('.fecharComanda').style = 'display:none'

  

  qtd++;
  let multiplicar = qtd * valoresVodka;
  console.log(multiplicar);
  console.log(qtd);

  document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
 
}
function subtrVodka(){
  if (qtd >= 1) {
    qtd--;
    let multiplicar = qtd * valoresVodka;
    console.log(multiplicar);
    console.log(qtd);
    document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
  }
}

valoresWhisky = 10
function somarWhisky(){
  document.querySelector('.total').style = 'display:block'
  document.querySelector('.fecharComanda').style = 'display:none'

  

  qtd++;
  let multiplicar = qtd * valoresWhisky;
  console.log(multiplicar);
  console.log(qtd);

  document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
 
}
function subtrWhisky(){
  if (qtd >= 1) {
    qtd--;
    let multiplicar = qtd * valoresWhisky;
    console.log(multiplicar);
    console.log(qtd);
    document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
  }
}


valoresWhiskyEner = 15
function somarWhiskyEner(){
  document.querySelector('.total').style = 'display:block'
  document.querySelector('.fecharComanda').style = 'display:none'

  

  qtd++;
  let multiplicar = qtd * valoresWhiskyEner;
  console.log(multiplicar);
  console.log(qtd);

  document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
 
}
function subtrWhiskyEner(){
  if (qtd >= 1) {
    qtd--;
    let multiplicar = qtd * valoresWhiskyEner;
    console.log(multiplicar);
    console.log(qtd);
    document.querySelector('.resultado').innerHTML = multiplicar.toFixed(2);
  }
}

