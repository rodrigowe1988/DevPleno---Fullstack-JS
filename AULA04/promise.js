function tempo(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms)
	})
}

//ao executar dessa forma, o .then só irá executar quando a função acima estiver "pronta"
tempo(4000)
	.then(console.log(tempo()))
	.then(console.log('teste de Promise'))
