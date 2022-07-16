// JSON.parse() converte o texto no padrão JSON em objeto
// JSON.stringify() converte objetos em texto padrão JSON

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6", "1.4", "1.0"]
}
//converteu para texto
let texto = JSON.stringify(carro);

document.getElementById("area").innerHTML = texto;
//converteu para objeto
let obj = JSON.parse(texto);
//pegamos um valor do objeto
console.log(obj.motor[2]);



function buscarCep(){
    let input = document.getElementById("cep").value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function(){
        document.getElementById("texto").innerHTML = this.responseText;
        //transforma texto em objeto
        let objeto = JSON.parse(this.responseText);
        //pega os valores
        let rua = objeto.logradouro;
        let cidade = objeto.localidade;
        let estado = objeto.uf;

        document.getElementById("texto").innerHTML = "Logradouro: " + rua + "<br> Cidade: " + cidade + "<br> Estado: " + estado;
    }
}
