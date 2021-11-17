//Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
function func1(initial) {
	let contador = initial

	return function(){
		contador++
		return contador
	}
}
const funcA = func1(10)
const funcB = func1(20)
console.log(funcA())
console.log(funcA())
console.log(funcB(), funcA(), funcB())

function animal(name){
	let count = 0

	return {
		getCount: function(){
			return count
		},
		increment: function(){
			count++
		},
		getName: function(){
			return name
		}
	}
}
const gato = animal('gato')
console.log(gato)
console.log(gato.getCount(), gato.getName())
gato.increment()
console.log(gato.getCount(), gato.getName())
gato.increment()
console.log(gato.getCount(), gato.getName())
gato.increment()
console.log(gato.getCount(), gato.getName())
