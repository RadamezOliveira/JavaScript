let interruptor = "off";

// if(interruptor == "on"){
//     alert("A lampada está ligada")
// } else {
//     alert("A lampada está desligada")
// };

let hora = new Date().getHours();
//alert(hora);

// if(hora < 12){
//     alert("Bom dia")
// } else if(hora < 18){
//     alert("Boa tarde")
// } else {
//     alert("Boa noite")
// };

function verificar(){
    let nome = document.getElementById("nome").value;

    if(nome == "" || nome == null){
        document.getElementById("result").innerHTML = "O campo nome não pode ser vazio"
    } else {
        document.getElementById("result").innerHTML = "Ok"
    }
}