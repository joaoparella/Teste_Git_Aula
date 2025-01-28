const prompt = require('prompt-sync')();
var soma=0;
let numero;

do{
    numero = Number(prompt("Digite um numero"));
    soma = soma + numero;

}while(numero!=0);

console.log("Soma Total",soma)