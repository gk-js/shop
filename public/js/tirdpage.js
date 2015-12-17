// JavaScript Document
$(function(){
	//选择产品列表
	$(".choice").hover(
		function(){
			$(".choice_left").addClass("choice_lefthover");
			//console.log($(".choice_left"));
			$(".choice_center").addClass("choice_centerhover");	
			$(".choice_center span").text("∧")
			$(".choice_right").addClass("choice_righthover");
			$(".choicemore").css({display:"block"});
		},
		function(){
			$(".choice_left").removeClass("choice_lefthover");
			$(".choice_center").removeClass("choice_centerhover");
			$(".choice_center span").text("∨")	
			$(".choice_right").removeClass("choice_righthover");
			$(".choicemore").css({display:"none"});
		}
	);
	//$(".fli_con").height(trueHeight + logHeight + 26 + 12);
	//商品列表一行最后一个右padding 和背景去掉
	$(".goods_list li").each(function(i){
			if((i+1)%4 == 0){
				$(this).addClass("current");	
			}
		});
	$(".goods_list li").each(function(){
		$(this).hover(
			function(){
				$(this).children(".g_hover").css({display:"block"});
				//$(this).siblings(".g_out").find("img").attr("src");
				//$(this).find("img").attr("src",""+ $(this).siblings(".g_out").find("img").attr("src") +"");
				$(this).children(".g_hover").find("img").attr("src",""+ $(this).children(".g_out").find("img").attr("src") +"");
				//console.log($(this).children(".g_out").find("img").attr("src"));
			},
			function(){
				$(this).children(".g_hover").css({display:"none"});
			}
		);
	});
	
	//menu 跟随屏幕滚
	$.fn.smartFloat = function() {
		var position = function(element) {
		var top = element.position().top + 100, pos = element.css("position");
		
		$(window).scroll(function() {
			var scrolls = $(this).scrollTop();
			if (scrolls > top) {
				if (window.XMLHttpRequest) {
					element.css({position: "fixed",top: 0});
				} else {
					element.css({top: scrolls});
				}
			}else {
				element.css({position: "relative",top:"0px"
			});
		}
		});
	};
	return $(this).each(function() {
	position($(this));
	});
	};
	//绑定
	$(".menu_pro").smartFloat();
	//点击选中关闭
	//$(".choiced_con li img").click(function(){
		//$(this).parent().hide();
		//console.log($(this).parent().siblings("li:visible"));
	//	if($(this).parent().siblings("li:visible").length <= 0){
		//	$(".fli_choiced").css({display:"none"});
		//}
		//console.log($(this).parent());
	//});
	//多选框显示隐藏
	$(".fun_more").click(function(){
		$(this).parent().siblings().find("input").toggle();
	});
	//默认参数设置超出隐藏 高度
	$(".fli_group").each(function(){
		$(this).find("li:gt(7)").css({display:"none"});
		$(this).children(".filgrouptit")
			.height($(this).children(".filgroup_con").innerHeight())
			.css("lineHeight",""+ $(this).children(".filgroup_con").innerHeight()  +"px");
	});
	//点击高度
	$(".fun_more2").click(function(){
		if($(this).text() == "更多∨"){
			$(this).text("收起∧");
			//console.log($(this));
			//console.log($(this).parent().siblings(".filgrouptit"));
			$(this).parent().siblings().find("li:gt(7)").css({display:"block"});
			$(this).parent().siblings(".filgrouptit")
				.height($(this).parent().siblings(".filgroup_con").innerHeight())
				.css("lineHeight",""+ $(this).parent().siblings(".filgroup_con").innerHeight() +"px");
		}else{
			$(this).text("更多∨");
			$(this).parent().siblings().find("li:gt(7)").css({display:"none"});
			$(this).parent().siblings(".filgrouptit")
				.height($(this).parent().siblings(".filgroup_con").innerHeight())
				.css("lineHeight",""+ $(this).parent().siblings(".filgroup_con").innerHeight() +"px");
		}
	});
	//隐藏最后几项参数
	$(".fli_group:gt(2):not(:last)").css({display:"none"});
	$(".bottom_button_c").click(function(){
		if($(".fli_group:hidden").length > 0){
			$(".fli_group").css({display:"block"});	
			$(".bottom_button_c").text("收起");
		}else{
			$(".fli_group:gt(1):not(:last)").css({display:"none"});
			var text = "";
			$(".fli_group:hidden").find(".filgrouptit span").each(function(){
					text += $(this).text()+",";
			});	
			//console.log(text);
			$(".bottom_button_c").text("展开"+"("+text+ ")");	
		}
	});
	$(".fli_group").click(function(){})
	//点击全部取消
	$(".choiced_reset").click(function(){
		$(".fli_choiced").css({display:"none"});
	});
	//选中状态栏为空的时候
	$(".choiced_con li").click(function(){
		if($(".choiced_con li:visible").length <= 0){
			$(".fli_choiced").css({display:"none"});
		}
	});
	//logimg 鼠标悬浮变为文字
	$(".flilog_list li").hover(
		function(){
			$(this).children("img").css({display:"none"});
			$(this).children(".lihover").css({display:"block"});
		},
		function(){
			$(this).children("img").css({display:"block"});
			$(this).children(".lihover").css({display:"none"});
		}
	)
	//设置logo栏高度
	$(".flilog_list li:gt(13)").css({display:"none"});
	var logHeight = $(".flilog_list").outerHeight();
	//$(".fli_log").height(logHeight + 22);
	$("#log .filgrouptit").height(logHeight+12).css("lineHeight",""+ logHeight +"px");
	$("#log .fun_more3").click(function(){
		if($("#log .fun_more3").text() == "更多∨" ){
			$("#log .fun_more3").text("收起∧");
			//隐藏第二行
			$(".flilog_list li:gt(13)").css({display:"block"});
			//设置logo栏高度
			var logHeight = $(".flilog_list").outerHeight();
			//$(".flilog_list").height(logHeight);
			$("#log .filgrouptit").height(logHeight + 12).css("lineHeight",""+ logHeight +"px");
		}else{
			$("#log .fun_more3").text("更多∨");	
			//显示第二行
			$(".flilog_list li:gt(13)").css({display:"none"});
			//设置logo栏高度
			var logHeight = $(".flilog_list").outerHeight();
			//$(".flilog_list").height(logHeight);
			$("#log .filgrouptit").height(logHeight + 12).css("lineHeight",""+ logHeight +"px");
		}
	});
	//网站菜单样式
	$(".choicemenu li").click(function(){
		$(this).siblings().find("b").removeClass("bup");
		$(this).siblings().find("b").removeClass("bdown");
		$(this).siblings().find(".span_1").removeClass("span_1hover");
		$(this).find(".span_1").addClass("span_1hover");
		$(this).find("b").addClass("bup");
		if($(this).find("b").attr("class") == "bup"){
			$(this).find("b").addClass("bdown");	
		}else{
			$(this).find("b").removeClass("bdown");	
		}
	});
	$(".choicemenu li").find(".span_2").click(function(){
		$(this).parent().siblings().find(".span_1").removeClass("span_1hover");
		$(this).parent().siblings().find(".span_2").removeClass("span_2hover");
		$(this).addClass("span_2hover");
	});
	$(".input1_nopro")
		.focus(function(){
			if($(this).val() == "请输入关键字"){
				$(this).val("").css({color:"#2b2b2b"});	
			}	
		});
	//选择地区
	$(".receive_placecon").hover(
		function(){
			$(".address").css({display:"block"});	
		},
		function(){
			$(".address").css({display:"none"});	
		}
	);
	//选择地区标题
	$(".addresstit li").click(function(){
		$(".addresstit li").removeClass("lihover");
		$(this).addClass("lihover");
	});
})