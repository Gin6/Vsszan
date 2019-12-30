var ww = $(window).width();
var wh = $(window).height();
var navWidth = $('.nav').width();
var navWidthAll = $('.nav').outerWidth();
var videoHeight = $('.video-box').outerHeight(true);
var padding = (navWidthAll-navWidth)/2;

$('.content-1,.content-2,.content-3,.mt-tabpage-count').css({height: wh-videoHeight,});

$('.nav').css({width: ww-padding*2,});

$(".video-img").click(function() {
	$(this).hide();
	$("video")[0].play();
	$("video").attr({controls:"controls",});
});

var barWidth = $('.bar').width();
var navNewWidth = $('.nav').width();
var navNewWidthAll = $('.nav').outerWidth();

$('.nav-list').click(function() {
	$('.bar').css({transition: 'left 0.5s ease',});
	$(this).siblings().children('p').css({color: 'rgba(0,0,0,1)', transition: '0.5s ease',});
	$(this).children('p').css({color: 'rgba(36,101,255,1)',});
});

$('.list-1').click(function() {
	$('.bar').css({left: padding,});
	$('.video-buy').css({display: 'none',});
	$('.video-study').css({display: 'none',});
	$('.video-vip').css({display: 'none'});
	$('.video-img').css({display: 'block',});
});

$('.list-2').click(function() {
	$('.bar').css({left: navNewWidthAll/2-barWidth/2,});
	$('.video-img').css({display: 'none',});
	$('.video-study').css({display: 'none',});
	$('.video-vip').css({display: 'none'});
	$('.video-buy').css({display: 'block',});
});

$('.list-3').click(function() {
	$('.video-img').css({display: 'none',});
	$('.video-buy').css({display: 'none',});
	$('.video-vip').css({display: 'none'});
	$('.video-study').css({display: 'block',});
	$('.bar').css({left: navNewWidth-barWidth+padding});
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

$(function(){
	WhetherFree();
});
function WhetherFree(){
	console.log('123');
	if ($('.price').css("display") == "none") {
		$('.content-1-header').addClass('content-1-header-free');
		$('.vip').css({display: 'none'});
	}
	else
		$('.content-1-header').removeClass('content-1-header-free');
};

//调试页面样式
$('.content-b2').click(function() {
	$('.content-b1').css({display: 'none'});
	$(this).css({display: 'none'});
	$('.content-b5').css({display: 'block'});
	$('.video-img').css({display: 'none',});
	$('.video-vip').css({display: 'block'});
});

$('.content-b5').click(function() {
	$(this).css({display: 'none'});
	$('.content-b3').css({display: 'block'});
	$('.content-1-header').addClass('content-1-header-free');
	$('.vip').css({display: 'none'});
	$('.video-vip').css({display: 'none'});
});

$('.content-b3').click(function() {
	$(this).css({display: 'none'});
	$('.content-b4').css({display: 'block'});
	$('.price').css({display: 'none'});
	$('.priceFree').css({display: '-webkit-inline-box'});
	WhetherFree();
});