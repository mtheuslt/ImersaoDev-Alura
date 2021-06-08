var dolarHoje = 5.62;
var erroNumber = 'O valor informado não é um número!';

var valor = document.getElementById('valor');
var classValorConvertido = document.getElementById('valorConvertido');
var classValorConvertido2 = document.getElementById("convertidoavisos2")

function conversor() {
    
    
    var capturando = valor.value;
    capturandoValorNum = parseFloat(capturando);
    
    if(!isNaN(capturandoValorNum)) {
        if(capturandoValorNum != 0) {
            let convertidoReal =  (dolarHoje * capturandoValorNum).toFixed(2).replace('.',',');
            classValorConvertido.innerHTML = `R$ ${convertidoReal}`;
            tirarColorError();
        } else {
            numinvald();
        }
    } else {
        error();
    }
}
function numinvald() {
    classValorConvertido.innerHTML = 'Número Inválido!';

    valor.style.borderColor = "red";
    valor.style.color = "red";

    classValorConvertido2.style.borderColor = "red";
    classValorConvertido2.style.color = "red";
}
function error() {
    
    classValorConvertido.innerHTML = erroNumber;

    valor.style.borderColor = "red";
    valor.style.color = "red";

    classValorConvertido2.style.borderColor = "red";
    classValorConvertido2.style.color = "red";
}
function tirarColorError() {
    classValorConvertido2.style.borderColor = "#000000";
    classValorConvertido2.style.color = "#000000";
    
    valor.style.borderColor = "#000000";
    valor.style.color = "#000000";
}