var cartaFiora = {
  nome: "Fiora",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/a/a7/Fiora_OriginalLoading.jpg",
  atributos: {
    ataque: 10,
    defesa: 4,
    habilidade: 2
  }
};

var cartaGaren = {
  nome: "Garen",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/8/87/Garen_OriginalLoading.jpg",
  atributos: {
    ataque: 7,
    defesa: 7,
    habilidade: 1
  }
};

var cartaJarvanIV = {
  nome: "Jarvan IV",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/b/b4/Jarvan_IV_OriginalLoading.jpg",
  atributos: {
    ataque: 6,
    defesa: 8,
    habilidade: 3
  }
};

var cartaLucian = {
  nome: "Lucian",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/6/6c/Lucian_OriginalLoading.jpg",
  atributos: {
    ataque: 8,
    defesa: 5,
    habilidade: 3
  }
};

var cartaLux = {
  nome: "Lux",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/4/46/Lux_OriginalLoading.jpg",
  atributos: {
    ataque: 2,
    defesa: 4,
    habilidade: 9
  }
};

var cartaQuinn = {
  nome: "Quinn",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/f/f5/Quinn_OriginalLoading.jpg",
  atributos: {
    ataque: 9,
    defesa: 4,
    habilidade: 2
  }
};

var cartaShyvana = {
  nome: "Shyvana",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/6/6a/Shyvana_OriginalLoading.jpg",
  atributos: {
    ataque: 8,
    defesa: 6,
    habilidade: 3
  }
};

var cartaDarius = {
  nome: "Darius",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/c/ca/Darius_OriginalLoading.jpg",
  atributos: {
    ataque: 9,
    defesa: 5,
    habilidade: 1
  }
};

var cartaDraven = {
  nome: "Draven",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/e/e5/Draven_OriginalLoading.jpg",
  atributos: {
    ataque: 9,
    defesa: 3,
    habilidade: 1
  }
};

var cartaKatarina = {
  nome: "Katarina",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/9/90/Katarina_OriginalLoading.jpg",
  atributos: {
    ataque: 4,
    defesa: 3,
    habilidade: 9
  }
};

var cartaLeBlanc = {
  nome: "LeBlanc",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/c/c4/LeBlanc_OriginalLoading.jpg",
  atributos: {
    ataque: 1,
    defesa: 4,
    habilidade: 10
  }
};

var cartaRiven = {
  nome: "Riven",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/3/30/Riven_OriginalLoading.jpg",
  atributos: {
    ataque: 8,
    defesa: 5,
    habilidade: 1
  }
};

var cartaSwain = {
  nome: "Swain",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/d/dc/Swain_OriginalLoading.jpg",
  atributos: {
    ataque: 2,
    defesa: 6,
    habilidade: 9
  }
};

var cartaVladimir = {
  nome: "Vladimir",
  imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/3/3a/Vladimir_OriginalLoading.jpg",
  atributos: {
    ataque: 2,
    defesa: 6,
    habilidade: 8
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [
  cartaFiora,
  cartaGaren,
  cartaJarvanIV,
  cartaLucian,
  cartaLux,
  cartaQuinn,
  cartaShyvana,
  cartaDarius,
  cartaDraven,
  cartaKatarina,
  cartaLeBlanc,
  cartaRiven,
  cartaSwain,
  cartaVladimir
];

var pontosJogador = 0;
var pontosMaquina = 0;
atualizaPlacar();
atualizaQuantidadeCartas();

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];
  cartas.splice(numeroCartaMaquina, 1);
  atualizaQuantidadeCartas();
  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  cartaJogador = cartas[numeroCartaJogador];
  cartas.splice(numeroCartaJogador, 1);
  atualizaPlacar();
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibeCartaJogador();
}

function atualizaPlacar() {
  var divPlacar = document.getElementById("placar");
  var html = "Jogador " + pontosJogador + " x " + pontosMaquina + " Oponente";
  divPlacar.innerHTML = html;
}

function atualizaQuantidadeCartas() {
  var divQuantidadeCartas = document.getElementById("quantidade-cartas");
  var html = cartas.length;
  divQuantidadeCartas.innerHTML = html;
}

function exibirOpcoes() {
  var divopcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaVladimir.atributos) {
opcoesTexto += `<input  type='radio' name='atributo' checked value='${atributo}'>${"  " + atributo + "  "}`
  }
  divopcoes.innerHTML = opcoesTexto;
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura =
    "";
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" +atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }

  var html = "<div class='carta-status'>";

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto;
  
  exibirOpcoes();
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura =
    "";
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" +atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>";
  }

  var html = "<div class='carta-status'>";

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado");
  var atributoSelecionado = obtemAtributoSelecionado();
  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    pontosJogador++;
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    pontosMaquina++;
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  exibeCartaMaquina();
  atualizaPlacar();
  atualizaQuantidadeCartas();

  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnProximaRodada").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function proximaRodada() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url($)`;
  divCartaJogador.innerHTML = "";

  var divCartaMaquina = document.getElementById("carta-maquina");

  divCartaMaquina.style.backgroundImage = `url($)`;
  divCartaMaquina.innerHTML = "";

  var divResultado = document.getElementById("resultado");
  htmlResultado = "<p class='resultado-final'><img width=100px height=100px src='https://contmoura.com.br/wp-content/uploads/2019/09/x-png-icon-8.png'></p>";
  divResultado.innerHTML = htmlResultado;
  
  var divopcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  divopcoes.innerHTML = opcoesTexto;
  if (cartas.length == 0) {
      if (pontosJogador > pontosMaquina) {
      htmlResultado = '<p class="resultado-final">Você venceu a Partida<p>';
      document.getElementById("btnProximaRodada").disabled = true;
      document.getElementById("btnSortear").disabled = true;
      document.getElementById("btnJogar").disabled = true;
      divResultado.innerHTML = htmlResultado;
    } else if (pontosJogador < pontosMaquina) {
      htmlResultado = '<p class="resultado-final">Você perdeu a Partida<p>';
      document.getElementById("btnProximaRodada").disabled = true;
      document.getElementById("btnSortear").disabled = true;
      document.getElementById("btnJogar").disabled = true;
      divResultado.innerHTML = htmlResultado;
    } else {
      htmlResultado =
        '<p class="resultado-final">A partida acabou em empate<p>';
      document.getElementById("btnProximaRodada").disabled = true;
      document.getElementById("btnSortear").disabled = true;
      document.getElementById("btnJogar").disabled = true;
      divResultado.innerHTML = htmlResultado;
    }
  } else {
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnProximaRodada").disabled = true;
  }
}