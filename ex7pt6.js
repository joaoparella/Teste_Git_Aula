const prompt = require('prompt-sync')();

var vetor = [];

for (let i= 0; i<2;i++){
    let palavra = prompt("Digite uma palavra")
    vetor.push(palavra)    
}

for (let i = 0; i<2;i++){
    let ehPalindromo=true;
    var palavra = vetor[i]
    for (let j = 0; j < palavra.length/2; j++){
        if(palavra[j] !== palavra[palavra.length - 1 - j]){
            ehPalindromo = false;
            break;
        }
    }

    if (ehPalindromo ){
        console.log(palavra)
    }
}

for (let i = 0; i<2;i++){
    
    var palavra = vetor[i].split('').reverse().join('')
    let ehPalindromo=vetor[i]==palavra;

    if (ehPalindromo ){
        console.log(palavra)
    }
}

