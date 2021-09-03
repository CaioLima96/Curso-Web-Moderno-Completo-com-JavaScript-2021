//armazenando function dentro de variavel

const imprimirSoma = function (a, b = 0) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)

//armazenando arrow function em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 7))


//return implicito
const subtracao = (a, b) => console.log(a - b)

subtracao(3, 2)