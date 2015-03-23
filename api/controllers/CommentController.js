/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	detail:function(req,res){
		Comment.find({}).exec(function(err,comment){
			return res.view('comment',{comments: comment});
		});

	},
	create:function(req,res){
		

		Comment.create(req.body,function(err,comment){
			if(err) return err;

			Comment.watch(req);
			Comment.publishCreate({id:comment.id,message:comment.message});
			return res.send(200,comment);
		});
	}
	
};

