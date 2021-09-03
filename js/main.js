/* alert("meu primeiro js.");

var nome = "Jonas D'Lima";
alert(" Bem vindo " + nome);

var nome = "Jonas D'Lima";
var idade = 33;
alert(nome + " tem " + idade + " anos.");

var nome = "Jonas D'Lima";
var idade = 33;
var idade2 = 10;
alert(idade + idade2);

var nome = "Jonas D'Lima";
var idade = "33";
var idade2 = "10";
alert(idade + idade2);

var nome = "Jonas D'Lima";
var idade = 33;
var idade2 = 10;
console.log(nome);
console.log(idade + idade2);

var nome = "Jonas D'Lima";
var idade = 33;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo.";
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));

var nome = "Jonas D'Lima";
var idade = 33;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo.";
console.log(nome);
console.log(idade + idade2);
//console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

var nome = "Jonas D'Lima";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo.";
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());

var lista = ["maçã", "pêra", "laranja"];
console.log(lista[1]);
alert(lista[1]);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));                   //tambem poderia colocar "|", espaço ou nada

var fruta = {nome:"maçã", cor:"vermelha"};
//console.log(fruta);
console.log(fruta. nome);
alert(fruta.cor);

var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas [1]);

var idade = prompt("qual sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};

var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1; ou
    alert(count);
    count++;
};

var count;
for(count=0; count <= 5; count ++){
    alert(count);
};

var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());

function soma(n1, n2){
    return n1 + n2;
};

function setreplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setreplace("Vai Japão", "Japão", "Brasil"));

function soma(n1, n2){
    return n1 + n2;
};

//var validar;  ------------------global
function validaidade(idade){
    var validar;                //local
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaidade(idade));     */   //consolo.log(validar) para global

function clicou(){
    document.getElementById("agradecimento").innerHTML ="Obrigado por clicar";  //pode inserir texto ou html
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallab.org/en/#.YTJ4mY5KiMo");
    window.location.href = "https://globallab.org/en/#.YTJ4mY5KiMo";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}