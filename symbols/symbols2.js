const A = Symbol('A');	
const B = Symbol('B');
const C = Symbol('A');
const LOG = Symbol('LOG');

const obj = {
	[A]: 'a',
	b: 'b',
	[LOG]() {
		console.log(this[A] + ' yo!');
	},
	getA() {
		return this[A];
	}
};	

console.log(obj);
console.log(obj.getA());
obj[LOG]();