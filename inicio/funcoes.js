function soma(valor1, valor2) {
  return valor1 + valor2;
}

document.getElementById("funcoes").innerHTML = soma(10, 20);

function realParaDolar(real, dolar) {
  return real * dolar;
}

let reais = 7.89;
let cotacao = 5.08;

let valorDolar = realParaDolar(reais, cotacao);

console.log("Valor em R$ " + reais + " Valor em U$ é " + valorDolar.toFixed(2));

function paraCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let x = paraCelsius(77);

//alert("A temperatura é de " + x + " graus celsius");


//Arrow function

