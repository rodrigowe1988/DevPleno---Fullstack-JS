const betterDeveloper = 'Rodrigo'
const betterChef = 'Rogério'

function whoIsBetterCallback(callback, errorCallBack) {

	return new Promise((resolve, reject) => {

		if (betterDeveloper != 'Rodrigo' || betterChef != 'Rogério') {
			reject({
				name: 'This is so wrong',
				message: betterDeveloper + betterChef + '? Really?'
			})
		} else {
			resolve({
				name: betterDeveloper,
				message: "Weber`s brothers are the best!"
			})
		}
	})

}

whoIsBetterCallback()
	.then((result) => {
		console.log(result.name + '? Yeah! '+ result.message)
	}).catch((error) => {
		console.log(error.name + ' ' + error.message)
	})
