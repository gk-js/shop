$(window).load(function(){
	$(".ordermenu_left li").click(function(){
		$(".ordermenu_left li").removeClass("lihover");
		$(this).addClass("lihover");
		$("#web,#door").css({display:"none"});
		if($(this).text() == "网站订单"){
			$("#web").css({display:"block"});
		}else{
			$("#door").css({display:"block"});	
		}
	});
	
});