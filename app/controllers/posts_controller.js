
action('add-new-post', function () {
	
	console.log("Hey I am in posts controller for GET");
	render('index', {title: 'Venkat'} );

});


action('submit-new-post', function () {
	
	console.log("Hey I am in posts controller for POST");
	console.log(body.title);

	var article = new Article(req.body); // create a Model object now, for saving
	console.log("This is from controller");
	
	article.getDisplayName();
	article.saveArticle();
});