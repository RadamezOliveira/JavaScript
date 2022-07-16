// function verificaCor(){
//     let cor = document.getElementById("cor").value;
//     cor = cor.toLowerCase();

//     switch (cor){
//         case "vermelho":
//             document.body.style.backgroundColor = "red";
//             break;
//         case "azul":
//             document.body.style.backgroundColor = "blue";
//             break;
//         case "amarelo":
//             document.body.style.backgroundColor = "yellow";
//             break;
//         default:
//             document.getElementById("result").innerHTML = "Nenhuma cor disponivel para " + cor;
//     }
// }

function diaDaSemana(){
    let dia = new Date().getDay();
    //console.log(dia);

    switch (dia) {
        case 0:
            document.getElementById("result").innerHTML = "Hoje é Domingo";
            break;
        case 1:
            document.getElementById("result").innerHTML = "Hoje é Segunda";
            break;
        case 2:
            document.getElementById("result").innerHTML = "Hoje é Terça";
            break;
        case 3:
            document.getElementById("result").innerHTML = "Hoje é Quarta";
            break;
        case 4:
            document.getElementById("result").innerHTML = "Hoje é Quinta";
            break;
        case 5:
            document.getElementById("result").innerHTML = "Hoje é Sexta";
            break;
        default:
            document.getElementById("result").innerHTML = "Hoje é Sábado";
    }
}