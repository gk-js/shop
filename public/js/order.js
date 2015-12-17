// JavaScript Document
$(function(){
	//console.log($(".billclass input[type='radio']"));
	$(".billclass input[type='radio']").change(function(){
		if($(this).val() == "bill1"){
			$(this).parent().parent().nextAll().addClass("current");		
			$(".newbill1").removeClass("current");	
		}
		if($(this).val() == "bill2"){
			$(this).parent().parent().nextAll().removeClass("current");	
			$(".newbill1").addClass("current");				
		}
	});
	//console.log($(".userinfo :radio"));
	$(".userinfo :radio").change(function(){
		if($(this).val() == "new"){
			$(".receivecon .newaddress").css({display:"block"});
			$("#save").css({display:"block"});	
		}else{
			$(".receivecon .newaddress").css({display:"none"});	
			$("#save").css({display:"none"});		
		}
	});
	//表单验证
	var flagName=flagAddress=flagPhone1=flagPhone2=flagEmail=false;
	$("#name")
		.focus(function(){
			if($(this).val() == "收货人姓名不能为空"   ){
				$(this).val("");
			}
		})
		.blur(function(){
			if($(this).val().isNull()){
				$(this).addClass("input_name_error").val("收货人姓名不能为空");
				flagName = false;
			}else{
				$(this).removeClass("input_name_error");	
				flagName = true;
			}	
		});
	$("#address")
		.focus(function(){
			if($(this).val() == "地址不能为空"){
				$(this).val("");	
			}			
		})
		.blur(function(){
			if($(this).val().isNull()){
				$(this).addClass("input_address_error").val("地址不能为空");
				flagAddress = false;	
			}else{
				$(this).removeClass("input_address_error");	
				flagAddress = true;
			}
		});
	$("#phone1")
		.focus(function(){
			//console.log($(this).val());	
			if($(this).val() == "手机号码格式错误"){
				$(this).val("");	
			}
		})
		.blur(function(){
			//console.log($(this).val().isMobile());
			if(!$(this).val().isMobile()){
				$(this).addClass("input_name_error").val("手机号码格式错误");	
				flagPhone1 = false;
			}else{
				$(this).removeClass("input_name_error");
				flagPhone1 = true;	
			}	
		});
	$("#phone2")
		.focus(function(){
			if($(this).val() == "电话号码格式错误"){
				$(this).val("");	
			}	
		})
		.blur(function(){
			if(!$(this).val().isTel()){
				$(this).addClass("input_name_error").val("电话号码格式错误");
				flagPhone2 = false;		
			}else{
				$(this).removeClass("input_name_error");
				flagPhone2 = true;		
			}
		});
	$("#email")
		.focus(function(){
			if($(this).val() == "邮箱格式错误"){
				$(this).val("");
			}
		})
		.blur(function(){
			if(!$(this).val().validateEmail()){
				$(this).addClass("input_name_error").val("邮箱格式错误");
				flagEmail = false;
			}else{
				$(this).removeClass("input_name_error");
				flagEmail = true;			
			}
		});
	//$(".span3").click(function(){
		//console.log($(this).text());
		//if($(this).text() == "删除"){
		//	$(this).parent().remove();
		//}	
	//})
	//点击删除
	$(".receivecon").delegate(".span3","click",function(){
		if($(this).text() == "删除"){
			$(this).parent().remove();
			//$(".newaddress").css({display:"none"});
			//$("#save").css({display:"none"});
		}		
	})
	//点击编辑
	$(".receivecon").delegate(".span3","click",function(){
		$(this).parent().find("input:radio").attr("checked","checked");
		if($(this).text() == "编辑"){
			//
			$(".receivecon .newaddress").css({display:"block"});
			$("#save").css({display:"block"});
			$("#name").val($(this).parent().find(".span2").text());
			$("#address").val($(this).parent().find(".info1").text().split(" ")[1]);
			if($(this).parent().find(".info2").text().isMobile()){
				$("#phone1").val($(this).parent().find(".info2").text());	
			}else{
				$("#phone2").val($(this).parent().find(".info2").text());	
			};
		}	
	});
	//点击保存时候的事件
	$("#save").click(function(){
		//保存新地址
		if($(this).parent().siblings().find("input:checked").val() == "new"){
			if($(".userinfo:not(:last)").size() > 4){
				$("#tishi").text("地址最多存五个");
			}else if(vaildate()){
			/*}else if($("#name").val().isNull()){
				$("#name").addClass("input_name_error").val("收货人姓名不能为空");
			}else if($("#address").val().isNull()){
				$("#address").addClass("input_address_error").val("地址不能为空");
			}else if(!$("#phone1").val().isMobile() && !$("#phone2").val().isTel()){
				if(!$("#phone1").val().isMobile()){
					$("#phone1").addClass("input_name_error").val("手机号码格式错误");
				}else{
					$("#phone2").addClass("input_name_error").val("电话号码格式错误");
				}
			}else if(!$("#email").val().validateEmail()){
				$(this).addClass("input_name_error").val("邮箱格式错误");
			}else if($("#s1 option:selected").text() == "省份" || $("#s2 option:selected").text() == "地级市" || $("#s3 option:selected").text() == "市、县级市、县"){
				alert("请选择省、市、县级市、县");
			}else{*/
				var name = $("#name").val();
				var address = $("#s1 option:selected").text()+$("#s2 option:selected").text()+$("#s3 option:selected").text()+" "+$("#address").val();
				var phone1 = $("#phone1").val(),phone2 = $("#phone2").val();
				if(phone1 == "手机号码格式错误"){
					phone1 = "";	
				}
				if(phone2 == "电话号码格式错误"){
					phone2 = "";	
				}
				var phone = phone1 +"  "+ phone2; 
				var html = "<div class='userinfo'><span class='span1'><input name='userinfo' type='radio' checked='checked' /></span><span class='span2'>"+ name +"</span><span class='info1'>"+ address +"</span><span class='info2'>"+ phone +"</span><a href='#this' class='span3'>删除</a><a href='#this' class='span3'>编辑</a></div>";
				$(".userinfo:not(:last)").last().after(html);
			}
			if($(".userinfo:not(:last)").size() < 4){
				$("#tishi").text("");
			}
		//修改旧地址
		}else{
			/*if($("#name").val().isNull()){
				$("#name").addClass("input_name_error").val("收货人姓名不能为空");
			}else if($("#address").val().isNull()){
				$("#address").addClass("input_address_error").val("地址不能为空");
			}else if(!$("#phone1").val().isMobile() && !$("#phone2").val().isTel()){
				if(!$("#phone1").val().isMobile()){
					$("#phone1").addClass("input_name_error").val("手机号码格式错误");
				}else{
					$("#phone2").addClass("input_name_error").val("电话号码格式错误");
				}
			}else if(!$("#email").val().validateEmail()){
				$(this).addClass("input_name_error").val("邮箱格式错误");
			}else if($("#s1 option:selected").text() == "省份" || $("#s2 option:selected").text() == "地级市" || $("#s3 option:selected").text() == "市、县级市、县"){
				alert("请选择省、市、县级市、县");
			}else{
				*/
			if(vaildate()){
				var name = $("#name").val();
				var address = $("#s1 option:selected").text()+$("#s2 option:selected").text()+$("#s3 option:selected").text()+" "+$("#address").val();
				var phone1 = $("#phone1").val(),phone2 = $("#phone2").val();
				if(phone1 == "手机号码格式错误"){
					phone1 = "";	
				}
				if(phone2 == "电话号码格式错误"){
					phone2 = "";	
				}
				var phone = phone1 +"  "+ phone2; 
				var html = "<div class='userinfo'><span class='span1'><input name='userinfo' type='radio' checked='checked' /></span><span class='span2'>"+ name +"</span><span class='info1'>"+ address +"</span><span class='info2'>"+ phone +"</span><a href='#this' class='span3'>删除</a><a href='#this' class='span3'>编辑</a></div>";
				$(this).parent().siblings().find("input:checked").parent().parent().replaceWith(html);	
			}	
		}
	});
	function vaildate(){
		if($("#name").val().isNull()){
			alert(1);
			$("#name").addClass("input_name_error").val("收货人姓名不能为空");
			alert("收货人姓名不能为空");
			return false;
		}else if($("#address").val().isNull()){
			$("#address").addClass("input_address_error").val("地址不能为空");
			return false;
		}else if(!$("#phone1").val().isMobile() && !$("#phone2").val().isTel()){
			if(!$("#phone1").val().isMobile()){
				$("#phone1").addClass("input_name_error").val("手机号码格式错误");
			}else{
				$("#phone2").addClass("input_name_error").val("电话号码格式错误");
			}
			return false;
		}else if(!$("#email").val().validateEmail()){
			$(this).addClass("input_name_error").val("邮箱格式错误");
			return false;
		}else if($("#s1 option:selected").text() == "省份" || $("#s2 option:selected").text() == "地级市" || $("#s3 option:selected").text() == "市、县级市、县"){
			alert("请选择省、市、县级市、县");
			return false;
		}else{
			return true;		
		}
	}
	//增值税发票验证
	$("#bill1 .input_name:eq(0)")
		.focus(function(){
			if($(this).val() == "单位名称不能为空"   ){
				$(this).val("");
			}
		})
		.blur(function(){
			if($(this).val().isNull()){
				$(this).addClass("input_name_error").val("单位名称不能为空");
			}else{
				$(this).removeClass("input_name_error");	
			}	
		});
	$("#bill1 .input_name:eq(1)")
		.focus(function(){
			if($(this).val() == "纳税人识别号不能为空"){
				$(this).val("");
			}
		})
		.blur(function(){
			if($(this).val().isNull()){
				$(this).addClass("input_name_error").val("纳税人识别号不能为空");
			}else{
				$(this).removeClass("input_name_error");	
			}	
		});
	$("#bill1 .input_name:eq(2)")
		.focus(function(){
			if($(this).val() == "注册地址不能为空"){
				$(this).val("");
			}
		})
		.blur(function(){
			if($(this).val().isNull()){
				$(this).addClass("input_name_error").val("注册地址不能为空");
			}else{
				$(this).removeClass("input_name_error");	
			}	
		});
	$("#bill1 .input_name:eq(3)")
		.focus(function(){
			if($(this).val() == "开户银行不能为空"){
				$(this).val("");
			}
		})
		.blur(function(){
			if($(this).val().isNull()){
				$(this).addClass("input_name_error").val("开户银行不能为空");
			}else{
				$(this).removeClass("input_name_error");	
			}	
		});
	$("#bill1 .input_name:eq(4)")
		.focus(function(){
			if($(this).val() == "银行账户不能为空"){
				$(this).val("");
			}
		})
		.blur(function(){
			if($(this).val().isNull()){
				$(this).addClass("input_name_error").val("银行账户不能为空");
			}else{
				$(this).removeClass("input_name_error");	
			}	
		});
	//发票信息验证
	$(".newbill1").find(".input_name")
		.focus(function(){
			if($(this).val() == "单位名称不能为空"){
				$(this).val("");
			}
		})
		.blur(function(){
			if($(this).val().isNull()){
				$(this).addClass("input_name_error").val("单位名称不能为空");
			}else{
				$(this).removeClass("input_name_error");	
			}		
		})
});
