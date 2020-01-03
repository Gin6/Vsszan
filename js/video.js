$(".video-img").click(function() {
	$(this).hide();
	$("video")[0].play();
	$("video").attr({controls:"controls",});
});

var playHeight = $('.video-play').height();
$('.video-play').css({top: '-'+playHeight/2+'px'});

var ww = $(window).width();
var wh = $(window).height();
var navHeight = $('.nav').height();
var ch = $('.content-2-header').height();
var cf = $('.content-2-footer').height();
var videoHeight = $('.video-box').outerHeight(true);
$('.content,.content-2,.content-3,.mt-tabpage-count').css({height: wh-videoHeight,});
// $('.content-2-main').css({height: wh-videoHeight-navHeight-ch-cf,});

// var navlistWidth = $('.list-1').children('p').width();
var navWidth = $('.nav').width();
var barWidth = $('.bar').width();
var navWidthAll = $('.nav').outerWidth();
var padding = (navWidthAll-navWidth)/2;
$('.nav').css({width: ww-padding*2,});
var navNewWidth = $('.nav').width();
var navNewWidthAll = $('.nav').outerWidth();
// console.log(barWidth);

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
	$('.content-2-footer').css({display: 'block',});
});
$('.list-3').click(function() {
	$('.bar').css({left: navNewWidth-barWidth+padding});
	$('.content-3-footer').css({display: 'block',});
	$('.dr').css({display: 'block',});
	$('.hint').css({display: 'block',});
})

function bodyScroll(event){
    event.preventDefault();
}
$('.curtain').css({height: wh,});
$('.curtain').click(function () {
	closeWindows();
	if ($('.content-3-reply').css("display")=="none") {
		$(this).css({display: 'none',});
		document.body.removeEventListener('touchmove',bodyScroll, { passive: false });
	}
});

$('.message').click(function() {
	if($(this).hasClass('message-close')) {
		document.body.removeEventListener('touchmove',bodyScroll, { passive: false });
		$('.curtain').css({display: 'none',});
		$(this).removeClass('message-close');
	}else {
		document.body.addEventListener('touchmove',bodyScroll, { passive: false });
		$(this).addClass('message-close');
		$('.curtain').css({display: 'block', zIndex: '3',});
	}
});

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

//popModal
$(function(){	
	$('#popModal_ex2').click(function(){
		$('#popModal_ex2').popModal({
			html : function(callback) {
				$.ajax({url:"ajax.html",success:function(result){
					$(".popModal").html(result);
				}});
			}
		});
	});	
});

$(function(){
	var i = $('.avatar-list').children('span').length;
	if (i < 10)
		$('.content-2-header').children('.omit').css({display: 'none'});
});

// $('.lecturer-reply').parent().addClass('lec');
// $('.lecturer-delete').click(function() {
// 	$(this).parents('.lecturer').slideUp(300, function(){ $(this).parents('.lecturer').remove() });
// });
// $('.lecturer-reply').click(function() {
// 	document.body.addEventListener('touchmove',bodyScroll, { passive: false });
// 	$('.curtain').css({display: 'block', zIndex: '4',});
// 	$('.content-3-reply').css({display: 'block',});
// });
$('.button-1').click(function() {
	$('.content-3-reply').css({display: 'none',});
	$('.curtain').css({display: 'none',});
	document.body.removeEventListener('touchmove',bodyScroll, { passive: false });
});

//iphone输入弹窗回调
$("input,textarea").blur(() => {
    setTimeout(() => {
        let ua = navigator.userAgent.toLowerCase()
        let u = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        if (ua.match(/MicroMessenger/i) == 'micromessenger' && !!u) {
          //在iphone 微信中
          let currentPosition, timer
          let speed = 1 //页面滚动距离
          timer = setInterval(function() {
            currentPosition =
              document.documentElement.scrollTop || document.body.scrollTop
            currentPosition -= speed
            window.scrollTo(0, 0) //页面向上滚动
            clearInterval(timer)
          }, 1)
        }
    }, 200)  
});

//弹窗
var drHeight = $('.dr').height();
var hintHeight = $('.hint').height();
function closeWindows() {
	$('.curtain').css({display: 'none', zIndex: '3',});
	$('.dr').css({bottom: '-'+drHeight+'px'});
	$('.hint').css({bottom: '-'+hintHeight+'px'});
	$('.drr').remove();
	document.body.removeEventListener('touchmove',bodyScroll, { passive: false });
};

$('.comment').click(function() {
	var parentNode = $(this);
	if ($(this).hasClass('lecturer')) {
		var btag = $('<button>');
		btag.html('回复');
		btag.attr({
			type: 'button',
			class: 'reply-btn drr'
		});
		$('.delete-btn').before(btag);
		$('.reply-btn').click(function() {
			closeWindows();
			$('.curtain').css({display: 'block', zIndex: '4',});
			document.body.addEventListener('touchmove',bodyScroll, { passive: false });	
			$('.content-3-reply').css({display: 'block',});
			$('.content-3-reply-box').find('textarea').focus();
		});
	}

	$('.confirm').click(function() {
		closeWindows();
		parentNode.slideUp(300, function(){ parentNode.remove() });
	});
	$('.curtain').css({display: 'block', zIndex: '4',});
	$('.dr').css({bottom: '0'});
	document.body.addEventListener('touchmove',bodyScroll, { passive: false });	
});

$('.cancel').click(function() {
	closeWindows();
});

$('.delete-btn').click(function() {
	$('.hint').css({bottom: '0'});
});