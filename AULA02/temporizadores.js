/*

app.get('/', (requesr, response) => {
	primeiro parâmetro é o endereço
	segundo, é uma função
})
*/
console.log(1)
setTimeout(() => {
	console.log('Olá esperando 2 segundos...')
}, 2000)
console.log(2)

let count = 0
let interval = setInterval(() => {
	console.log('ola')
	count++
	if (count >= 5)
		clearInterval(interval)
}, 1000)
console.log(3)
