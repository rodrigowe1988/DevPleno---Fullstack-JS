//Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somar = (acumulado, item) => acumulado + item
const valoresSomados = vetor.reduce(somar, 0)

console.log(valoresSomados)

//Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.
const somentePares = item => item % 2 === 0
const valoresPares = vetor.filter(somentePares)
const somaPares = valoresPares.reduce(somar, 0)
console.log(valoresPares)
console.log(somaPares)

//Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.
const valoresImpares = vetor.filter(function(item) {
	return item % 2 !== 0;
})
const somaImpares = valoresImpares.reduce(somar, 0)
console.log(valoresImpares)
console.log(somaImpares)

//Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dica: utilize reduce)
/*
*valor truthy:
	* número diferente de 0
	* uma string não vazia
	* um objeto não vazio
	* 'alguma coisa' não vazia
*/
const vetor2 = [1, 2, 3, 4, 1, 1, 2, 4]
const howManyTimes = (agg, val) => {
	if(!agg[val]){
		agg[val] = 0
	}
	agg[val] += 1
	return agg
}
console.log(vetor2.reduce(howManyTimes, {}))

//Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(Object.keys()) e veja como ele poderá te ajudar neste exercício)
const vetor3 = [1, 2, 2, 3, 5, 6, 6]

const howManyTimes2 = (agg, val) => {
	if(!agg[val]){
		agg[val] = 0
	}
	agg[val] += 1
	return agg
}
console.log(Object.values(vetor3.reduce(howManyTimes2, {})))
console.log(Object.keys(vetor3.reduce(howManyTimes2, {})))

const contagem = vetor3.reduce(howManyTimes2, {})
const keys = Object.keys(contagem)
const unique = keys.filter( key => contagem[key]  === 1)
console.log(unique)

//Dado um vetor com números, retorne somente os números pares;
const vetor4 = [1, 2, 4, 5, 7, 8, 9, 11, 12]
const vetor4SomentePares = item => item % 2 === 0
console.log(vetor4.filter(vetor4SomentePares))

//Dado um vetor com números, retorne somente os números ímpares
const vetor5 = [1, 2, 4, 5, 7, 8, 9, 11, 12]
const vetor5SomenteImpares = item => item % 2 === 1
console.log(vetor5.filter(vetor5SomenteImpares))

/*
Uma função é chamada da seguinte forma:
calculadora(10, '+', 20)
crie o corpo da função de forma que ela realize as 4 operações aritméticas
*/
const newCalculadora = (n1, op, n2) => {
	if (op === '+')
		return n1 + n2
	else if (op === '-')
		return n1 - n2
	else if (op === '*')
		return n1 * n2
	else if (op === '/')
		return n1 / n2
}
console.log(newCalculadora(5, '+', 3))
console.log(newCalculadora(3, '-', 3))
console.log(newCalculadora(5, '*', 3))
console.log(newCalculadora(15, '/', 3))

/*
Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:

const soma = (num1, num2) => num1+num2
const calculadoraFn = (....) => ….
calculadoraFn(10, soma, 20)
*/
const soma = (a, b) => a + b
const subtracao = (a, b) => a - b
const mult = (a, b) => a * b
const divisao = (a, b) => a / b

const calculadoraComFuncao = (op, a, b) => {
	return op(a, b)
}

console.log(calculadoraComFuncao(soma, 1, 2))
console.log(calculadoraComFuncao(subtracao, 1, 2))
console.log(calculadoraComFuncao(mult, 1, 2))
console.log(calculadoraComFuncao(divisao, 1, 2))
