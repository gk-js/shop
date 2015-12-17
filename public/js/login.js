// JavaScript Document
$(function(){
	$(".other:eq(1)").css({display:"none"});
	$(".loginwindow:eq(1)").css({display:"none"});
	$(".door:eq(0)").click(function(){
		$(".other:eq(0)").css({display:"none"});
		$(".loginwindow:eq(0)").css({display:"none"});
		$(".other:eq(1)").css({display:"block"});
		$(".loginwindow:eq(1)").css({display:"block"});
		$(".loginbutton").css({display:"none"});
		$("#doorbutton").css({display:"block"});
		$(".lefttit").text("门店会员登录");
	});
	$(".door:eq(1)").click(function(){
		$(".other:eq(1)").css({display:"none"});
		$(".loginwindow:eq(1)").css({display:"none"});
		$(".other:eq(0)").css({display:"block"});
		$(".loginwindow:eq(0)").css({display:"block"});
		$(".loginbutton").css({display:"none"});
		$("#userbutton").css({display:"block"});
		$(".lefttit").text("普通会员登录");
	});
	//表单非空验证
	$("#user .win_usename :text")
		.focus(function(){
			if($(this).val() == "请输入用户名" || $(this).val() == "用户名不能为空"){
				$(this).val("");
				$(this).css({color:"#2b2b2b"});	
			}
		})
		.blur(function(){
			var val  = $(this).val();
			if(val == ""){
				$(this).addClass("error");
				$(this).css({color:"#dcdcdc"});	
				$(this).siblings().addClass("inputtiterror");
				$(this).val("用户名不能为空");	
			}else if(val.reallength() == 0){
				$(this).addClass("error");
				$(this).css({color:"#dcdcdc"});	
				$(this).siblings().addClass("inputtiterror");
				$(this).val("用户名不能为空");
			}else{
				$(this).removeClass("error");
				$(this).siblings().removeClass("inputtiterror");
				$(this).css({color:"#2b2b2b"});		
			}
		});
	$("#user .win_password input")
		.focus(function(){
			$(this).css({color:"#2b2b2b"});
			$(this).siblings(".tips").text("");
		})
		.blur(function(){
			
		});
	$("#door .win_usename :text")
		.focus(function(){
			if($(this).val() == "请输入手机号码" || $(this).val() == "手机号码不能为空"){
				$(this).val("");
				$(this).css({color:"#2b2b2b"});	
			}
		})
		.blur(function(){
			var val  = $(this).val();
			if(val == ""){
				$(this).addClass("input_window2error");
				$(this).siblings().addClass("inputtit2error");
				$(this).val("手机号码不能为空");
				$(this).css({color:"#dcdcdc"});	
			}else if(val.reallength() == 0){
				$(this).addClass("input_window2error");
				$(this).siblings().addClass("inputtit2error");
				$(this).val("手机号码不能为空");
				$(this).css({color:"#dcdcdc"});
			}else{
				$(this).removeClass("input_window2error");
				$(this).siblings().removeClass("inputtit2error");
				$(this).css({color:"#2b2b2b"});	
			}
		});
	$("#door .win_password input").focus(function(){
			$(this).css({color:"#2b2b2b"});
		
	});
});