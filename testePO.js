const celular = {
    tamanho: 5,
    cor: "azul",
    sistema: "ios",
    qtdeCameras: 3,
    processador: "a12",
    qtdeMemoriaRam: 6,
    qtdeMemoriaInterna: 128
}

const celular2 = {
    tamanho: 5,
    cor: "verde",
    sistema: "ios",
    qtdeCameras: 3,
    processador: "a12",
    qtdeMemoriaRam: 6,
    qtdeMemoriaInterna: 128
}

var celulares = [celular,celular2]

console.log(celular.cor)
console.log(celular.processador)
celular.processador= "a13"
console.log(celular.processador)