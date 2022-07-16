// eventos de tempo
//setTimeOut(function, tempo em milisegundos) executa a função, depois de esperar o tempo especificado
//setInterval(function, tempo em milisegundos) executa a função, a cada periodo de tempo especificado

function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou a contar";
    //ativa a função apenas uma vez quando der o tempo especificado
    tempo = setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o setTimeOut";
    }, 5000);
}
function pararContagem(){
    //parar contagem
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a contagem";
}

function comecarContagem(){
    tempo1 = setInterval(function(){
        var cronometro = document.getElementById("tempo1").innerHTML;
        var soma = parseInt(cronometro) - 1;
        if(soma === 0){
            stopContagem();
        };
        document.getElementById("tempo1").innerHTML = soma;
    }, 1000);
}

function stopContagem(){
    clearInterval(tempo1);
}
