function teste(acao) {
	acao()
}

teste = (() => console.log('opa'))

valores = [1, 2, 3, 4, 5]

const dobro = valores.map( value => value * 2)
console.log(dobro)

valores.forEach(value => console.log(value));

const soma = valores.reduce( (prev, curr) => prev + curr, 10)
console.log(soma)

const somaDobro = valores
	.map( valor => valor * 2)
	.reduce( (prev, curr) => prev + curr, 0 )
console.log(somaDobro)

const somaDobroComFiltro = valores
	.filter( valor => valor % 2 !== 0)
	.map( valor => valor * 2)
	.reduce( (prev, curr) => prev + curr, 0 )
console.log(somaDobroComFiltro)
