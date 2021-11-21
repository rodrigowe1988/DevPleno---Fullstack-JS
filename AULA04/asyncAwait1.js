function time(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(ms), ms)
	})
}

const fs = require('fs')

function readdir(path){
	return new Promise((resolve, reject) => {
		fs.readdir(path, function(err, lista){
			if(err)
				reject(err)
			else
				resolve(lista)
		})
	})
}
async function readdirAsync(){
	const lista = await readdir('../')
	console.log(`Conteúdo do diretório pai: \n${lista}`)
	const lista2 = await readdir('./')
	console.log(`Conteúdo do diretório atual: \n${lista2}`)
}
console.log(readdirAsync())
