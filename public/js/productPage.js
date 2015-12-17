// JavaScript Document
$(function(){
	/* 热卖组合导航点击样式 */
	$(".setmealtitList").delegate("li","click",function(){
		$(".setmealtitList li").removeClass("lihover");
		$(this).addClass("lihover");
		$(".setmealcon").removeClass("currentsetmealcon");
		$(".setmealcon").eq($(this).index()).addClass("currentsetmealcon");
	});
	/*$(".setmealtitList li").click(function(){
		$(".setmealtitList li").removeClass("lihover");
		$(this).addClass("lihover");
		$(".setmealcon").removeClass("currentsetmealcon");
		$(".setmealcon").eq($(this).index()).addClass("currentsetmealcon");
	});
	/* 商品介绍导航点击样式 */	
	$(".pro_deta_list li").click(function(){
		$(".pro_deta_list li").removeClass("lihover");
		$(this).addClass("lihover");
		if($(this).index() == 0){
			//0
			$(".pro_detailcon").css({display:"block"});
			//0
			$(".pro_ad1").css({display:"block"});
			//0
			$(".pro_introduce").css({display:"block"});
			//1
			$(".pro_introduce2").css({display:"none"});
			//2
			$(".pro_introduce3").css({display:"none"});
			//3
			$(".pro_introduce4").css({display:"none"});
			//4
			$(".pro_introduce5").css({display:"none"});
			//5
			$(".pro_introduce6").css({display:"none"});
			$(".serve_promise").css({display:"block"});
		}
		if($(this).index() == 1){
			$(".pro_detailcon").css({display:"none"});
			$(".pro_ad1").css({display:"none"});
			$(".pro_ad2").css({display:"none"});
			$(".pro_introduce").css({display:"none"});
			$(".pro_introduce3").css({display:"none"});
			$(".pro_introduce4").css({display:"none"});
			$(".pro_introduce5").css({display:"none"});
			$(".pro_introduce6").css({display:"none"});
			$(".pro_introduce2").css({display:"block"});
			$(".serve_promise").css({display:"block"});
		}
		if($(this).index() == 2){
			//0
			$(".pro_detailcon").css({display:"none"});
			//0
			$(".pro_ad1").css({display:"none"});
			//0
			$(".pro_introduce").css({display:"none"});
			//1
			$(".pro_introduce2").css({display:"none"});
			//2
			$(".pro_introduce3").css({display:"block"});
			//3
			$(".pro_introduce4").css({display:"none"});
			//4
			$(".pro_introduce5").css({display:"none"});
			//5
			$(".pro_introduce6").css({display:"none"});
			$(".serve_promise").css({display:"block"});
				
		}
		if($(this).index() == 3){
			//0
			$(".pro_detailcon").css({display:"none"});
			//0
			$(".pro_ad1").css({display:"none"});
			//0
			$(".pro_introduce").css({display:"none"});
			//1
			$(".pro_introduce2").css({display:"none"});
			//2
			$(".pro_introduce3").css({display:"none"});
			//3
			$(".pro_introduce4").css({display:"none"});
			//4
			$(".pro_introduce5").css({display:"none"});
			//5
			$(".pro_introduce6").css({display:"none"});
			$(".serve_promise").css({display:"none"});
				
		}
		if($(this).index() == 4){
			//0
			$(".pro_detailcon").css({display:"none"});
			//0
			$(".pro_ad1").css({display:"none"});
			//0
			$(".pro_introduce").css({display:"none"});
			//1
			$(".pro_introduce2").css({display:"none"});
			//2
			$(".pro_introduce3").css({display:"none"});
			//4
			$(".pro_introduce5").css({display:"block"});
			//5
			$(".pro_introduce6").css({display:"none"});
			$(".serve_promise").css({display:"block"});
				
		}	
		if($(this).index() == 5){
			//0
			$(".pro_detailcon").css({display:"none"});
			//0
			$(".pro_ad1").css({display:"none"});
			//0
			$(".pro_introduce").css({display:"none"});
			//1
			$(".pro_introduce2").css({display:"none"});
			//2
			$(".pro_introduce3").css({display:"none"});
			//4
			$(".pro_introduce5").css({display:"none"});
			//5
			$(".pro_introduce6").css({display:"block"});
			$(".serve_promise").css({display:"block"});
				
		}
	});
	/* 套餐组合 */
	/* 评价导航点击样式 */
	$(".comment_tit li").click(function(){
		$(".comment_tit li").removeClass("lihover");
		$(this).addClass("lihover");	
	});
	/* 咨询点击样式 */
	$(".pro_questiontit li").click(function(){
		$(".pro_questiontit li").removeClass("lihover");
		$(this).addClass("lihover");	
	});
	/* 左侧排行榜分类 */
	$(".billboadgroup li").click(function(){
		$(".billboadgroup li").removeClass("lihover");
		$(this).addClass("lihover");
		$(".billboad_list").removeClass("current_list");
		//console.log($(".billboad_list li"));
		$(".billboad_list").eq($(this).index()).addClass("current_list");	
	});
	/* 商品图片 */
	$(".proimgs_list li").hover(
		function(){
			$(".proimgs_list li").removeClass("lihover");
			$(this).addClass("lihover");
			var imgSrc = $(this).children("img").attr("src");
			$(".left_con_img img").attr("src",""+ imgSrc +"");
		}
	);
	/* 表单选中状态 */
	$(".con_fun_compare input").change(function(){
		if($(".con_fun_compare input:checked").length >= 1 ){
			$(".con_fun_compare").addClass("con_fun_comparehover");
		}else{
			$(".con_fun_compare").removeClass("con_fun_comparehover");
		}	
	});
	/* 左侧按钮点击样式 */
	var left = 0;
	$(".proimgs_leftbut").click(function(){
		var left = Number($(".proimgs_list").css("left").split("px")[0]);
		//console.log(left);
		if($(".proimgs_list li:last").offset().left > 415){
			left -= 73;
			//console.log("left1:"+left);
			$(".proimgs_list").animate({left:""+ left +""},500);
			//console.log("left2:"+left);
		}
	});
	//console.log($(".proimgs_list li:eq(4)").offset());
	/* 右侧按钮点击样式 */
	var right = 75; 
	$(".proimgs_rightbut").click(function(){
			var right = $(".proimgs_list").css("left").split("px")[0];
			right = Number(right);
			if($(".proimgs_list li:first").offset().left < 0){
				//console.log($(".proimgs_list li:first").offset());
				right += 73;
				$(".proimgs_list").animate({left:""+ right +""},500);
			}
		//console.log($(".proimgs_list li:first").offset());
		left+=70;	
	});
	//选择地区
	$(".pro_address1").hover(
		function(){
			$(".address").css({display:"block"});	
		},
		function(){
			//$(".address").css({display:"none"});	
		}
	);
	//选择地区标题
	$(".addresstit li").click(function(){
		$(".addresstit li").removeClass("lihover");
		$(this).addClass("lihover");
	});
	//menu 跟随屏幕滚
	$.fn.smartFloat = function() {
		var position = function(element) {
		var top = element.position().top + 130, pos = element.css("position");
		
		$(window).scroll(function() {
			var scrolls = $(this).scrollTop();
			if (scrolls > top + 20) {
				if (window.XMLHttpRequest) {
					element.css({position: "fixed",top: 0});
					$(".pro_detailcon").css({marginTop:"40px"});
				} else {
					element.css({top: scrolls});
				}
				$(".pro_deta_list li a").attr("href","#pro");
				$(".shopcar_small").css({display:"block"});
			}else {
				element.css({position: "relative",top:"0px"});
				$(".pro_deta_list li a").attr("href","#this");
				$(".pro_detailcon").css({marginTop:"0"});
				$(".shopcar_small").css({display:"none"});
		}
		});
	};
	return $(this).each(function() {
	position($(this));
	});
	};
	//menu 跟随屏幕滚
	$.fn.smartFloat2 = function() {
		var position = function(element) {
		var top = element.position().top + 130, pos = element.css("position");
		
		$(window).scroll(function() {
			var scrolls = $(this).scrollTop();
			if (scrolls > top + 20) {
				if (window.XMLHttpRequest) {
					element.css({position: "fixed",top: 5});
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
	$("#gr1").smartFloat2();
	$(".pro_detailtit").smartFloat();
	//套餐切换
	$(".setmealcon").delegate(".setmealconlist a","mouseover",function(){
			$(this).parent().siblings().removeClass("currentconlist_2");
			$(this).parent().siblings().eq($(this).index()/2+1).addClass("currentconlist_2");
		});
});
