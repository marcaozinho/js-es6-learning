// const arr = ['a', 'b', 'c', 'd'];

// for (var i = 0; i < arr.length; i++) {
// 	var current = arr[i];
// 	setTimeout(function() { 
// 		alert(current); 
// 	}, i * 1000);
// }

// --------------

// const abc = {
// 	a: 'a',
// 	b: 'b',
// 	c: 'c',
// };

// abc.a = 'c';
// abc.c = 'b';
// abc.b = 'a';

// abc.d = 'a';

// abc = {}; 

// console.log(abc);

const arr = ['a', 'b', 'c', 'd'];

for (let i = 0; i < arr.length; i++) {
	let current = arr[i];
	console.log(current);
	setTimeout(function() { 
		alert(current); 
	}, i * 4000);
}
