window.onload = function () {
	var data = [
		{ img: 'image/cart/bg-0.png', 
		title: '士大夫士大夫随风倒十分的供货合同今天要凤飞飞法山豆根豆腐干豆腐干的武打风格个多个地方换个地方', 
		hour: '15', url: '1', name: '网络教育', price: '1564', coin: '22'},
		{ img: 'image/cart/bg-0.png', 
		title: '克里夫获利丰厚瑞龙发v那给发给对方就会改恶个发果断减肥古额复读了个发uiu啊了官府关啦房贷首付', 
		hour: '12', url: '2', name: '人民教育', price: '1467', coin: '46'},
		{ img: 'image/cart/bg-0.png', 
		title: '更符合健康全额退几个好菜干部选拔v想日法国try让他一人图如今的刚好四个人的风格个十分广泛大概', 
		hour: '16', url: '3', name: '安徽教育', price: '1545', coin: '24'},
		{ img: 'image/cart/bg-0.png', 
		title: '发顺丰到付的公共电话亭教育集团电风扇广泛故事感人太热也页也分公司管饭官方给他然后try人', 
		hour: '13', url: '4', name: '中国教育', price: '1267', coin: '39'},
		{ img: 'image/cart/bg-0.png', 
		title: '啊发娥夫人try徒弟师傅v梵蒂冈地方很多个放到公司官方的手感温润特意让他一人兔兔上市公司股份地方', 
		hour: '18', url: '5', name: '科技教育', price: '1366', coin: '62'},
	]
	var content = $("#content-0");
	var cc = document.getElementById("content-0"); // 获得被克隆的节点对象 
	for (var i = 1, k = 0; i < 6; i++, k++) { 
		var clonedNode = content.clone(true); // 克隆节点 
		var oItems = cc.childNodes;
		clonedNode.attr("id", "content-" + i); // 修改一下id 值，避免id 重复
		for (var j = 1; j < 13;) {
			oItems[j].setAttribute("id", oItems[j].className+ "-" + i);
			// console.log(oItems[j].id);
			j += 2;
		}
		var cn1 = oItems[5].childNodes[1];
		var cn2 = oItems[7].childNodes[3];
		var cn3 = oItems[7].childNodes[7];
		var cn4 = oItems[5].childNodes[5];
		var cn5 = oItems[5].childNodes[3].childNodes[3];
		cn1.setAttribute("id", cn1.className+ "-" + i);
		cn2.setAttribute("id", cn2.className+ "-" + i);
		cn3.setAttribute("id", cn3.className+ "-" + i);
		cn5.setAttribute("id", cn5.className+ "-" + i);
		cn4.setAttribute("id", cn4.className+ "-" + i);
		cn1.innerHTML = data[k].title;
		cn5.innerHTML = data[k].hour;
		cn2.innerHTML = data[k].price;
		cn3.innerHTML = data[k].coin;
		oItems[3].setAttribute("src", data[k].img);
		cn4.setAttribute("href", data[k].url);
		cn4.innerHTML = data[k].name;
		content.before(clonedNode); // 在父节点插入克隆的节点 
	} 
};

var ww = $(window).width();
var wh = $(window).height();

(function() {
    var hh = $(".header").height();
    var fh = $(".footer").height();
    var mp = $(".main").outerWidth();
    var mw = ww-mp;
    var mh = wh-hh-fh-mp-2;
    $(".main").css({width: mw +'px',height: mh +'px',});
})(document, window);

function choose(e) {
	var c = $('#'+e).children('img:first');
	$("#choose_all").css({border:'1px solid rgba(187,187,187,1)',});
	$("#choose_all").children('img:first').css({display: 'none',});
	if(c.css("display") == "block") {
		c.css({
			display: 'none',
		});
		$('#'+e).css({
			border:'1px solid rgba(187,187,187,1)',
		});
	}else {
		c.css({
			display: 'block',
		});
		$('#'+e).css({
			border:'0px',
		});
	}
};

function pay_choose(e) {
	var c = $('#'+e).children('img:first');
	if(c.css("display") == "block") {
		c.css({
			display: 'none',
		});
		$('#'+e).css({
			border:'1px solid rgba(187,187,187,1)',
		});
	}else {
		$(".pay_choose_img").css({display: 'none',});
		$(".pay_choose").css({border:'1px solid rgba(187,187,187,1)',});
		c.css({
			display: 'block',
		});
		$('#'+e).css({
			border:'0px',
		});
	}
}

$("#choose_all").click(function(event) {
	var ca = $("#choose_all").children('img:first');
	var c = $(".choose_img");
	if(ca.css("display") == "block") {
		c.css({
			display: 'none',
		});
		$(".choose").css({
			border:'1px solid rgba(187,187,187,1)',
		});
	}else {
		c.css({
			display: 'block',
		});
		$(".choose").css({
			border:'0px',
		});
	}
});

$(".add").click(function() {
    $(this).prev().val(parseInt($(this).prev().val()) + 1);
});
  
$(".sub").click(function() {
	var i = $(this).next().val();
	if(i != "1"){
    	$(this).next().val(parseInt($(this).next().val()) - 1);
	}else {
		$(this).attr('readonly','true');
	}
});

$('.content').on("touchstart", function(e) {
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});

$('.content').on("touchmove", function(e) {
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;
      
    var p = $(this).children('div:last');
    if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
    	$(this).removeClass('content_left');
    	p.removeClass('delete_right');
		setTimeout(function(){
    		p.children('p:first').css({display: 'none',});
    	},100);
    	// console.log('右');
    }
    else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
    	$(this).addClass('content_left');
    	p.addClass('delete_right');
    	setTimeout(function(){
    		p.children('p:first').css({display: 'block',});
    	},200);
    	// console.log('左');
    }
    // else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
    //     // $(this).unbind('touchmove');
    //     // console.log('下');
    // }
    // else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
    //     // $(this).unbind('touchmove');
    //     // console.log('上');
    // }
    // else{
    //     alert("Just Touch");
    // }
});

$(".curtain").css({height: wh + 'px',});
var bgWidth = $('.bg').width();
$('.bg').css({height: bgWidth*0.57 + 'px',});
$('.word').css({left: bgWidth + 'px',});
$('.price').css({left: bgWidth + 'px',});

function check() {
	console.log('xxx');
	$(".pay").addClass('pay_top');
	$(".curtain").css({display: 'block',});
	return false;
}

$(".curtain").click(function() {
	$(this).css({display: 'none',});
	$(".pay").removeClass('pay_top');
});

$(".delete").click(function(event) {
	$(this).parent().css({'transform':'translateX(-125%)', 'height':'0px', 'margin':'0px',});
	$(this).parent().delay(1000).hide(0);
	// console.log('测试');
});