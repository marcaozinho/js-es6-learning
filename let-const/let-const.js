
// let a = 'a';
// console.log(a);

// //chaves abrem escopo pra let
// if (true) { 
// 	let a = 'b';

// 	console.log(a);
// 	a = 'h';
// 	console.log(a);
// }

// console.log(a);

// -------------

// let a = 'a';

// console.log(a);

// //chaves abrem escopo pra let
// if (true) { 
// 	a = 'b';
// 	console.log(a);
// }

// console.log(a, b);

// -------------

// const arr = ['a', 'b', 'c', 'd'];

// for (let i = 0; i < arr.length; i++) {
// 	let current = arr[i];
// 	console.log(current);
// }

// console.log(i, current);

// -------------

const arr = ['a', 'b', 'c', 'd'];

for (var i = 0; i < arr.length; i++) {
	var current = arr[i];
	console.log(current);
}

console.log(i, current);