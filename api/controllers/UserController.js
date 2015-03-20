/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var bcrypt = require('bcrypt-nodejs');
module.exports = {
	signin:function(req,res){
		//console.log(req.body);
		User.findOne({email:req.body.email},function(err,user){
			if(err) return err;
			//console.log(user);
			bcrypt.compare(req.body.password,user.password,function(err,status){
				if(err) return err;
				if(status){
					req.session.user = user;

					return res.redirect('/feedback');
				}else{
					
					return res.redirect('/signin');					
				}
			});
			
		});
	},

	signout:function(req,res){
		req.session.destroy(function(err){
			if (err) return err;
			return res.redirect('/signin');
		});
	}

};

