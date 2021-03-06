// também functiona
// const obj = {
// 	metodo: function() {
// 		console.log('run');
// 	}
// };
// obj.metodo();

// const obj = {
// 	metodo(txt) {
// 		console.log(txt);
// 	}
// };
// obj.metodo('texto');


// const obj = {
// 	['METODO'](txt) {
// 		console.log(txt);
// 	}
// };
// obj['METODO']('correr');

const METODO = Symbol('METODO');

const obj = {
	[METODO](txt) {
		console.log(txt);
	}
};

obj[METODO]('correr');

console.log(obj);