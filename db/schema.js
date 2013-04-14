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



    var UserSchema = mongoose.Schema({
         displayName: {type : String, default : 'Venkat'}
        , emails: {type : String, default : 'venkg.com'}
    });
    var User = mongoose.model('User', UserSchema);
    // expose model name for view helpers (resource-based helpers like formFor)
    User.modelName = 'User';
    // register model in compound.models registry
    compound.models.User = User;

    ///////

    var CommentSchema = mongoose.Schema({
        comment       : {type : String, default : '', trim : true}
      , date          : {type : Date, default : Date.now}
      , commentor     : {type: mongoose.Schema.ObjectId, ref: 'User'}
    });

    var Comment = mongoose.model('Comment', CommentSchema);
    Comment.modelName = 'Comment';
    compound.models.Comment = Comment; 


    var TagSchema = mongoose.Schema({
        value       : {type : String, default : '', trim : true}
    });

    var Tag = mongoose.model('Tag', TagSchema);
    Tag.modelName = 'Tag';
    compound.models.Tag = Tag; 

    var CategorySchema = mongoose.Schema({
        value       : {type : String, default : '', trim : true}
    });

    var Category = mongoose.model('Category', CategorySchema);
    Category.modelName = 'Category';
    compound.models.Category = Category; 
 

    var articleSchema = mongoose.Schema({ 
         title        : {type : String, default : '', trim : true}
        , content     : {type : String, default : '', trim : true}
        , user        : {type: mongoose.Schema.ObjectId, ref: 'User'}
        , created_at  : {type : Date, default : Date.now} 
        , comments: [Comment]
        , tags: [Tag]
        , category: [Category]

    	});
    
    var Article = mongoose.model('Article', articleSchema);
    // expose model name for view helpers (resource-based helpers like formFor)
    Article.modelName = 'Article';
    // register model in compound.models registry
    compound.models.Article = Article;
};
