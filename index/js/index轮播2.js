$(function(){
	 createE();
    // 获取第一个图片 节点对象
    var firstImg1 = $('.poxul li').eq(0).clone(true);
    // 放在 ul 的最后
    $('.poxul').append(firstImg1).width($('.poxul li').length*533);
    var i = 0;
    var timer;
    autoPlay();
    // 有按钮
    $('.rbtn1').click(function(){
        i++;
        moveImg(i);
    })
    // 左按钮
    $('.lbtn1').click(function(){
        i--;
        moveImg(i);
    })
    //创建
    function createE(){
		//创建ol
		var $ol = $("<ol>");
		$ol.addClass('yuandian1');
		$ol.css({position:"absolute",bottom:10,left:200})
		$ol.appendTo($(".pox"))
		//根据图片数量创建ol中的小圆点
		$(".poxul li").each(function() {
			var $li = $('<li>');
			$li.css({width:10,height:10,borderRadius:5,float:"left",marginRight : 4})
			$li.appendTo($ol);
		});
		//创建左按钮
		var $div = $("<div>");
		$div.addClass('lbtn1');
		$div.html("&lt;");
		$div.appendTo($(".pox"))
		//创建右按钮
		var $div = $("<div>");
		$div.addClass('rbtn1');
		$div.html("&gt;");
		$div.appendTo($(".pox"));
	}
    //自动播放
    function autoPlay(){
        timer = setInterval(function(){
            i++;
            moveImg(i);
        }, 2000);
    }
    function moveImg(num){
        // 如果是最后一张图片
        if(i==$('.poxul li').length){
            i = 1;
            $('.poxul').css({left:0});
        }
        // 是第一张
        if(i==-1){
            i=$('.poxul li').length-2;
            $('.poxul').css({left:($('.poxul li').length-1)*-530});
        }
        // 动起来！
        $('.poxul').stop().animate({left:i*-530},300);
        // 换小点的标记
        if(i == ($('.poxul li').length-1)){
            $('.yuandian1 li').eq(0).addClass('bg1').siblings().removeClass('bg1');
        }else{
            $('.yuandian1 li').eq(i).addClass('bg1').siblings().removeClass('bg1');
        }
    }
    //按钮显示和隐藏
    $('.pox').mouseover(function(){
        $('.lbtn1').show();
        $('.rbtn1').show();
        clearInterval(timer);
    }).mouseout(function(){
        $('.lbtn1').hide();
        $('.rbtn1').hide();
        autoPlay();
    })
    // 点击小圆点 跳转到指定的页面
    $('.yuandian1 li').hover(function(){
        i = $(this).index();
        moveImg(i);
    })
})