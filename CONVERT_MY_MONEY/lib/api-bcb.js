const axios = require('axios')

const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getCotacaoAPI = (data) => axios.get(getUrl(data))
const extractCotacao = res => res.data.value[0].cotacaoVenda
const getToday = () => {
	const today = new Date()
	return `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`
}
const getCotacao = async() => {
	try{
		const today = getToday()
		console.log(today)
		const res = await getCotacaoAPI(today)
		const cotacao = extractCotacao(res)
		return cotacao
	} catch(err) {
		return cotacao = 'Cotação do dia não encontrada'
	}
}

module.exports = {
	getCotacaoAPI,
	getCotacao,
	extractCotacao
}
