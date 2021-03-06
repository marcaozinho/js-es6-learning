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
// 			//reject({err: true});
// 			resolve(posts);
// 		}, 1000);
// 	});	
// }

// function onLoadUser(user) {
// 	console.log(user, 'user');
// 	return user;
// }

// function onError(err) {
// 	console.log(err);
// 	err.step++;

// 	if((err.step%2) === 0) {
// 		return err;
// 	} else {
// 		throw err;
// 	}
// }

// loadUser().then(onLoadUser, onError).then(onLoadUser, onError).then(onLoadUser, onError).then(loadPosts, onError).then(onLoadUser, onError);

//----------

// function loadUser() {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			const user = {name: 'vinicius', id: 73};
// 			resolve(user);
// 			// reject({err: true, msg: 'deu ruim', step:0});
// 		}, 1000);
// 	});	
// }

// function loadPosts(user) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			const posts = [{id: 1}, {id: 2}, {id: 3}];
// 			reject({err: true});
// 			// resolve(posts);
// 		}, 1000);
// 	});	
// }

// function onLoadUser(user) {
// 	console.log(user, 'user');
// 	return user;
// }

// function onError(err) {
// 	console.log(err);
// 	err.step++;

// 	if((err.step%2) === 0) {
// 		return err;
// 	} else {
// 		throw err;
// 	}
// }

// loadUser().then(onLoadUser, onError).then(loadPosts, onError);

//--------------------------

function loadUser() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			const user = {name: 'vinicius', id: 73};
			resolve(user);
			// reject({err: true, msg: 'deu ruim', step:0});
		}, 1000);
	});	
}

function loadPosts(user) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			const posts = [{id: 1}, {id: 2}, {id: 3}];
			// reject({err: true});
			resolve(posts);
		}, 1000);
	});	
}

function onLoadUser(user) {
	console.log(user, 'user');
	return user;
}

function onLoadPosts(posts) {
	console.log(posts, 'posts');
	return posts;
}


function onError(err) {
	console.log(err);
	err.step++;

	if((err.step%2) === 0) {
		return err;
	} else {
		throw err;
	}
}

loadUser().then(onLoadUser, onError).then(loadPosts, onError).then(onLoadPosts, onError);