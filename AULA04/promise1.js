function time(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => console.log('teste de new Promise'), ms)
	})
}

console.log(time(2000))
