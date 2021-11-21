function time(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(ms), ms)
	})
}
//como a new Promise vai retornar um resolve nesse caso, perceba que podemos usar o resultado de ms como parêmtro e salvá-lo dentro de uma variável
async function ola() {
	console.log('testando o async')
	const ms = await time(2000)
	console.log(`A execução levou ${ms} milissegundos.`)
}
console.log(ola())
