//já vem no núcleo do node
const fs = require('fs')

fs.readFile('temporizadores.js', (err, data) => {
	fs.writeFile('temporizadores-copy.js', data, (err) => {
		console.log(data)
		console.log('Arquivo copiado com sucesso')
	})
})

fs.readFile('temporizadores.js', (err, data) => {
	if (err)
		console.log()
	console.log(data)
})

//promisse + async/ await
const readFile = path => new Promise ((resolve, reject) => {
	fs.readFile(path, (err, data) => {
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
})

const writeFile = (path, data) => new Promise((resolve, reject) => {
	fs.writeFile(path, data, (err) => {
		if(err){
			reject(err)
		}else{
			resolve()
		}
	})
})
readFile('temporizadores.js')
	.then(data => writeFile('copia-promise.js', data))
	.then( () => console.log('arquivo copiado de novo'))
	.catch(err => console.log(err))

// async/await
const copyFile = async() => {
	console.log('ola async/await')
	try{
		const data = await readFile('temporizadores.js')
		await writeFile('copy-async-await.js', data)
		console.log(String(data))
		console.log('arquivo lido')
	}catch(err){
		console.log('erro', err)
	}
}
copyFile().then( () => console.log('fim do async/wait'))
