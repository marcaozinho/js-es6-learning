function loadUser(callback, onError) {
	setTimeout(function() {
		const user = {name: 'vinicius', id: 73};
		callback(user);
	}, 1000);
}

function loadPosts(user, callback, onError) {
	setTimeout(function() {
		const posts = [{id: 1}, {id: 2}, {id: 3}];
		callback(posts);
	}, 1000);
}

function now() {
	return (new Date()).getMilliseconds();
}

console.log(now(), 'start loading');

loadUser(function(user) {
	console.log(now(), user);
	loadPosts(undefined, function(posts) {
		console.log(now(), posts);
		console.log(now(), 'finish loading');
	});
});