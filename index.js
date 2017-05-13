// Prototype
Animal = function(name) {
	return this.name = name;
}

Animal.prototype.eat = function(){
	return this.name + " lagi makan";
}

a = new Animal('Doggy');

console.log(a.eat());

// Array
var color = ['nasi', 'tulang'];
color.forEach(function(colors){
	console.log(colors);
})

// Function
function avg() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++)
	{
		sum += arguments[i];
	}

	return sum/arguments.length;
}

console.log(avg(2,3,4,5));

// Inheriting Methods
var o = {
	a: 2,
	m: function() {
		return this.a + 1;
	}
};

console.log(o.m());

var p = Object.create(o);
p.a = 4;
console.log(p.m());
