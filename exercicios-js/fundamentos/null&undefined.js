// const a = {name: 'Teste'}
// console.log(a)

// const b = a
// console.log(b)
// b.name = 'AAA'
// console.log(b)
// console.log(a)

let valor
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)