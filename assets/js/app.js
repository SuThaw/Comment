$(document).ready(function(){
	$('.comment').submit(function(e){
		e.preventDefault();
		$.ajax({
			method:"POST",
			url:"/comment",
			dataType:'json',
			data:{message:$('#message').val()}
		}).done(function(msg){
			

			$('div.comment-list').append('<a href="#" class="list-group-item">' + $('#message').val() + '</a>');
			$('#message').val('');
		});

	});
});

io.socket.get("/comment", function(event){console.log(event);});