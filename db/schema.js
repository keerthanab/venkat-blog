/*
 db/schema.js contains database schema description for application models
 by default (when using jugglingdb as ORM) this file uses database connection
 described in config/database.json. But it's possible to use another database
 connections and multiple different schemas, docs available at

 http://railwayjs.com/orm.html

 Example of model definition:

 define('User', function () {
     property('email', String, { index: true });
     property('password', String);
     property('activated', Boolean, {default: false});
 });

 Example of schema configured without config/database.json (heroku redistogo addon):
 schema('redis', {url: process.env.REDISTOGO_URL}, function () {
     // model definitions here
 });

*/

module.exports = function (mongoose, compound) {
    // mongoose stuff

    var articleSchema = mongoose.Schema({ 
         title       : {type : String, default : '', trim : true}
        , body        : {type : String, default : '', trim : true}
        , created_at  : {type : Date, default : Date.now} 

    	});
    
    var Article = mongoose.model('Article', articleSchema);

    // expose model name for view helpers (resource-based helpers like formFor)
    Article.modelName = 'Article';

    // register model in compound.models registry
    compound.models.Article = Article;
};
