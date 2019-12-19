$(".video-img").click(function() {
	$(this).hide();
	$("video")[0].play();
	$("video").attr({controls:"controls",});
});
var playHeight = $('.video-play').height();
$('.video-play').css({top: '-'+playHeight/2+'px'});
$('.list-1').click(function() {
	$('.bar').css({left: '31px', width: '128px',});
});
$('.list-2').click(function() {
	$('.bar').css({left: '327px', width: '94px',});
});
$('.list-3').click(function() {
	$('.bar').css({left: '590px', width: '128px',});
})