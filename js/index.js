window.onload = function () {
	var contentleft = $("#content-left-0"); // 获得被克隆的节点对象
	var contentright = $("#content-right-0"); 
	var descontentleft = $("#des-content-left-0"); 
	var descontentright = $("#des-content-right-0"); 
	var exccontentleft = $("#exc-content-left-0"); 
	var exccontentright = $("#exc-content-right-0"); 
	var t0 = $("#t0");
	for (var i = 1; i < 3; i++) { 
		var clonedNodeleft = contentleft.clone(true); // 克隆节点
		var clonedNoderight = contentright.clone(true); 
		var desleft = descontentleft.clone(true); 
		var desright = descontentright.clone(true); 
		var excleft = exccontentleft.clone(true); 
		var excright = exccontentright.clone(true); 
		clonedNodeleft.attr("id", "content-left-" + i); // 修改一下id 值，避免id 重复
		clonedNoderight.attr("id", "content-right-" + i);
		desleft.attr("id", "des-content-left-" + i);
		desright.attr("id", "des-content-right-" + i);
		excleft.attr("id", "exc-content-left-" + i);
		excright.attr("id", "exc-content-right-" + i);
		contentleft.before(clonedNodeleft); // 在父节点插入克隆的节点 
		contentright.before(clonedNoderight);
		descontentleft.before(desleft);
		descontentright.before(desright);
		exccontentleft.before(excleft);
		exccontentright.before(excright);
	} 
	for (var k = 1; k < 8; k++) { 
		var clonedNodet0 = t0.clone(true);
		clonedNodet0.attr("id", "t" + k);
		t0.before(clonedNodet0);
	} 

	var shopNodeHeight = $('.shopNode').width();
	var shopNodeWidth = $('.shopNode').outerWidth(true);
	var shopNodeMargin = shopNodeWidth-shopNodeHeight;
	var conHeight = $('.content-0').height();
	var conHeightAll = $('.content-0').outerHeight(true);
	var conMargin = conHeightAll-conHeight;
	var shopHeight = shopNodeHeight*2+shopNodeMargin*2-conMargin;
	var margintop = shopNodeHeight*0.2317;
	var paddingtop = shopNodeHeight*0.1721;
	var top = shopNodeHeight*0.1258;
	$('.shopNode').css('height',shopNodeHeight);
	$('.more-p1').css('margin-top',margintop);
	$('.shopNode-img').css('padding-top',paddingtop);
	$('.shopNode-p').css('top',top);
	$('.shop').css('height',shopHeight);
	// console.log(shopHeight);
};

//Banner
var imgCount = 5;
var index = 1;
var intervalId;
//自动轮播功能 使用定时器
autoNextPage();
function autoNextPage(){
    intervalId = setInterval(function(){
        nextPage(true);
    },5000);
}
function nextPage(next){
    var targetLeft = 0;
    if(next){//往后走
        if(index == 5){//到最后一张，直接跳到第一张
            targetLeft = 0;
            index = 1;
        }else{
            index++;
            targetLeft = -100*(index-1);
        }

    }else{//往前走
        if(index == 1){//在第一张，直接跳到第五张
            index = 5;
            targetLeft = -100*(imgCount-1);
        }else{
            index--;
            targetLeft = -100*(index-1);
        }
    }
    $('.list').animate({left:targetLeft+'%'});
}

var contentWidth = $('.content-0').width();
var boxHeight = contentWidth*0.6;
$('.box').css({height: boxHeight+'px'});