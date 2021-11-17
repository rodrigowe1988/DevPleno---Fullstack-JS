const falar = function(palavra) {
	console.log(palavra)
}
falar('Meu nome é Rodrigo')

const somar = function(num1, num2) {
	return num1 + num2
}
console.log(somar(2, 3))

const somarArrowFunction = (num1, num2) => num1 + num2
console.log(somarArrowFunction(4, 5))

//funções anônimas
const animal = (tipoDeAnimal, grunhido) => `O(a) ${tipoDeAnimal}, ${grunhido()}`
console.log(animal("cachorro", () => 'late'))
console.log(animal("gato", () => 'mia'))

console.log(animal("lobo", function() { return 'uiva' }))
