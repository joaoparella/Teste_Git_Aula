const prompt = require('prompt-sync')();
var raio = Number(prompt("Digite aqui o tamanho do raio do circulo: "));
var pi =  3.14159;

var area = pi * (raio * raio)
var area = pi * (raio ** 2)

var area = Math.pi * (raio * raio)
var area = Math.pi * (Math.pow(raio,2))


console.log("A área do círculo é: "+area)