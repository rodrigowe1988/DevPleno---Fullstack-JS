const express = require('express')
const app = express()

const sqlite = require('sqlite')
const dbConnection = sqlite.open('banco.sqlite', { Promise })

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

const init = async() => {
	const db = await dbConnection
	await db.run('create table if not exists categorias (id INTEGER ')
}

console.log(2)
app.listen(3000, err => {
	if(err){
		console.log('Não foi possivel iniciar o servidor do Jobify')
	}else{
		console.log('Servidor do Jobify rodando...')
	}
})
console.log(3)
