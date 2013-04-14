exports.routes = function (map) {

    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    // map.all(':controller/:action');
    //map.all(':controller/:action/:id');

    map.namespace('admin', function (admin) {
    	// admin.resources('users'); // this is if you choose to have another folder inside this admin folder
        admin.resources('posts', function (post) {
            map.get('/venkat', 'posts#profile')
        });

    	
	});

	//map.get('/venkat', 'admin/posts#profile'); 
	map.root('home#landing');
    map.get('/get-articles','articles#archieve');
    map.get('/post-articles','posts#add-new-post');
    map.post('/post-articles','posts#submit-new-post');
};
