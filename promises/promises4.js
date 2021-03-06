// function loadUser() {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			const user = {name: 'vinicius', id: 73};
// 			// resolve(user);
// 			reject({err: true, msg: 'deu ruim', step:0});
// 		}, 1000);
// 	});	
// }

// function loadPosts(user) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			const posts = [{id: 1}, {id: 2}, {id: 3}];
// 			reject({err: true});
// 		}, 1000);
// 	});	
// }

// function onLoadUser(user) {
// 	console.log(user);
// }

// function onError(err) {
// 	console.log(err);
// 	if(err.step === 4) {
// 		console.log('finish');
// 	} else {
// 		err.step++;
// 		throw err;
// 	}
// }

// loadUser().then(onLoadUser, onError).then(onLoadUser, onError).then(onLoadUser, onError).then(onLoadUser, onError).then(onLoadUser, onError);
// // loadUser().then(function(user) {
// // 	console.log(user);
// // }, function(err) {
// // 	console.log(err);
// // });

function loadUser() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			const user = {name: 'vinicius', id: 73};
			// resolve(user);
			reject({err: true, msg: 'deu ruim', step:0});
		}, 1000);
	});	
}

function loadPosts(user) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			const posts = [{id: 1}, {id: 2}, {id: 3}];
			reject({err: true});
		}, 1000);
	});	
}

function onLoadUser(user) {
	console.log(user);
	return user;
}

function onError(err) {
	console.log(err);
	err.step++;

	if((err.step%2) === 0) {
		return {abc: 'abc'};
	} else {
		throw err;
	}
}

loadUser().then(onLoadUser, onError).then(onLoadUser, onError).then(onLoadUser, onError).then(onLoadUser, onError).then(onLoadUser, onError);