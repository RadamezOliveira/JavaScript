//classes
// Classes criam objetos
// usam o metodo constructor()

//em classe sempre começa em maiusculo
class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + "Biiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("VolksWagem", "Gol", 2015);

gol.ano = 2019;

document.getElementById("marca").innerHTML = gol.marca;
document.getElementById("modelo").innerHTML = gol.modelo;
document.getElementById("ano").innerHTML = gol.ano;
//alert(gol.buzina());

console.log(uno);
console.log(gol);