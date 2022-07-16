//Manipular datas

//comando basico para pegar data
const data = new Date();
//pegar o ano atual com 4 digitos
const ano = data.getFullYear();
//pegar o mes atual (começa em 0 janeiro, 1 fevereiro...)
const mes = data.getMonth();
const mesEscrito = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
//pegar dia do mes
const diaDoMes = data.getDate();
//pegar o dia atual da semana (de 0 a 6)
const dia = data.getDay();
const diaDaSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
//pegar a hora de 0 até as 23
const hora = data.getHours();
//pegar minutos de 0 até 59
const minutos = data.getMinutes();
//pegar segundos de 0 até 59
const segundos = data.getSeconds();
//pegar milisegundos de 0 a 999
const miliSegundos = data.getMilliseconds();
//pegar a data no padrão brasileiro dia/mes/ano e hora no padrão brasileiro
const dataBR = data.toLocaleString('pt-br', {dateStyle: "short"});
const horaBR = data.toLocaleString('pt-br', {timeStyle: "short"});

//concatenar data
const d = new Date();
const diaMes = d.getDate();
const dmes = d.getMonth() + 1;
const dano = d.getFullYear();

function addZero(x){ return x<10? '0' + x: x};

const dataPadraoBR = addZero(diaMes) + "/" + addZero(dmes) + "/" + dano;

//comparar datas

const hoje = new Date();
const venc = new Date(2022, 11, 15);

if(hoje > venc){
    console.log("vencida");
} else {
console.log("ainda não venceu");
}

//diferença entre duas datas
const dataInicio = new Date();
const dataFinal = new Date(2022, 11, 25);

const diferTempo = dataFinal.getTime() - dataInicio.getTime();
const diferDias = Math.ceil(diferTempo / (24 * 60 * 60 * 1000));

console.log(diferDias) + "dias";

console.log(data);
console.log(ano);
console.log(mesEscrito[mes]); // ou direto mesEscrito[data.getMonth()];
console.log(diaDaSemana[dia]);
console.log(diaDoMes);
console.log(hora);
console.log(minutos);
console.log(segundos);
console.log(miliSegundos);
console.log(dataBR);
console.log(horaBR);
console.log(dataPadraoBR);