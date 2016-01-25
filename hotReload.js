<<<<<<< HEAD
setTimeout(() => {
	const devServer = document.createElement('script');
<<<<<<< HEAD
	devServer.setAttribute('src', `http://${window.location.host}/webpack-dev-server.js`);
=======
	devServer.setAttribute('src', 'http://${window.location.host}/webpack-dev-server.js');
>>>>>>> 290703de3078bd5be0a39347178e8671831c03c1
=======



setTimeout(() => {
	const devServer = document.createElement('script');
	devServer.setAttribute('src', 'http://${window.location.host}/webpack-dev-server.js');
>>>>>>> 987fe56f6f8d529e87f9f764d96aac3c2f48f97b
	document.body.appendChild(devServer);	
});