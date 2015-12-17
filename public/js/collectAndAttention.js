$(function(){
	$(".ordermenu_left li").click(function(){
		$(".ordermenu_left li").removeClass("lihover");
		$(this).addClass("lihover");
		$("#web,#door,#shop").css({display:"none"});
		if($(this).text() == "收藏的商品"){
			$("#web").css({display:"block"});
		}else if($(this).text() == "关注的品牌"){
			$("#door").css({display:"block"});	
		}else{
			$("#shop").css({display:"block"});
		}
	});
	//收藏切换
	$(".right_con .tit li").click(function(){
		$(this).siblings().removeClass("lihover");
		$(this).addClass("lihover");
		$(this).parent().siblings(".showpro").css({display:"none"});
		//$(".showpro").css({display:"none"});
		$(this).parent().siblings(".showpro").eq($(this).index()).css({display:"block"});
	});
	//点击添加标签
	$(".tab .proinfo .blue").click(function(){
		//console.log($(this).text());
		$(this).parent().siblings(".addlabel").css({display:"block"});		
	});	
	//点击关闭按钮
	$(".addlabel .close").click(function(){
		$(this).parent().css({display:"none"});		
	});
	//点击活动显示内容
	$(".tab .pice .active").hover(
		function(){
			$(this).children(".addlabel").css({display:"block"});	
		},
		function(){
			$(this).children(".addlabel").css({display:"none"});	
		}
	)
	
});

