const prompt = require('prompt-sync')();
var numero1 = Number(prompt("Digite aqui o numero: "));


for (var i=1; i <= 10;i++){
    var resultado1 = i * numero1
    console.log(i + " X " + numero1 +" = " + resultado1)
}

for (var i=1; i <= 10;i++){
    console.log(`${i} X ${numero1} = ${numero1 * i}`)
}



