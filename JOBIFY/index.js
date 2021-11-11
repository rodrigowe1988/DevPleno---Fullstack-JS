const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

console.log(1)
app.get('/', (request, response) => {
	//response.send('<h1>Olá Fullstack Lab</h1>')
	response.render('home', {
	})
})

app.get('/vaga', (request, response) => {
	response.render('vaga', {
	})
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
