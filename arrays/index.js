//const itens = new Array("item1", "item2", "item3");

//let x = lista[3];
//console.log(x);

//---------------------------------------------------------------------
//array
const pessoa1 = ["Radaméz", "Oliveira", 40];

//---------------------------------------------------------------------
//objeto
//const pessoa2 = {nome: "Radamez", sobrenome: "Oliveira", idade: 40};
//pessoa2.nome;

const lista = ["arroz", "feijão", "macarrão", "leite"];
const lista1 = ["pão", "manteiga", "café"];
const lista2 = ["arroz", "feijão", "macarrão", "leite"];
const lista3 = ["suco", "gelatina"];
const jogadores = ["Biro Biro", "Ribamar", "Cristiano Ronaldo", "Pelé", "Maradona", "Vampeta", "Dimitri"];
const numeros = [39, 3, 35, 9, 23, 10, 4, 68];
//alert(lista.length);
//alert(lista[lista.length -1]); //mostra o ultimo item do array

//Array.isArray(pessoa1) //devolde true ou false se for um array


document.getElementById("join").innerHTML = pessoa1.join(" * "); // o metodo join troca a virgula pelo que quiser

//remover o ultimo item do array
pessoa1.pop();
document.getElementById("pop").innerHTML = pessoa1;

//adicionar itens ao array
pessoa1.push("Brasileiro");
document.getElementById("push").innerHTML = pessoa1;

//remover o primeiro item do array
pessoa1.shift();
document.getElementById("shift").innerHTML = pessoa1;

//adicionar o primeiro item do array
pessoa1.unshift("Rada");
document.getElementById("unshift").innerHTML = pessoa1;

//adicionar varios itens em posição especifica
//atributos (posição que será adicionado, numeros de itens para remover, itens a adiconar)
pessoa1.splice(1, 0, "item adicionado1", "item adicionado2");
document.getElementById("splice").innerHTML = pessoa1;
lista.splice(2, 2, "item adicionado1", "item adicionado2", "item adicionado3");
document.getElementById("splice1").innerHTML = lista;

//juntar arrays
//sempre criar uma nova variaável para receber os arrays somados
listaTotal = lista1.concat(lista2, lista3);
document.getElementById("concat").innerHTML = listaTotal;

//mostrar itens do array a partir de uma posição especifica
document.getElementById("slice").innerHTML = jogadores;
//atributos (indice do inicio, indice do fim)
craques = jogadores.slice(2, 4);
document.getElementById("slice1").innerHTML = craques;

//ordenar array por ordem alfabetica
jogOrdenados = jogadores.sort();
document.getElementById("sort").innerHTML = jogOrdenados;

//ordem inversa
jogOrdenados.reverse();
document.getElementById("reverse").innerHTML = jogOrdenados;

//ordernar numeros
numeros.sort(function(a, b) { return (a - b)}); //função pronta que sempre ordena os numeros em ordem crescente
//numeros.sort(function(a, b) { return (b - a)}); //para ordem decrescente
document.getElementById("numeros").innerHTML = numeros;

//mostrar o maior numero do array
function MaiorNumero(array){
    return Math.max.apply(null, array)
};
document.getElementById("maior").innerHTML = MaiorNumero(numeros);

//mostrar o menor numero do array
function MenorNumero(array){
    return Math.min.apply(null, array)
};
document.getElementById("menor").innerHTML = MenorNumero(numeros);

//filtrar numeros do array

let maior20 = numeros.filter(filtragem);
function filtragem(value, index, array) {
    return value > 20
}

document.getElementById("filtro").innerHTML = maior20;