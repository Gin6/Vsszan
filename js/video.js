$(".video-img").click(function() {
	$(this).hide();
	$("video")[0].play();
	$("video").attr({controls:"controls",});
});

var playHeight = $('.video-play').height();
$('.video-play').css({top: '-'+playHeight/2+'px'});

var ww = $(window).width();
var wh = $(window).height();
var videoHeight = $('.video-box').outerHeight(true);
$('.content').css({height: wh-videoHeight,});
var navlistWidth = $('.list-1').children('p').width();
var navWidth = $('.nav').width();
var barWidth = $('.bar').width();
var navWidthAll = $('.nav').outerWidth();
var padding = (navWidthAll-navWidth)/2;
$('.nav').css({width: ww-padding*2,});
var navNewWidth = $('.nav').width();
var navNewWidthAll = $('.nav').outerWidth();
// console.log(navWidthAll);
$('.nav-list').click(function() {
	$('.bar').css({transition: 'left 0.5s ease',});
	$(this).siblings().children('p').css({color: 'rgba(0,0,0,1)', transition: '0.5s ease',});
	$(this).children('p').css({color: 'rgba(36,101,255,1)',});
});
$('.list-1').click(function() {
	$('.bar').css({left: padding,});
});
$('.list-2').click(function() {
	$('.bar').css({left: navNewWidthAll/2-barWidth/2,});
});
$('.list-3').click(function() {
	$('.bar').css({left: navNewWidth-navlistWidth+padding});
})

//手风琴折叠板
jQuery(document).ready(function($)
{
	$('.list ul li p').clickdown();
	$('.list-se .title-3').clickup();
	$('.list>ul>li').ad();
	// console.log($().index())
});
$.fn.clickup=function()
{
	$(this).click(function(){
		$(this).parent().slideUp().siblings().slideDown('fast');
		$(this).siblings('li').css('right', '-100%');
	});
}
$.fn.clickdown=function()
{
	$(this).click(function()
	{
		$(this).siblings('.list-se').slideToggle('fast').siblings().slideToggle('fast');
		$(this).parent().siblings().children('.list-se').slideUp('fast').siblings().slideDown('fast');
		var li = $(this).siblings('.list-se').children('li');
		for(var i=0;i<li.length;i++){
			li.eq(i).animate({right:'0'},i*25);
		}
		$(this).parent().siblings().children('.list-se').children('li').css('right', '-100%');
	})

}
$.fn.ad=function()
{
	var t = $(this);
	for(var i = 0 ; i<t.length ; i++)
	{
		var count = t.eq(i).children().children().length;
		if (count>1) 
		{
			t.eq(i).children('.title').append('<img src="image/video/down.png" alt="img">');
			t.eq(i).children('.list-se').children('.title').append('<img src="image/video/up.png" alt="img">');
		}
	}
}

$('.list-se li').click(function() {
	$(this).siblings().children('p').css({color: 'rgba(0,0,0,1)',});
	$(this).children('p').css({color: 'rgba(36,101,255,1)',});
	$(this).siblings().children('.vl-img').attr('src','image/video/video-notcheck.png');
	if($(this).hasClass('live')){
		$(this).children('.vl-img').attr('src','image/video/live-on.png');	
	}else {
		$(this).siblings('.live').children('.vl-img').attr('src','image/video/live-notcheck.png');
		$(this).children('.vl-img').attr('src','image/video/video-on.png');
	}
});