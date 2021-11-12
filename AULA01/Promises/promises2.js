const betterDeveloper = 'Rodrigo'
const betterChef = 'Rogério'

function whoIsBetterCallback(callback, errorCallBack) {
	if (betterDeveloper != 'Rodrigo' || betterChef != 'Rogério') {
		errorCallback({
			name: 'This is so wrong',
			message: betterDeveloper + '? Really?'
		})
	} else {
			callback({
				name: betterDeveloper,
				message: "Weber`s brothers are the best!"
			})
	}
}

whoIsBetterCallback((result) => {
	console.log(result.name + '? Yeah! '+ result.message)
}, (error) => {
	console.log(error.name + ' ' + error.message)
})
