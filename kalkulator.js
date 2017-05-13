'use strict';

// Class
class Input {
  constructor(input1, input2) {
    this.input1 = input1;
    this.input2 = input2;
  }
}

class Calculation extends Input {
	constructor(new_input1, new_input2) {
		super(new_input1, new_input2)
	}

	get tambah() {
		return this.input1 + this.input2;
	}

	get kurang() {
		return this.input1 - this.input2;
	}

	get kali() {
		return this.input1 * this.input2;
	}

	get samadengan() {
		if(this.input1 > this.input2)
		{
			return this.input1 + ' lebih besar dari ' + this.input2;
		}
		else if(this.input1 < this.input2)
		{
			return this.input1 + ' lebih kecil dari ' + this.input2;
		}
		else
		{
			return this.input1 + ' sama dengan ' + this.input2;
		}
	}
}

var input = new Calculation(3,3);
console.log(input.tambah);
console.log(input.kurang);
console.log(input.kali);
console.log(input.samadengan);