//c-like

//working with variables
const valor = 10;
if (valor === 10) {
	console.log('valor é igual a 10!')
}

let valor2 = 20;
console.log(valor2)
valor2 = 30;
console.log(valor2)
const objeto = {
	chave1: 'valor1',
	chave2: 'valor2'
}
console.log(objeto);

const str = 'Rodrigo Weber';
console.log(str);

//functions are first class citizens
const soma = function(a, b) {
	return a + b;
}
console.log(soma(1, 2));

const calculadora = function (op, a, b) {
	return `A operação tem como resultado: ${op(a, b)}. Perceba que ele foi transformado em String.`;
}
console.log(calculadora(soma, 1, 2));

//arrays
const vetor = [1, 2, 3, 4, 5, 6]
console.log(vetor)

//map
const vetorDobrado = vetor.map(function(item) {
	return item * 2;
})
console.log(vetorDobrado)

const vetorOriginalEDobro = vetor.map(function(item){
	return { original: item, dobro: item * 2 }
})
console.log(vetorOriginalEDobro)

//filter
const pares = vetor.filter(function(item){
	return item % 2 === 0;
})
console.log(pares)

//we can join the functions
const paresDobrados = vetor.filter(function(item){
	return item % 2 === 0;
}).map(function(item){
	return item * 2;
})
console.log(paresDobrados)

//arrow functions
const dobrar = item => item * 2
const somentePares = item => item % 2 === 0
const paresDobrados2 = vetor.filter(somentePares).map(dobrar)

console.log(vetor.map(dobrar))
console.log(paresDobrados2)

//reduce
const somar = (acumulado, atual) => acumulado + atual
const somatorio = paresDobrados2.reduce(somar, 0)
console.log('Somar com reduce', somatorio)
