setTimeout(() => {
	const devServer = document.createElement('script');
<<<<<<< HEAD
	devServer.setAttribute('src', `http://${window.location.host}/webpack-dev-server.js`);
=======
	devServer.setAttribute('src', 'http://${window.location.host}/webpack-dev-server.js');
>>>>>>> 290703de3078bd5be0a39347178e8671831c03c1
	document.body.appendChild(devServer);	
});