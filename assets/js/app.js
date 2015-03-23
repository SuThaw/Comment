$(document).ready(function(){
	$('.comment').submit(function(e){
		e.preventDefault();

		// $.ajax({
		// 	method:"POST",
		// 	url:"/comment",
		// 	dataType:'json',
		// 	data:{message:$('#message').val()}
		// }).done(function(msg){
			

		// 	$('div.comment-list').append('<a href="#" class="list-group-item">' + $('#message').val() + '</a>');
		// 	$('#message').val('');
		// });

		 io.socket.post('/comment',{message:$('#message').val()});
	});
});


io.socket.on('comment',function(obj){
	console.log(obj);
	$('div.comment-list').append('<a href="#" class="list-group-item">' + obj.data.message + '</a>');
	var n = noty({text: 'Got a new comment'});
});
