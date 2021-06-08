// função para gerar número inteiro randômico entre o valor min e max
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min }


// função para escolher o número de tentativas baseado na "dificuldade"
function dificuldade() {
  var btnFacil = document.querySelector("#botaoFacil")
  var btnNormal = document.querySelector("#botaoNormal")
  var btnDificil = document.querySelector("#botaoDificil")
  
  // return new Promise é como se escreve função assíncrona, resolve uma promessa ao invés de retornar um valor
  return new Promise(function(resolve, reject) {
  
    btnFacil.addEventListener("click", () => {
    tentativas = 10 
    resolve (tentativas) })
    
    btnNormal.addEventListener("click", () => {
    tentativas = 6 
    resolve (tentativas) })

    btnDificil.addEventListener("click", () => {
    tentativas = 3 
    resolve (tentativas) })
  }) 
}

var pontos = 0

// função para criar variáveis globais para cada elemento dinâmico do HTML
function assingElementosHtml() {
  textoEscolhaDificuldadeHtml = document.querySelector('#escolhaDificuldade')
  displayChuteHtml = document.querySelector('#chute')
  
  botaoFacilHtml = document.querySelector("#botaoFacil")
  botaoNormalHtml = document.querySelector("#botaoNormal")
  botaoDificilHtml = document.querySelector("#botaoDificil")

  botaoVerificarHtml = document.querySelector('#botaoVerificar')
  
  displayRespostaHtml = document.querySelector('#resposta')
  displayPontosHtml = document.querySelector('#displayPontos')
  displayTentativasHtml = document.querySelector('#displayTentativas')
  botaoNovoJogoHtml = document.querySelector('#botaoNovoJogo')
}

// função que limpa os contadores e volta a tela de escolha de dificuldade
async function novoJogo(){
  listaRespostas = [] // cria uma lista com as dicas para que o jogador acompanhe sua trajetória
  numeroSecreto = getRandomIntInclusive(0, 100) // gera o número secreto randômico 
  assingElementosHtml()
  displayPontosHtml.innerHTML = pontos + ' pontos'
  mostraPontos()
  
  displayTentativasHtml.innerHTML = 'Você terá: __ tentativas'
  displayChuteHtml.style.visibility = 'hidden'
  botaoVerificarHtml.style.visibility = 'hidden'
  botaoNovoJogoHtml.style.visibility = 'hidden'
  textoEscolhaDificuldadeHtml.style.visibility = 'visible'
  botaoFacilHtml.style.visibility = 'visible'
  botaoNormalHtml.style.visibility = 'visible'
  botaoDificilHtml.style.visibility = 'visible'
  displayRespostaHtml.innerHTML = null
  
  // 'await' quer dizer que o resto só sera executado quando a função "dificuldade" for resolvida
  await dificuldade() 
  
  textoEscolhaDificuldadeHtml.style.visibility = 'hidden'
  botaoFacilHtml.style.visibility = 'hidden'
  botaoNormalHtml.style.visibility = 'hidden'
  botaoDificilHtml.style.visibility = 'hidden' 
  displayChuteHtml.style.visibility = 'visible'
  botaoVerificarHtml.style.visibility = 'visible'
  displayTentativasHtml.innerHTML = 'Você tem: ' + tentativas + ' tentativas'
  displayChuteHtml.value = null
  botaoVerificarHtml.disabled = false
}

novoJogo()  


// função que mostra a pontuação de acordo com 'pontos' para concordar em número (ex. 1 ponto)
function mostraPontos() {
  if (pontos == 1) {
      displayPontosHtml.innerHTML = pontos + ' ponto'} 
  else if (pontos > 1) {
      displayPontosHtml.innerHTML = pontos + ' pontos' } }

// função que mostra as tentativas de acordo com os 'tentativas' para concordar em número (ex. 1 tentativa)
function mostraTentativas() {
  if (tentativas == 2) {
    displayTentativasHtml.innerHTML = 'Você tem: ' + (tentativas - 1) + ' tentativa' } 
  else {
    displayTentativasHtml.innerHTML = 'Você tem: ' + (tentativas - 1) + ' tentativas' } }

// função que mostra as tentativas de acordo com 'tentativas' para concordar em número (ex. 1 tentativa)
function mostraTentativasAcerto() {
  if (tentativas == 2) {
    displayTentativasHtml.innerHTML = 'Você ainda tinha: ' + (tentativas - 1) + ' tentativa' } 
  else {
    displayTentativasHtml.innerHTML = 'Você ainda tinha: ' + (tentativas - 1) + ' tentativas' } }


// função executada quando pressiona o 'Enter' ou clica em 'Verificar'
// Confere se o chute é igual, maior ou menor que o número secreto, atualiza os pontos, tentativas e exibe as dicas anteriores
function verificar() {
  mostraTentativas()
  var chute = document.querySelector('#chute').value
   
  if (chute == numeroSecreto) {
    pontos++
    mostraTentativasAcerto()
    tentativas = 0
    mostraPontos()
    displayRespostaHtml.innerHTML = 'Parabéns, você acertou!'
    botaoVerificarHtml.disabled = true
    botaoNovoJogoHtml.style.visibility = 'visible'
    return } 
  
    else if (chute > numeroSecreto) {
      var dicaMenor = 'O número secreto é menor que: ' + chute
      listaRespostas.push(dicaMenor)  // adiciona a dica na lista
      displayRespostaHtml.innerHTML = listaRespostas.join('<br>')  // separa as dicas da lista por parágrafo
      tentativas--
      displayChuteHtml.value = null }
  
    else if (chute < numeroSecreto) {
      var dicaMaior = 'O número secreto é maior que: ' + chute
      listaRespostas.push(dicaMaior)
      displayRespostaHtml.innerHTML = listaRespostas.join('<br>')
      tentativas--
      displayChuteHtml.value = null }
  
    if (tentativas <= 0) {
      displayRespostaHtml.innerHTML = 'Que pena, você errou. O número secreto era ' + numeroSecreto
      botaoVerificarHtml.disabled = true
      botaoNovoJogoHtml.style.visibility = 'visible' }
}