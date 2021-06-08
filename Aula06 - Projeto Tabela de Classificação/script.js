function novoJogador() {
  var jogador = {
    nome: document.querySelector("#nomeNovoJogador").value,
    vitorias: 0,
    empates:  0,
    derrotas: 0,
    pontos: 0,
  };
  jogador.empate   = 0
  jogador.vitorias = 0
  jogador.derrotas = 0
  jogadores.push(jogador);
  exibirJogadoresNatela(jogadores);
  document.querySelector("#nomeNovoJogador").value = "";
}

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empate
  return pontos
  




}
var jogadores = []

exibirJogadoresNatela(jogadores)

function exibirJogadoresNatela(jogadores) {
  var html = ""
  for(var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome     + "</td>"
    html += "    <td>" + jogadores[i].vitorias + "</td>"
    html += "    <td>" + jogadores[i].empate   + "</td>"
    html += "    <td>" + jogadores[i].derrotas + "</td>"
    html += "    <td>" + jogadores[i].pontos   + "</td>"
    
    html += "    <td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "    <td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
    html += "    <td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
    html += "    <td><button onClick='zerarPontuacao  ("+ i +")'>Zerar Pontos</button></td></tr>"
   
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
      
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNatela(jogadores)
  
}
function adicionarEmpate (i){
  var jogador = jogadores[i]
  jogador.empate++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNatela(jogadores)
  
}
function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNatela(jogadores)
  
}
function zerarPontuacao  (i){
  var jogador = jogadores[i]
  jogador.empate   = 0
  jogador.vitorias = 0
  jogador.derrotas = 0
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNatela(jogadores)
}
  function Remover() {
  
  jogadores.pop();
  exibirJogadoresNatela(jogadores);
  
}