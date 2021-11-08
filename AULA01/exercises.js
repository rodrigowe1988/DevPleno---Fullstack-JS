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
	agg[val] = agg[val] + 1
	return agg
}
console.log(vetor2.reduce(howManyTimes, {}))

//Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)
