function funcaoA() {
	console.log('ola de A')
}

function funcaoB() {
	console.log('olac de B')
	funcaoA()
}

function funcaoC() {
	funcaoB()
	console.log('ola de C')
}
funcaoC()
