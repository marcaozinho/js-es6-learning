// function loadUser() {
// 	return new Promise(function(resolve) {
// 		setTimeout(function() {
// 			const user = {name: 'vinicius', id: 73};
// 			resolve(user);
// 		}, 1000);
// 	});	
// }

// function loadPosts(user) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			const posts = [{id: 1}, {id: 2}, {id: 3}];
// 			resolve(posts);
// 		}, 1000);
// 	});	
// }

// function now() {
// 	return (new Date()).getMilliseconds();
// }

// console.log(now(), 'start loading');

// loadUser().then(function(user) {
// 	console.log(now(), user);
// 	return loadPosts(user);
// })
// .then(function(posts){
// 	console.log(now(), posts);
// 	return posts[0];
// }).then(function(posts) {
// 	console.log(posts);
// 	console.log(now(), 'finish');
// });


function loadUser() {
	return new Promise(function(resolve) {
		setTimeout(function() {
			const user = {name: 'vinicius', id: 73};
			resolve(user);
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

function now() {
	return (new Date()).getMilliseconds();
}

console.log(now(), 'start loading');

loadUser().then(function(user) {
	console.log(now(), user);
	return loadPosts(user);
})
.then(function(posts){
	console.log(now(), posts);
	return posts[0];
}, function(err){
	throw err;
}).then(function(posts) {
	console.log(posts);
	console.log(now(), 'finish');
}, function(err){
	console.log(err);
	console.log(now(), 'finish err');
});