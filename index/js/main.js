//公告获取
$.ajax({
	type : 'get',
	url : 'gonggao.json?t=' + new Date().getTime(),
	success : function(data){
		var conStr = '';
		var conStr1 = '';
		for(let i in data[0]){
			conStr += `<li><a href="#">${data[0][i]}</a></li>`
		}
		($(".news-gong ul")).append(conStr);
			// $(".news-gong ul")
			for(let j in data[1]){
				conStr1 += `<li><a href="#">${data[1][j]}</a></li>`
			}
			($(".news-bao ul")).append(conStr1);
		}
	})
var $a = $(".new-tit a");
$a.first().hover(function(){
	$(this).css({"background":"#fff","border-top":"1px solid red","border-bottom":"0"})
	$a.last().css({"background" : "#f5f5f5","border-top":"1px solid #e4e3e6","border-bottom":"1px solid #e4e3e6"})
	$('.news-gong ul').show();
	$(".news-bao ul").hide();
})
$a.last().hover(function(){
	$(this).css({"background":"#fff","border-top":"1px solid red","border-bottom":"0"})
	$a.first().css({"background" : "#f5f5f5","border-top":"1px solid #e4e3e6","border-bottom":"1px solid #e4e3e6"})
	$('.news-gong ul').hide();
	$(".news-bao ul").show();
})
//商品动态获取
$.ajax({
	type : "get",
	url : "product.json?t=" + new Date().getTime(),
	success : function(data){
		for(var key in data){
			var conStr = "";
			for(var i = 0;i < data[key].length; i++){
				conStr += `<li>
				<img src="img/${data[key][i].src}">
				<a href="#" title="${data[key][i].test}">${data[key][i].test}</a>
				<p>
				<span>分销价</span>
				<a href="#">${data[key][i].price}</a>
				</p>
				</li>`
			}
			$(".pro-all ." + key).append(conStr);
		}
	}
})

