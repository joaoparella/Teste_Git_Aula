const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite um numero"))

if(numero > 10){
    console.log("Maior que 10")
}else{
    console.log("Menor ou igual")
}