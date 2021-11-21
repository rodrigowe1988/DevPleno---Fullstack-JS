let name = 'Rodrigo Weber'

console.log(name.split(' '))

const teste = `
teste1
name: ${name}
teste2
teste3
`
console.log(teste)
setTimeout(() => console.log(name.split(' ')), 1000)
