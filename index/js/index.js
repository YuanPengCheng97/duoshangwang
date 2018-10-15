$(function() {
        createE();
    // 获取第一个图片 节点对象
    var firstImg = $('.index-imgplay li').first().clone();
    // 放在 ul 的最后
   $('.index-imgplay').append(firstImg).width($('.index-imgplay li').length*$('.index-imgplay img').width());
    var i = 0;
    var timer;
    autoPlay();
    // 有按钮
    $('.rbtn').click(function(){
        i++;
        moveImg(i);
    })
    // 左按钮
    $('.lbtn').click(function(){
        i--;
        moveImg(i);
    })
    //创建
    function createE(){
		//创建ol
		var $ol = $("<ol>");
		$ol.addClass('yuandian');
		$ol.css({position:"absolute",bottom:10,left:200})
		$ol.appendTo($(".indexbox"))
		//根据图片数量创建ol中的小圆点
		$(".index-imgplay li").each(function() {
			var $li = $('<li>');
			$li.css({width:10,height:10,borderRadius:5,float:"left",marginRight : 4})
			$li.appendTo($ol);
		});
		//创建左按钮
		var $div = $("<div>");
		$div.addClass('lbtn');
		$div.html("&lt;");
		$div.appendTo($(".indexbox"))
		//创建右按钮
		var $div = $("<div>");
		$div.addClass('rbtn');
		$div.html("&gt;");
		$div.appendTo($(".indexbox"))
	}
    //自动播放
    function autoPlay(){
        timer = setInterval(function(){
            i++;
            moveImg(i);
        }, 3000);
    }
    function moveImg(num){
        // 如果是最后一张图片
        if(i==$('.index-imgplay li').length){
            i = 1;
            $('.index-imgplay').css({left:0});
        }
        // 是第一张
        if(i==-1){
            i=$('.index-imgplay li').length-2;
            $('.index-imgplay').css({left:($('.index-imgplay li').length-1)*-529});
        }
        // 动起来！
        $('.index-imgplay').stop().animate({left:i*-529},400);
        // 换小点的标记
        if(i == ($('.index-imgplay li').length-1)){
            $('.yuandian li').eq(0).addClass('bg').siblings().removeClass('bg');
        }else{
            $('.yuandian li').eq(i).addClass('bg').siblings().removeClass('bg');
        }
    }
    //按钮显示和隐藏
    $('.indexbox').mouseover(function(){
        $('.lbtn').show();
        $('.rbtn').show();
        clearInterval(timer);
    }).mouseout(function(){
        $('.lbtn').hide();
        $('.rbtn').hide();
        autoPlay();
    })
    // 点击小圆点 跳转到指定的页面
    $('.yuandian li').hover(function(){
        i = $(this).index();
        moveImg(i);
    })
})