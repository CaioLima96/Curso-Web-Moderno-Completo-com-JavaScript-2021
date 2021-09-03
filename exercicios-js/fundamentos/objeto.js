const prod1 = {}
prod1.nome = 'Celular ultra mega'
prod1.preço = 4998.90
prod1['Desconto Legal'] = 0.48 //evitar atributos com espaço
console.log(prod1)


const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: { 
        blabla: 1,
        obj: {
            blabla: 2
        }
    }    
}

console.log(prod2)