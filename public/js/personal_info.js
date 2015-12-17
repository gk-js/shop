$(window).load(function(){
	//鼠标悬浮
	//$(".detail").bind("mouseover",function(){
		//	$(".integral").css({display:"block"});
			//$(".detail").unbind("mouseover");
		//}
	//)
	//鼠标移走
	$(".detail").bind("mouseout",function(){
			$(".detail").bind("mouseover",function(){
				$(".integral").css({display:"block"});
				$(".detail").unbind("mouseover");
			});
		}
	)
	$(".close").click(function(){
				$(".integral").css({display:"none"});
	});	
	$(".headerimg_sel a").click(function(){
		$("#setting,#system").css({display:"none"});		
		if($(this).text() == "系统头像"){
			$("#system").css({display:"block"});		
		}else{
			$("#setting").css({display:"block"});		
		}	
	});
	$(".changeimg").click(function(){
		$(".upload").toggle();
	});
	$("#system li").click(function(){
		$(this).siblings().removeClass("hoverli");
		$(this).addClass("hoverli");
	});
	$(".upload .text2").click(function(){
		$(".upload").css({display:"none"});
	});
	var province = jQuery.parseJSON($("#host_city_list").html());
	var citys = jQuery.parseJSON($("#city_list").html());
	var proHtml = "",cityshtml = "";
	//添加省份
	for(var i = 0,len = province.length; i < len; i ++ ){
		proHtml += "<option>"+ province[i].split(",")[1] +"</option>"
	}
	$("#province").append(proHtml);
});