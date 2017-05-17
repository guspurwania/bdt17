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
		return parseFloat(this.input1) + parseFloat(this.input2);
	}

	get kurang() {
		return parseFloat(this.input1) - parseFloat(this.input2);
	}

	get bagi() {
		return parseFloat(this.input1) / parseFloat(this.input2);
	}

	get kali() {
		return parseFloat(this.input1) * parseFloat(this.input2);
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


var input = new Calculation(process.argv[2],process.argv[4]);
switch(process.argv[3]) {
	case "tambah":
		console.log(input.tambah);
		break;
	case "kurang":
		console.log(input.kurang);
		break;
	case "kali":
		console.log(input.kali);
		break;
	case "bagi":
		console.log(input.bagi);
		break;
	case "cek":
		console.log(input.samadengan);
		break;
}
