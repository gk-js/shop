// JavaScript Document
$(function(){
	$(".selectway").change(function(){
		var val = $(".selectway option:selected").text();
		if(val == "邮箱"){
			$("#email").css({display:"block"});	
			$("#phone").css({display:"none"});
		}
		if(val == "手机号"){
			$("#phone").css({display:"block"});
			$("#email").css({display:"none"});	
		}
			
	});	
})