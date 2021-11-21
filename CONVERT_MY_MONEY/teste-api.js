const axios = require('axios')


const url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?%40moeda=%27EUR%27&%40dataInicial=%2701-31-2017%27&%40dataFinalCotacao=%2702-28-2017%27&%24format=json'

axios
	.get(url)
	.then( res => console.log(res.data.value[0].cotacaoVenda))
