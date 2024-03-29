const express = require('express')
const app = express()
const path = require('path')
const convert = require('./lib/convert')
const apiBCB = require('./lib/api-bcb')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async(req, res) => {
	const cotacao = await apiBCB.getCotacao()
	res.render('home', {
		cotacao
	})
})

app.get('/cotacao', (req, res) => {
	//usando o console.log para visualizar a cotação e quantidade
	//console.log(req.query)
	const { cotacao, quantidade } = req.query
	if(cotacao && quantidade){
		const conversao = convert.convert(cotacao, quantidade)
		res.render('cotacao', {
			error: false,
			cotacao: convert.toMoney(cotacao),
			quantidade: convert.toMoney(quantidade),
			conversao: convert.toMoney(conversao)
		})
	} else {
		res.render('cotacao', {
			error: 'Valores inválidos'
		})
	}
})

app.listen(3000, err => {
	if(err)
		console.log('An err has ocurred...')
	else
		console.log('ConvertMyMoney is now running')
})
