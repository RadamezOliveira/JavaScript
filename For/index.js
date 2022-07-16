// for(let i = 0; i < 1001; i++){
//     document.getElementById("teste").innerHTML += i + "<br>";
// }

const ano = new Date().getFullYear();

for(let i= ano; i >= 1900 ; i--){
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i +"</option>";
}

const carros = ['gol', 'fusca', 'brasilia', 'dell rey', 'chevette'];

for(let i = 0; i < carros.length; i++){
    document.getElementById("teste").innerHTML += carros[i] + "<br>";
}