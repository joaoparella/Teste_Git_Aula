const prompt = require('prompt-sync')();
let senha = prompt("Digite uma senha")

var tamanho = senha.length >= 8;
var temNumeros = /\d/.test(senha)
var temMaiusculo = /[A-Z]/.test(senha)
var temMinusculo = /[a-z]/.test(senha)
var temCaracter = /[$*&@#]/.test(senha)

if(tamanho && temMaiusculo && temMinusculo && temNumeros){
    console.log("Senha criada com sucesso")
}else{
    console.log("Senha fraca")
}

if(!tamanho){
    console.log("Senha curta, digite pelo menos 8 caracteres")
}
if(!temNumeros){
    console.log("Senha precisa ter pelo menos 1 numero")
}