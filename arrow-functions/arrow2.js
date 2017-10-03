
//this lexico
// a function de dentro cria um novo escopo e dentro dele 'this' é window


// const VOANDO = Symbol('VOANDO');
// function Inseto(nome) {
// 	this.nome = nome;
// 	console.log(this);
// 	this[VOANDO] = setInterval(function() {
// 		console.log(this);
// 		console.log(`${this.nome} esta voando`);
// 	}, 3000);
// }


// function Inseto(nome) {
// 	this.nome = nome;
// 	const self = this;
// 	this[VOANDO] = setInterval(function() {
// 		console.log(`${self.nome} esta voando`);
// 	}, 3000);
// }

// function Inseto(nome) {
// 	this.nome = nome;
// 	this[VOANDO] = setInterval(function() {
// 		console.log(`${this.nome} esta voando`);
// 	}.bind(this), 3000);
// }

// refatorando

const VOANDO = Symbol('VOANDO');

function Inseto(nome) {
	this.nome = nome;
	this[VOANDO] = setInterval(() => {
		console.log(`${this.nome} esta voando`);
	}, 3000);
}

Inseto.prototype.morrer = function() {
	clearInterval(this[VOANDO]);
	console.log(`${this.nome} morreu`);
};

const politico = new Inseto('Sásá');

setTimeout(function(){
	politico.morrer();
}, 10000);