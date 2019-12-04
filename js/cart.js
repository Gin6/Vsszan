window.onload = function () { 
	var sourceNode = document.getElementById("content-0"); // 获得被克隆的节点对象 
	for (var i = 1; i < 6; i++) { 
		var clonedNode = sourceNode.cloneNode(true); // 克隆节点 
		clonedNode.setAttribute("id", "content-" + i); // 修改一下id 值，避免id 重复 
		sourceNode.parentNode.appendChild(clonedNode); // 在父节点插入克隆的节点 
	} 
};

var ww = $(window).width();
var wh = $(window).height();

(function() {
    var hh = $(".header").height();
    var fh = $(".footer").height();
    var mp = $(".main").outerWidth();
    var mw = ww-mp;
    var mh = wh-hh-fh-mp;
    $(".main").css({width: mw +'px',height: mh +'px',});
})(document, window);

$(".choose").click(function(event) {
	var c = $(".choose_img");
	if(c.css("display") == "block") {
		c.css({
			display: 'none',
		});
		$(this).css({
			border:'1px solid rgba(187,187,187,1)',
		});
	}else {
		c.css({
			display: 'block',
		});
		$(this).css({
			border:'0px',
		});
	}
});

$(".add").click(function() {
    $(this).prev().val(parseInt($(this).prev().val()) + 1);
});
  
$(".sub").click(function() {
	var i = $(this).next().val();
	if(i != "0"){
    	$(this).next().val(parseInt($(this).next().val()) - 1);
	}else {
		$(this).attr('readonly','true');
	}
});

$(".content").on("touchstart", function(e) {
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});

$(".content").on("touchmove", function(e) {
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;
      
    if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
    	$(this).removeClass('content_left');
    	$(".delete").removeClass('delete_right');
		setTimeout(function(){
    		$(".delete_p").css({display: 'none',});
    	},100);
    }
    else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
    	$(this).addClass('content_left');
    	$(".delete").addClass('delete_right');
    	setTimeout(function(){
    		$(".delete_p").css({display: 'block',});
    	},200);
    }
    // else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
    //     alert("Top to Bottom");
    // }
    // else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
    //     alert("Bottom to Top");
    // }
    else{
        alert("Just Touch");
    }
});

$(".curtain").css({
	height: wh + 'px',
});

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