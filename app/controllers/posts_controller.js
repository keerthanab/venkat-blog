
action('submit', function () {
	
	console.log("Hey I am in posts controller");

	render('index', {title: 'Venkat'} );

	var article = new Article();
	console.log("This is from controller");

	article.getDisplayName();
});


action('done', function () {
	
	console.log("Hey I am in posts controller for POST");

	console.log(body.title);

	var article = new Article();
	console.log("This is from controller");

	article.getDisplayName();
});