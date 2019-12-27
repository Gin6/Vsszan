var wh = $(window).height();
var ww = $(window).width();
var dpr = window.devicePixelRatio;
var headerHeight = $('.header').outerHeight(true);
var navHeight = $('.nav').outerHeight(true);
var smlHeight = $('.subMenu-left').height();
// var smrHeight = $('.subMenu-right').height();
var exaHeight = $('.example').outerHeight();
var hnHeight = headerHeight + navHeight;
var topLHeight = smlHeight - hnHeight;

$('.main').css({height: wh-hnHeight,});
$('.subMenu-left').css({display: 'block',});
$('.subMenu-right').css({display: 'block',});
var data = [
	{title: '全部', num: '10', },
	{title: 'Enscape', num: '19', },
	{title: '摄影技巧', num: '18', },
	{title: '软装设计', num: '17', },
	{title: '设计前瞻', num: '16', },
	{title: '设计流程', num: '15', },
	{title: '汇报技巧', num: '14', },
	{title: '案例分析', num: '13', },
	{title: '设计技巧', num: '12', },
	{title: '空间思路', num: '11', },
]
var content = $("#content-1");  // 获得被克隆的节点对象
var list = $("#list-1"); 
for (var i = 2; i < 11; i++) { 
	var clonedNode = content.clone(true); // 克隆节点 
	clonedNode.attr("id", "content-" + i); // 修改一下id 值，避免id 重复
	clonedNode.children(".title").text(data[i-1].title);
	clonedNode.children(".title").css({color: 'rgba(0,0,0,1)',});
	clonedNode.children(".num").text(data[i-1].num);
	content.after(clonedNode); // 在父节点插入克隆的节点 
} 
for (var j = 2; j < 10; j++) {
	var clonedNodeList = list.clone(true);
	clonedNodeList.attr("id", "list-" + j);
	list.before(clonedNodeList);
}
var conHeight = $('.content').height();
var sidHeight = $('.sidebar').height();
if (sidHeight < conHeight) {
	$('.sidebar').css({height: conHeight,});
    var topRHeight = conHeight;
}else {
	var topRHeight = sidHeight;
}
console.log(topRHeight);

function bodyScroll(event){
    event.preventDefault();
}

$('.subMenu-right').css({top: '-'+topRHeight+'px',});
$('.subMenu-left').css({top: '-'+smlHeight+'px',});

$('.curtain').css({height: wh,});

$('.curtain').click(function() {
	$('.lr-p').css({color: 'rgba(0,0,0,1)',});
	$('.lr-p').next().removeClass('lr-img');
	$('.lr-p').next().attr('src','image/curriculum/down.png');
	$('.subMenu-left').css({top: '-'+smlHeight+'px',});
	$('.subMenu-right').css({top: '-'+topRHeight+'px',});
	setTimeout(function(){
		$('.curtain').css({display: 'none',});
	},300);	
	document.body.removeEventListener('touchmove',bodyScroll, { passive: false });
});

$('.lr-p-l').click(function() {
	var imgNode = $(this).next();
	if(imgNode.hasClass('lr-img')){
		document.body.removeEventListener('touchmove',bodyScroll, { passive: false });
		$(this).css({color: 'rgba(0,0,0,1)',});
		imgNode.removeClass('lr-img');
		imgNode.attr('src','image/curriculum/down.png');
		$('.subMenu-left').css({top: '-'+smlHeight+'px',});
		setTimeout(function(){
    		$('.curtain').css({display: 'none',});
    	},300);	
	}else{
		document.body.addEventListener('touchmove',bodyScroll, { passive: false });
		$(this).css({color: 'rgba(36,101,255,1)',});
		imgNode.addClass('lr-img');
		imgNode.attr('src','image/curriculum/up.png');
		$('.subMenu-left').css({top: hnHeight+'px',});
		$('.lr-p-r').css({color: 'rgba(0,0,0,1)',});
		$('.lr-p-r').next().removeClass('lr-img');
		$('.lr-p-r').next().attr('src','image/curriculum/down.png');
		$('.subMenu-right').css({top: '-'+topRHeight+'px',});
    	$('.curtain').css({display: 'block',});	
	}
});

$('.lr-p-r').click(function() {
	var imgNode = $(this).next();
	if(imgNode.hasClass('lr-img')){
		document.body.removeEventListener('touchmove',bodyScroll, { passive: false });
		$(this).css({color: 'rgba(0,0,0,1)',});
		imgNode.removeClass('lr-img');
		imgNode.attr('src','image/curriculum/down.png');
		$('.subMenu-right').css({top: '-'+topRHeight+'px',});
		setTimeout(function(){
    		$('.curtain').css({display: 'none',});
    	},300);
	}else{
		document.body.addEventListener('touchmove',bodyScroll, { passive: false });
		$(this).css({color: 'rgba(36,101,255,1)',});
		imgNode.addClass('lr-img');
		imgNode.attr('src','image/curriculum/up.png');
		$('.subMenu-right').css({top: hnHeight+'px',});
		$('.lr-p-l').css({color: 'rgba(0,0,0,1)',});
		$('.lr-p-l').next().removeClass('lr-img');
		$('.lr-p-l').next().attr('src','image/curriculum/down.png');
		$('.subMenu-left').css({top: '-'+smlHeight+'px',});
		$('.curtain').css({display: 'block',});
	}
});

$('.subMenu-left-p').click(function() {
	$(this).siblings().css({color: 'rgba(0,0,0,1)',});
	$(this).css({color: 'rgba(36,101,255,1)',});
	$('.lr-p-l').text($(this).text());
});

$('.content-0').click(function() {
	$(this).siblings().children(".title").css({color: 'rgba(0,0,0,1)',});
	$(this).children(".title").css({color: 'rgba(36,101,255,1)',});
	$('.lr-p-r').text($(this).children(".title").text());
});

$('.subMenu-right-li').click(function() {
	$('.lr-p-r').text($(this).text());
	elementId = $(this).attr("name");
	// console.log(elementId);
	if (elementId == 1) 
		$('.curtain-2').css({top: '0px',});
	if (elementId == 2) 
		$('.curtain-2').css({top: exaHeight+'px',});
	if (elementId == 3) 
		$('.curtain-2').css({top: exaHeight*2+'px',});
	if (elementId == 4) 
		$('.curtain-2').css({top: exaHeight*3+'px',});
	if (elementId == 5) 
		$('.curtain-2').css({top: exaHeight*4+'px',});
	if (elementId == 6) 
		$('.curtain-2').css({top: exaHeight*5+'px',});
	if (elementId == 7) 
		$('.curtain-2').css({top: exaHeight*6+'px',});
});

$('.side').click(function() {
	if($(this).hasClass('strip')) {
		$(this).attr("src", 'image/curriculum/side.png');
		$(this).removeClass('strip');
		$('.list').removeClass('list-f');
		$('.list-img').removeAttr("style");
		// $('.word').removeClass('word-f');
	}else {
		$(this).attr("src", 'image/curriculum/strip.png');
		$(this).addClass('strip');
		$('.list').addClass('list-f');
		$('.list-img').css({width: ww*0.43066667+'px',});
		// $('.word').addClass('word-f');
	}
});