var ww = $(window).width();
var wh = $(window).height();
var headHeight = $('.header').outerHeight(true);
var confteHeight = $('.content-footer').outerHeight(true);
var navWidth = $('.nav').width();
var drHeight = $('.dr').height();
var toReportHeight = $('.toReport').height();
var navWidthAll = $('.nav').outerWidth(true);
var navHeightAll = $('.nav').outerHeight(true);
var videoHeight = $('.video-box').outerHeight(true);
var padding = (navWidthAll-navWidth)/2;

$('.maxbox').css({height: wh-headHeight,});
$('.content-1,.content-2,.content-3').css({height: wh-headHeight-navHeightAll-confteHeight,});

$('.nav').css({width: ww-padding*2,});

$('textarea').click(function() {
	$(this).focus();
});
$('.cancel').click(function() {
	$('.curtain').css({display: 'none'});
	$('.curtain').children().css({display: 'none'});
});

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
	$('.dr').css({display: 'block',});
	$('.toReport').css({display: 'block',});
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

function bodyScroll(event){
    event.preventDefault();
};

function WhetherFree(){
	// console.log('123');
	if ($('.price').css("display") == "none") {
		$('.content-1-header').addClass('content-1-header-free');
		$('.vip').css({display: 'none'});
	}
	else
		$('.content-1-header').removeClass('content-1-header-free');
};

$('.writeComment').click(function() {
	$('.curtain').css({display: 'block'});
	$('.popup-comment').css({display: 'block'});
	// document.body.addEventListener('touchmove',bodyScroll, { passive: false });
});

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

//难易程度
$('.difficult').children('input').click(function(event) {
	var i = $(this).attr("value");
	$(this).parent().siblings().css({background: 'rgba(255,255,255,1)', borderColor: 'rgba(221,221,221,1)'});
	// console.log(i);
	if (i == 1)
		$(this).parent().css({background: 'rgba(210,233,243,1)', borderColor: 'rgba(210,233,243,1)'});
	if (i == 2)
		$(this).parent().css({background: 'rgba(189,221,242,1)', borderColor: 'rgba(189,221,242,1)'});
	if (i == 3)
		$(this).parent().css({background: 'rgba(178,214,245,1)', borderColor: 'rgba(178,214,245,1)'});
	if (i == 4)
		$(this).parent().css({background: 'rgba(187,211,255,1)', borderColor: 'rgba(187,211,255,1)'});
	if (i == 5)
		$(this).parent().css({background: 'rgba(188,198,250,1)', borderColor: 'rgba(188,198,250,1)'});
});

//弹窗
function closeWindows() {
	$('.curtain_2').css({display: 'none'});
	$('.dr').css({bottom: '-'+drHeight+'px'});
	$('.toReport').css({bottom: '-'+toReportHeight+'px'});
	$('.drr').remove();
	document.body.removeEventListener('touchmove',bodyScroll, { passive: false });
};

$('.main-comment').click(function() {
	var parentNode = $(this);
	if ($(this).hasClass('lecturer')) {
		var btag = $('<button>');
		btag.html('举报');
		btag.attr({
			type: 'button',
			class: 'der repbut drr'
		});
		if ($(this).has('.myReply').length) {	
			var btag2 = $('<button>');	
			btag2.html('删除回复');	
			btag2.attr({
				type: 'button',
				class: 'delreply drr'
			});
			$('.cancel').before(btag2,btag);
			$('.delreply').click(function() {
				closeWindows();
				parentNode.find('.myReply').slideUp(300, function(){ parentNode.find('.myReply').remove() });
			});
		}else {
			var btag3 = $('<button>');
			btag3.html('回复');
			btag3.attr({
				type: 'button',
				class: 'reply drr'
			});
			$('.cancel').before(btag3,btag);
			$('.reply').click(function() {
				closeWindows();
				document.body.addEventListener('touchmove',bodyScroll, { passive: false });	
				$('.curtain').css({display: 'block'});
				$('.reply-box').css({display: 'block'});
				$('.reply-box').find('textarea').focus();
			});
		}
	}else {
		if ($(this).has('.evaluate').length) {	
			var btag = $('<button>');
			btag.html('删除');
			btag.attr({
				type: 'button',
				class: 'der delbut drr'
			});
			$('.cancel').before(btag);
			$('.delbut').click(function() {
				parentNode.slideUp(300, function(){ parentNode.remove() });
				closeWindows();
			});
		}else {
			var btag = $('<button>');
			btag.html('举报');
			btag.attr({
				type: 'button',
				class: 'der repbut drr'
			});
			$('.cancel').before(btag);
		}
	}

	$('.copy-btn').click(function(){
		var e = parentNode.find(".tex").text();
		var t = parentNode.find("textarea");
		t.text(e);
		//实例化clipboard
		var clipboard = new ClipboardJS('#copy-btn');
		clipboard.on("success", function(e){
			console.log('success');
			e.clearSelection();
		});
		clipboard.on("error", function(e){
			console.log('error');
		});
	});

	$('.repbut').click(function() {
		$('.dr').css({bottom: '-'+drHeight+'px'});
		$('.toReport').css({display: 'block', bottom: '0'});
	});

	$('.curtain_2').css({display: 'block'});
	$('.dr').css({display: 'block', bottom: '0'});
	document.body.addEventListener('touchmove',bodyScroll, { passive: false });	
});

$('.cancel').click(function() {
	closeWindows();
});

$('.curtain_2').click(function() {
	closeWindows();
});