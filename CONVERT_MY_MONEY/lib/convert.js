const convert = (cotacao, quantidade) => cotacao * quantidade

//fixar o número de dígitos de ponto flutuante para 2
const toMoney = valor => parseFloat(valor).toFixed(2)

module.exports = {
	convert,
	toMoney
}
