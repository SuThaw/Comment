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
	
};

