const express = require('express')
const app = express()

app.set('view engine', 'ejs')

console.log(1)
app.get('/', (request, response) => {
	console.log(new Date)
	//response.send('<h1>Olá Fullstack Lab</h1>')
	response.render('home')
})
console.log(2)
app.listen(3000, err => {
	if(err){
		console.log('Não foi possivel iniciar o servidor do Jobify')
	}else{
		console.log('Servidor do Jobify rodando...')
	}
})
console.log(3)
