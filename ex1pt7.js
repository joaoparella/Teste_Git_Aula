const prompt = require('prompt-sync')();


function saudar(nome){
    console.log("Olá, "+nome)
    // console.log(`Olá, ${nome}`)
}

function somar(n1, n2){
    return n1 + n2
}

function ehPar(n){
    // if(n%2 == 0){
    //     return true
    // }else{
    //     return false
    // }
    return n%2 == 0
}

function quadrado(n){
    return n * n
}

function media(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3
}

function conversorCtoF(n){
    return (n * 9/5)+32
}

function fatorial(n){
    let resultado = 1;
    for(let i=1;i<=n;i++){
        resultado *= i;        
    }
    return resultado
}

function fatorialRecursivo(n){
    if (n==1){
        return 1
    }
    return n * fatorialRecursivo(n-1)
}

function fibonacci(n){
    // if(n=1){
    //     return [0]
    // }
    // if(n=2){
    //     return [0,1]
    // }
    let sequencia = [0,1]
    for(let i=2;i<=n;i++){
        sequencia.push(sequencia[i-1]+sequencia[i-2]);        
    }
    return sequencia
}




var n1 = Number(prompt("Digite aqui o numero 1: "));
// var n2 = Number(prompt("Digite aqui o numero 2: "));
var resultado1 = fibonacci(n1)
// var resultado2 = fatorialRecursivo(n1)
console.log(resultado1)
// console.log(resultado2)

