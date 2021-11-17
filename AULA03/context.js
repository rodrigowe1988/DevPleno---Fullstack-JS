//context == this

const obj = {
	var1: 10,
	get: function(){
		return this.var1
	}
}
console.log(obj.get())
console.log(obj.get)
console.log(obj.get.bind({ var1: 20 })())
//evitar o uso de this para não poder ser manipulável como na linha acima
