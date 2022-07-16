// Objetos são basicamente varáveis com muitos valores dentro.
// Ex: const carro = {marc: "ford", modelo "Ka", ano: 2015}

// Os valores dentro de um objeto são chamados propriedades
// Objetos também podem ter metodos. Metodo é uma função colocada dentro de uma propriedade.

// variável simples
let car = "Ford";
//objeto geralmente usado como const
const carro = {
    marca: "Ford", 
    modelo: "Ka", 
    ano: 2015, 
    placa: "ABC-1234",
    buzina: function () {
        alert("biiiiiiiiiii")
    },
    completo: function(){
        //this é usado para pegar um valor dentro do próprio metodo
        return `A marca é ${this.marca} e a placa é ${this.placa}`
        // return "A marca é " + this.marca + "e a placa é " + this.placa;
    }
};

console.log(carro.marca);

//chamando a função dentro do objeto

carro.buzina()

console.log(carro.completo())
