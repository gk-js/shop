// JavaScript Document
$(function(){
	//用户名
	$("#name :text")
		.focus(function(){
			if($(this).val() == "用户名/邮箱/手机号"){
				$(this).val("").css({color:"#2b2b2b"});
			}
		})
		.blur(function(){
			var val = $(this).val();
			//console.log(val);
			if(val == ""){
				$("#name").find(".re_namer").addClass("re_namer_error");
				$("#name").find("input").css("border","1px solid #c9003d");
				$(this).val("").css({color:"#dcdcdc"});
				$("#name").find(".re_nametips").text("用户名不能为空");
				return false;	
			}else if(val.isMobile()){
				$("#name").find(".re_nametips").text("");
				$("#name").find(".re_namer").removeClass("re_namer_error").addClass("re_namer_right");
				$("#name").find("input").css("border","1px solid #dcdcdc");
				return true;
			}else if(val.validateEmail()){
				$("#name").find(".re_nametips").text("");
				$("#name").find(".re_namer").removeClass("re_namer_error").addClass("re_namer_right");
				$("#name").find("input").css("border","1px solid #dcdcdc");
				return true;
			}else if(isRegisterUserName(val)){
				$("#name").find(".re_nametips").text("");
				$("#name").find(".re_namer").removeClass("re_namer_error").addClass("re_namer_right");
				$("#name").find("input").css("border","1px solid #dcdcdc");
				return true;
			}else{
				$("#name").find(".re_nametips").text("用户名应该为手机号/邮箱/字母开头6-16位数字字母组合");
				$("#name").find(".re_namer").addClass("re_namer_error");
				$("#name").find("input").css("border","1px solid #c9003d");
				return false;
			}
			if(val == ""){
				console.log("123");
				$(this).val("用户名/邮箱/手机号").css({color:"#dcdcdc"});
				$("#name").find(".re_nametips").text("用户名不能为空");
				return false;	
			}
		});
	//密码	
	$("#password :text")
		.focus(function(){
			$(this).attr("type","password");
			if($(this).val() == "6-16位密码"){
				$(this).val("").css({color:"#2b2b2b"});
			}	
		})
		.blur(function(){
			var val = $(this).val().reallength();
			if(val > 16){
				$("#password").find(".re_nametips").text("您输入密码长度大于16位");
				$("#password").find(".re_namer").addClass("re_namer_error");
				$("#password").find("input").css("border","1px solid #c9003d");
				return false;
			}else if(val < 6){
				$("#password").find(".re_nametips").text("您输入密码长度小于6位");
				$("#password").find(".re_namer").addClass("re_namer_error");
				$("#password").find("input").css("border","1px solid #c9003d");
				return false;
			}else {
				$("#password").find(".re_nametips").text("");
				$("#password").find(".re_namer").removeClass("re_namer_error").addClass("re_namer_right");
				$("#password").find("input").css("border","1px solid #dcdcdc");
				return true;
			}	
	});
	//重复密码
	$("#repassword :text")
		.focus(function(){
			$(this).attr("type","password");
			//console.log($(this).val());
			if($(this).val() == "6-16位密码"){
				$(this).val("").css({color:"#2b2b2b"});
			}	
		})
		.blur(function(){
			var password = $("#password input").val();
			var repassword = $("#repassword input").val();
			var val = $(this).val().reallength();
			console.log(password+""+repassword);
			if(val > 16){
				$("#repassword").find(".re_nametips").text("您输入密码长度大于16位");
				$("#repassword").find(".re_namer").addClass("re_namer_error");
				$("#repassword").find("input").css("border","1px solid #c9003d");
				return false;
			}else if(val < 6){
				$("#repassword").find(".re_nametips").text("您输入密码长度小于6位");
				$("#repassword").find(".re_namer").addClass("re_namer_error");
				$("#repassword").find("input").css("border","1px solid #c9003d");
				return false;
			}else if(password !== repassword ){
				$("#repassword").find(".re_nametips").text("两次输入的密码不一致");
				$("#repassword").find(".re_namer").addClass("re_namer_error");
				$("#repassword").find("input").css("border","1px solid #c9003d");
				$("#password").find(".re_namer").addClass("re_namer_error");
				$("#password").find("input").css("border","1px solid #c9003d");
				return false;
			}else{
				$("#repassword").find(".re_nametips").text("");
				$("#repassword").find(".re_namer").removeClass("re_namer_error").addClass("re_namer_right");
				$("#repassword").find("input").css("border","1px solid #dcdcdc");
				return true;
			}
	});
	//邮箱
	$("#email :text")
		.focus(function(){
			if($(this).val() == "邮箱地址"){
				$(this).val("").css({color:"#2b2b2b"});	
			}
		})
		.blur(function(){
			var val = $(this).val();
			if(val.validateEmail()){
				$("#email").find(".re_nametips").text("");
				$("#email").find(".re_namer").removeClass("re_namer_error").addClass("re_namer_right");
				$("#email").find("input").css("border","1px solid #dcdcdc");
				return true;	
			}else{
				$("#email").find(".re_nametips").text("您的邮箱格式输入不正确");
				$("#email").find(".re_namer").addClass("re_namer_error");
				$("#email").find("input").css("border","1px solid #c9003d");
				return false;	
			}
		});
	
});