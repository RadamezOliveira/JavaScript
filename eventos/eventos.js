/*
Eventos são ações disparadas pela interação dos usuários na página
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

eventos de mouse 
===============================
onclick: Disparado quando recebe um click
ondlclick: Disparado quando clique duplo
onmouseover: Disparado quando o mouse está sobre
onmouseout: Disparado quando o mouse é movido para fora do elemento
onmousemove: Disparado quando o mouse é movido no elemento
onmousedown: Disparado quando o clique do botão foi pressioinado
onmouseup: Disparado quando o clique do botão é liberado
===============================
eventos de foco 
===============================
onfocus: Disparado quando o elemento recebe o foco. Válido para input,
onchange: Disparado quando existe uma mudança no conteudo. "Ao mudar"
onblur: Disparado quando o elemento perde o foco
===============================
eventos de teclado 
===============================
onkeydown: Disparado quando uma tecla é pressionada
onkeypress: Disparado quando uma tecla é pressionada e solta
onkeyup: Disparado quando quando uma tecla é solta sobre um elemento
===============================
Eventos da janela
===============================
onload: Disparado quando a página terminou de ser carregada. funciona no Body
onresize: Disparado quando há um redimensionamento da janela

*/

function eventoClick(){
    // alert("Acionou um evento de click")
    document.body.style.backgroundColor= "yellow"
}

function duploClique(){
    alert("Duplo clique")
}

function vermelho(){
    let div = document.getElementById("teste")
    div.style.backgroundColor="red"
}

function azul(){
    let div = document.getElementById("teste")
    div.style.backgroundColor="blue"
}

// function adicionaTexto(){
//     let p = document.getElementById("teste2")
//     p.append("O mouse está se movendo dentro do elemento!")
// }

function alertaMouseDown(){
    let div = document.getElementById("teste1")
    alert("O mouse está sendo pressionado dentro do elemento!")
}

function alertaMouseUp(){
    let div = document.getElementById("teste1")
    div.style.backgroundColor= "green"
}

function trocaTexto(){
    document.getElementById("campoTexto").value=""
}

function mudou(){
    console.log("O texto mudou")
}

function teclaPressionada(){
    let input = document.getElementById("campoTexto").value
    console.log(input)
}