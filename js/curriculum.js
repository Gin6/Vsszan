$('.lr-p').click(function() {
	var imgNode = $(this).next();
	if(imgNode.hasClass('lr-img')){
		imgNode.removeClass('lr-img');
		imgNode.attr('src','image/curriculum/down.png');
	}else{
		imgNode.addClass('lr-img');
		imgNode.attr('src','image/curriculum/up.png');
	}
});