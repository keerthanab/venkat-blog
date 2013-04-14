
module.exports = function (compound, Article) {

    Article.prototype.getDisplayName = function getDisplayName() {
    	console.log("this is from within model");
    	console.log(this);
    };

   Article.prototype.saveArticle = function saveArticle() {
    	console.log("this is from within model saveArticle");
		this.save( function(error){ //here 'this' keyword refers to Article object 
	   		 if(error){
				console.log("Sorry dude, error in saving :( ");	
	        	res.json(error);
	   		 }
	    	else{
	       		 console.log("Yay saved all :) ");
	        	//mongoose.disconnect();	      
	    	}
		});   
    }; 

    Article.prototype.retrieveArticle = function retrieveArticle() {
    	console.log("this is from within model retrieveArticle");

    }; 


};