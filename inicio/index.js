// tipos de saida

document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS<b>";

// utilizado para teste dentro do html
// <p>
// <script>
//   document.write("Texto escrito com docmunt.write");
// </script>
// </p>

// saida com alerta
// alert("10 + 5")

console.log("Texto no console");

/*
Diferença entre var, let e const
var pode ser usada em qualquer parte do codigo e o valor pode ser redeclarado
let não pode ser redeclarada o valor padrão é o que está dentro do escopo onde ela está
é o mais utilizado
const = o valor não pode ser alterado, usado para valores que não vão ser alterados
*/

var a, b, c; //variaveis que começam como indefinidas = undefined

a = 2;
b = 3;
c = a + b;
c = 40; //o ultimo valor declarado é o valido

var nome, sobrenome, nomeCompleto, idade;

nome = "Radaméz";
sobrenome = "Oliveira";
idade = 30;
nomeCompleto = nome + " " + sobrenome;
document.getElementById("texto").innerHTML = nomeCompleto;

let pessoa = "Dimitri";

{
  let pessoa = "Teste";
  document.getElementById("texto1").innerHTML = pessoa;
}
document.getElementById("texto").innerHTML = pessoa;

const cpf = 12345678901;
{
  const cpf = 10987654321;
  console.log(cpf);
}
