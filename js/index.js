window.onload = function () {
	var content = $(".content-0"); // 获得被克隆的节点对象 
	for (var i = 1; i < 6; i++) { 
		var clonedNode = content.clone(true); // 克隆节点 
		clonedNode.attr("id", "content-" + i); // 修改一下id 值，避免id 重复
		content.before(clonedNode); // 在父节点插入克隆的节点 
	} 
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