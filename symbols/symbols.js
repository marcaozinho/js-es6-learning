const A = Symbol('A');	
const B = Symbol('B');
const C = Symbol('A');
const LOG = Symbol('LOG');

// console.log(A);
// console.log(A == A);
// console.log(A == C);
// console.log(A == Symbol('A'));
// console.log(Symbol('A') == Symbol('A'));

const obj = {
	[A]: 'a',
	b: 'b',
	[LOG]() {
		console.log(this[A] + ' yo!');
	}
};	

obj[LOG]();
console.log(obj[A]);