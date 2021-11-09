//já vem no núcleo do node
const fs = require('fs')

fs.readFile('temporizadores.js', (err, data) =>  {
	fs.writeFile('temporizadores-copy.js', data, (err) => {
		console.log('Arquivo copiado com sucesso')
	})
})
async/await
//promisse +
