// JavaScript Document
// JavaScript Document
$(function(){
		//顶部广告效果
		$(".closebutton").click(function(){$(".ad").hide()});
		//微博微信加关注
		$(".weixin a:eq(0)").hover(
			function(){
				$(".aim").css({display:"block"});	
			},
			function(){
				$(".aim").css({display:"none"});
			}	
		);
		$(".weixin a:eq(1)").hover(
			function(){
				$(".aim2").css({display:"block"});	
			},
			function(){
				$(".aim2").css({display:"none"});
			}	
		);
		//$(".imgpad:gt(0)").css("display","none");
		
		//2楼
		//切换城市效果
		$(".changgecityall").hover(
			function(){
				$(".changecity").css("display","block");
				$(".but1").addClass("but1hover");	
			},
			function(){
				$(".changecity").css("display","none");
				$(".but1").removeClass("but1hover");		
		});
		//分类导航栏目1效果
		$(".gro1con a:gt(3)").css({display:"none"});
		$(".group1:eq(0)").hover(
			//鼠标悬浮效果
			function(){
				$("#group1").css("z-index","900");
				$(".show:eq(0)").css("z-index","800");
				$(".show:eq(0)").css("display","block");
				$("#group1").css("z-index","900");
				$("#group1").removeClass("group1main");
				$("#group1").addClass("group1mainhover");
				$(".gro1tit").css({color:"#318700"}).addClass("gro1tithover");
				//	$(".gro1con").css({height:"70px"});	
				//}
				//$(".gro1con a:gt(3)").css({display:"block"});
				//var cilentHeight = $(".gro1tit").height() + $(".gro1con").height();
				//var cilentHeight2 = $(".gro1tit").height() + $(".gro1con").height() - 8;
				//if(cilentHeight > 81){
				//	$("#group1").css({height:""+ cilentHeight2 +"px"});
					//$(".group1").css({height:""+ cilentHeight +"px"});
				//}
			},
			//鼠标out效果
			function(){
				$(".show:eq(0)").css("display","none");
				$("#group1").css("z-index","700");
				$("#group1").removeClass("group1mainhover");
				$("#group1").addClass("group1main");
				$(".gro1tit").css({color:"#2b2b2b"}).removeClass("gro1tithover");
				//$("#group1").css({height:"73px"});
				//$(".gro1con a:gt(3)").css({display:"none"});
			}
		);
		//分类导航栏目2效果
		$(".gro2con a:gt(3)").css({display:"none"});
		$(".group2:eq(0)").hover(
			//鼠标悬浮效果
			function(){
				var heighttop = 0;
				$("#group2").css("z-index","900");
				$(".show:eq(1)").css("z-index","800");
				$(".show:eq(1)").css("display","block");
				$("#group2").removeClass("group2main");
				$("#group2").addClass("group2mainhover");
				$(".gro2tit").css({color:"#318700"}).addClass("gro2tithover");
				//if($(".gro2con a").length > 4){
				//	$(".gro2con").css({height:"70px"});	
				//}
				//$(".gro2con a:gt(3)").css({display:"block"});
				//高度样式
				//var cilentHeight = $(".gro2tit").height() + $(".gro2con").height();
				//var cilentHeight2 = $(".gro2tit").height() + $(".gro2con").height() - 10;
				//if(cilentHeight > $(".group2").height()){
				//	$("#group2").css({height:""+ cilentHeight2 +"px"});
					//$(".group2").css({height:""+ cilentHeight +"px"});
				//}
				//position样式
				var heighttop = $(".group1").height() + 5;
				$(".show:eq(1)").css("top","-"+ heighttop +"px");
				
			},
			//鼠标out效果
			function(){
				$(".show:eq(1)").css("display","none");
				$("#group2").css("z-index","700");
				$("#group2").addClass("group2main");
				$("#group2").removeClass("group2mainhover");
				$(".gro2tit").css({color:"#2b2b2b"}).removeClass("gro2tithover");
				//$("#group2").css({height:"72px"});
				//二级分类超出四个样式
				//$(".gro2con a:gt(3)").css({display:"none"});
			}
		);
		//分类导航栏目3效果
		$(".gro3con a:gt(3)").css({display:"none"});
		$(".group3:eq(0)").hover(
			//鼠标悬浮效果
			function(){
				var heighttop = 0;
				$("#group3").css("z-index","900");
				$(".show:eq(2)").css("z-index","800");
				$(".show:eq(2)").css("display","block");
				$("#group3").removeClass("group3main");
				$("#group3").addClass("group3mainhover");
				$(".gro3tit").css({color:"#318700"}).addClass("gro3tithover");
				var heighttop = $(".show:eq(2)").height()/2 - 40.5;
				$(".show:eq(2)").css("margin-top","-"+ heighttop +"px");
				//二级分类超出四个样式
				//if($(".gro3con a").length > 4){
				//	$(".gro3con").css({height:"70px"});	
				//}
				//$(".gro3con a:gt(3)").css({display:"block"});
				//高度样式
				//var cilentHeight = $(".gro3tit").height() + $(".gro3con").height();
				//var cilentHeight2 = $(".gro3tit").height() + $(".gro3con").height() - 7;
				//if(cilentHeight > $(".group3").height()){
				//	$("#group3").css({height:""+ cilentHeight2 +"px"});
					//$(".group3").animate({height:""+ cilentHeight +"px"},500);
				//}
			},
			//鼠标out效果
			function(){
				$(".show:eq(2)").css("display","none");
				$("#group3").css("z-index","700");
				$("#group3").addClass("group3main");
				$("#group3").removeClass("group3mainhover");
				$(".gro3tit").css({color:"#2b2b2b"}).removeClass("gro3tithover");
				//$("#group3").css({height:"72px"});
				//$(".group3").animate({height:"78px"},500);
				//$(".gro3con a:gt(3)").css({display:"none"});
			}
		);
		//分类导航栏目4效果
		$(".gro4con a:gt(3)").css({display:"none"});
		$(".group4:eq(0)").hover(
			//鼠标悬浮效果
			function(){
				var heighttop = 0;
				$("#group4").css("z-index","900");
				$(".show:eq(3)").css("z-index","800");
				$(".show:eq(3)").css("display","block");
				$("#group4").removeClass("group4main");
				$("#group4").addClass("group4mainhover");
				$(".gro4tit").css({color:"#318700"}).addClass("gro4tithover");
				var heighttop = $(".show:eq(3)").height()/2 - 30;
				$(".show:eq(3)").css("top","-240px");
				//二级分类导航效果
				//if($(".gro4con a").length > 4){
				//$(".gro4con").css({height:"70px"});	
				//}
				//$(".gro4con a:gt(3)").css({display:"block"});
				//高度样式
				//var cilentHeight = $(".gro4tit").height() + $(".gro4con").height();
				//var cilentHeight2 = $(".gro4tit").height() + $(".gro4con").height() - 7;
				//if(cilentHeight > $(".group4").height()){
					//$("#group4").css({height:""+ cilentHeight2 +"px"});
					//$(".group4").animate({height:""+ cilentHeight +"px"},500);
				//}
			},
			//鼠标out效果
			function(){
				$(".show:eq(3)").css("display","none");
				$("#group4").css("z-index","700");
				$("#group4").addClass("group4main");
				$("#group4").removeClass("group4mainhover");
				$(".gro4tit").css({color:"#2b2b2b"}).removeClass("gro4tithover");
				$("#group4").css({height:"72px"});
				//$(".group4").animate({height:"79px"},500);
				$(".gro4con a:gt(3)").css({display:"none"});
			}
		);
		//分类导航栏目5效果
		$(".gro5con a:gt(3)").css({display:"none"});
		$(".group5:eq(0)").hover(
			//鼠标悬浮效果
			function(){
				var heighttop = 0;
				$("#group5").css("z-index","900");
				$(".show:eq(4)").css("z-index","800");
				$(".show:eq(4)").css("display","block");
				$("#group5").removeClass("group5main");
				$("#group5").addClass("group5mainhover");
				$(".gro5tit").css({color:"#318700"}).addClass("gro5tithover");
				var heighttop = $(".show:eq(4)").height()/2 + 50;
				$(".show:eq(4)").css("top","-"+ heighttop +"px");
				//二级分类导航效果
				//if($(".gro5con a").length > 4){
				//	$(".gro5con").css({height:"80px"});	
				//}
				//$(".gro5con a:gt(3)").css({display:"block"});
				//高度样式
				//var cilentHeight = $(".gro5tit").height() + $(".gro5con").height();
				//var cilentHeight2 = $(".gro5tit").height() + $(".gro5con").height() - 7;
				//if(cilentHeight > $(".group5").height()){
					//$("#group5").css({height:""+ cilentHeight2 +"px"});
					//$(".group5").animate({height:""+ cilentHeight +"px"},500);
				//}
			},
			//鼠标out效果
			function(){
				heighttop = 0;
				$(".show:eq(4)").css("display","none");
				$("#group5").css("z-index","700");
				$("#group5").addClass("group5main");
				$("#group5").removeClass("group5mainhover");
				$(".gro5tit").css({color:"#2b2b2b"}).removeClass("gro5tithover");
				//$("#group5").css({height:"72px"});
				//$(".group5").animate({height:"79px"},500);
				//$(".gro5con a:gt(3)").css({display:"none"});
			}
		);
		//调整右侧菜单的高度
		function buttons(){
			var scrollHeight = $(document).scrollTop(); 
			if(scrollHeight > 620){
				$(".buttonslist").css({position:"fixed"}).css("right","-35px");	
			}else{
				$(".buttonslist").css({position:"absolute"}).css("top","20").css("right",   "-71px");
			};
		};
		 //菜单切换1
		 $("#1").css({fontWeight:"bold"});
		 $("#1").hover(
		 	function(){
				//先初始化隐藏两个div
				$(".dingdandetail").css({display:"none"});
				$(".publictel").css({display:"none"});
				//初始化字体样式
				$("#1").css({fontWeight:"normal"},{color:"666"});
				$("#2").css({fontWeight:"normal"},{color:"666"});
				//显示要显示的div
				$(".publictel").css({display:"block"});
				//初始化移除鼠标悬浮样式
				$("#1").removeClass("publichover");
				$("#2").removeClass("buttondingdanhover");
				$("#1").removeClass("public");
				
				//加上鼠标悬浮样式
				$("#1").addClass("publichover");
				$("#2").addClass("buttondingdan");
				$("#1").css({fontWeight:"bold"},{color:"#c9003d"});
			}
		 );
		 //菜单切换2
		 $("#2").hover(
		 	function(){
				//先初始化隐藏两个div
				$(".dingdandetail").css({display:"none"});
				$(".publictel").css({display:"none"});
				//初始化字体样式
				$("#1").css({fontWeight:"normal"});
				$("#2").css({fontWeight:"normal"});
				//显示要显示的div
				$(".dingdandetail").css({display:"block"});
				//初始化移除鼠标悬浮样式
				$("#1").removeClass("publichover");
				$("#2").removeClass("buttondingdanhover");
				$("#2").removeClass("buttondingdan");
				//加上鼠标悬浮样式
				$("#2").addClass("buttondingdanhover");
				$("#1").addClass("public");
				$("#2").css({fontWeight:"bold"});
			}
		 );
		 //菜单切换动画
		 var timer6 = null,timer7 = null;
		 $("#1").hover(
			function(){
    			timer6 =setTimeout(function(){$(".rollbg2").animate({left:"-2px"},"fast")
},200);
 		 	},
			function(){
				if(timer6){
					clearTimeout(timer6);	
				}		
			} 
 		 );
		 $("#2").hover(
			function(){
    			timer6 =setTimeout(function(){$(".rollbg2").animate({left:"114px"},"fast")},200);
			},
			function(){
				if(timer6){
					clearTimeout(timer6);	
				}		
			} 
 		 );
		//hot2 right 菜单切换
		//开启自动切换
		//表单操作
		$(".inputorder").focus(function(){
			if($(".inputorder").val() == "请输入订单号" || $(".inputorder").val() == ""){
				$(".inputorder").val("").css("color","#2b2b2b");
				//alert("a");
				//console.log($(".inputtel").val());
			}else{
				$(".inputorder").css("color","#2b2b2b");
			}
		});
		$(".inputorder").blur(function(){
			if($(".inputorder").val() == "请输入订单号" || $(".inputorder").val() == ""){
				$(".inputorder").val("请输入订单号");
				$(".inputorder").css("color","#676767");
			}
		});
		//表单获取交单清空表单文字
		$(".inputtel").focus(function(){
			if($(".inputtel").val() == "请输入手机或电话号" || $(".inputtel").val() == ""){
				$(".inputtel").val("").css("color","#2b2b2b");
				//alert("a");
				//console.log($(".inputtel").val());
			}else{
				$(".inputtel").css("color","#2b2b2b");
			}
			
		});
		//当表单失去焦点判断如果已经输入文字则不变，如果没有输入文字则变为默认值
		$(".inputtel").blur(function(){
			if($(".inputtel").val() == "请输入手机或电话号" || $(".inputtel").val() == ""){
				$(".inputtel").val("请输入手机或电话号");
				$(".inputtel").css("color","#676767");
			}
		});
		//搜索框表单
		 $(".input2").focus(function(){
			 if($(".input2").val() == "" || $(".input2").val() == "搜索厨卫百分百商品/品牌"){
				$(".input2").val("").css("color","#000");
			}else{
				$(".input2").css("color","#000");
			}	 
		});
		$(".input2").blur(function(){
			if($(".input2").val() == ""){
				$(".input2").val("搜索厨卫百分百商品/品牌");
				$(".input2").css("color","#bababa");
			}else{
				$(".input2").css("color","#000");	
			}
		});
		//底部log点击样式
		$(".logcon li").hover(
			function(){
				$(this).css({zIndex:"2"});
				$(this).find(".lihover").css("display", "block");
			},
			function(){
				$(this).css({zIndex:"1"});
				$(this).find(".lihover").css("display", "none");
			}
		)
		$(".logcon li:eq(0)").hover(
			function(){
				$(".logcon li:eq(0)").css({zIndex:"2"});
				$(".logohover:eq(0)").css("display", "block");
			},
			function(){
				$(".logcon li:eq(0)").css({zIndex:"1"});
				$(".logohover:eq(0)").css("display", "none");
			}
		);
		$(".logcon li:eq(1)").hover(
			function(){
				$(".logcon li:eq(1)").css({zIndex:"2"});
				$(".logohover:eq(1)").css("display", "block");
			},
			function(){
				$(".logcon li:eq(1)").css({zIndex:"1"});
				$(".logohover:eq(1)").css("display", "none");
			}
		);
		$(".logcon li:eq(2)").hover(
			function(){
				$(".logcon li:eq(2)").css({zIndex:"2"});
				$(".logohover:eq(2)").css("display", "block");
			},
			function(){
				$(".logcon li:eq(2)").css({zIndex:"1"});
				$(".logohover:eq(2)").css("display", "none");
			}
		);
		$(".logcon li:eq(3)").hover(
			function(){
				$(".logcon li:eq(3)").css({zIndex:"2"});
				$(".logohover:eq(3)").css("display", "block");
			},
			function(){
				$(".logcon li:eq(3)").css({zIndex:"1"});
				$(".logohover:eq(3)").css("display", "none");
			}
		);
		$(".logcon li:eq(4)").hover(
			function(){
				$(".logcon li:eq(4)").css({zIndex:"2"});
				$(".logohover:eq(4)").css("display", "block");
			},
			function(){
				$(".logcon li:eq(4)").css({zIndex:"1"});
				$(".logohover:eq(4)").css("display", "none");
			}
		);
		$(".logcon li:eq(5)").hover(
			function(){
				$(".logcon li:eq(5)").css({zIndex:"2"});
				$(".logohover:eq(5)").css("display", "block");
			},
			function(){
				$(".logcon li:eq(5)").css({zIndex:"1"});
				$(".logohover:eq(5)").css("display", "none");
			}
		);
		$(".logcon li:eq(6)").hover(
			function(){
				$(".logcon li:eq(6)").css({zIndex:"2"});
				$(".logohover:eq(6)").css("display", "block");
			},
			function(){
				$(".logcon li:eq(6)").css({zIndex:"1"});
				$(".logohover:eq(6)").css("display", "none");
			}
		);
		//下半行样式
		$(".logcon li:eq(7)").hover(
			function(){
				//$(".logcon li img:eq(0)").css("display","none");
				$(".logohover2:eq(0)").css("display", "block");
			},
			function(){
				$(".logohover2:eq(0)").css("display", "none");
			}
		);
		$(".logcon li:eq(8)").hover(
			function(){
				//$(".logcon li img:eq(0)").css("display","none");
				$(".logohover2:eq(1)").css("display", "block");
			},
			function(){
				$(".logohover2:eq(1)").css("display", "none");
			}
		);
		$(".logcon li:eq(9)").hover(
			function(){
				//$(".logcon li img:eq(0)").css("display","none");
				$(".logohover2:eq(2)").css("display", "block");
			},
			function(){
				$(".logohover2:eq(2)").css("display", "none");
			}
		);
		$(".logcon li:eq(10)").hover(
			function(){
				//$(".logcon li img:eq(0)").css("display","none");
				$(".logohover2:eq(3)").css("display", "block");
			},
			function(){
				$(".logohover2:eq(3)").css("display", "none");
			}
		);
		$(".logcon li:eq(11)").hover(
			function(){
				//$(".logcon li img:eq(0)").css("display","none");
				$(".logohover2:eq(4)").css("display", "block");
			},
			function(){
				$(".logohover2:eq(4)").css("display", "none");
			}
		);$(".logcon li:eq(12)").hover(
			function(){
				//$(".logcon li img:eq(0)").css("display","none");
				$(".logohover2:eq(5)").css("display", "block");
			},
			function(){
				$(".logohover2:eq(5)").css("display", "none");
			}
		);$(".logcon li:eq(13)").hover(
			function(){
				//$(".logcon li img:eq(0)").css("display","none");
				$(".logohover2:eq(6)").css("display", "block");
			},
			function(){
				$(".logohover2:eq(6)").css("display", "none");
			}
		);
		//把最后一个导航栏背景隐藏；
		$(".rightnav li:last").css({background:"none"});
		//导航栏背景过渡效果
		var timer = null,timer2 = null,timer3 = null,timer4 = null,timer5 = null;
		$(".rightnav li a:eq(0)").css({color:"#c9003d"});
		$(".rightnav li:eq(0)").hover(
			function(){
				timer=setTimeout(function(){
					$(".rollbg").animate({left:"0"},"fast");
					//格式化样式
					//$(".rightnav li a").css({color:"#666"},{fontWeight:"normal"});
					$(".rightnav li a").css({color:"#666"});
					$(".rightnav li").removeClass("lihover");
					$(".rightnav li:eq(0)").addClass("lihover");
					$(".rightnav li a:eq(0)").css({color:"#c9003d"});
					},200);
			},
			function(){
				if(timer){
					clearTimeout(timer);	
				}	
			}
 		);
		$(".rightnav li:eq(1)").hover(
			function(){
				timer2 = setTimeout(function(){
					$(".rollbg").animate({left:"91px"},"fast");
					$(".rightnav li a").css({color:"#666"});
					$(".rightnav li").removeClass("lihover");
					$(".rightnav li:eq(1)").addClass("lihover");
					$(".rightnav li a:eq(1)").css({color:"#c9003d"});
					},200);
 		 	},
			function(){
				if(timer2){
					clearTimeout(timer2);	
				}		
			}
		 );
		$(".rightnav li:eq(2)").hover(
			function(){
				timer3 = setTimeout(function(){
					$(".rollbg").animate({left:"180px"},"fast");
					$(".rightnav li").removeClass("lihover");
					$(".rightnav li a").css({color:"#666"});
					$(".rightnav li:eq(2)").addClass("lihover");
					$(".rightnav li a:eq(2)").css({color:"#c9003d"});
},200);
 		 	},
			function(){
				if(timer3){
					clearTimeout(timer3);	
				}		
			} 
 		 );
		$(".rightnav li:eq(3)").hover(
			function(){
    			timer4 =setTimeout(function(){ 
					$(".rollbg").animate({left:"269px"},"fast");
					$(".rightnav li a").css({color:"#666"});
					$(".rightnav li").removeClass("lihover");
					$(".rightnav li:eq(3)").addClass("lihover");
					$(".rightnav li a:eq(3)").css({color:"#c9003d"});
},200);
 		 	},
			function(){
				if(timer4){
					clearTimeout(timer4);	
				}		
			} 
		 );
		$(".rightnav li:eq(4)").hover(
			function(){
    			timer5 =setTimeout(function(){
					$(".rollbg").animate({left:"358px"},"fast");
					$(".rightnav li a").css({color:"#666"});
					$(".rightnav li").removeClass("lihover");
					$(".rightnav li:eq(4)").addClass("lihover");
					$(".rightnav li a:eq(4)").css({color:"#c9003d"});
},200);
 		 	},
			function(){
				if(timer5){
					clearTimeout(timer5);	
				}		
			} 
 		 );
		
		//每周推荐切换菜单
		//默认状态下显示第一个
		$(".rightcon1:gt(0)").css({display:"none"});
		//鼠标悬浮第一个菜单的样式
		$(".rightnav li:eq(0)").hover(
			function(){
				//清空所有显示
				$(".rightcon1").css({display:"none"});
				//显示第一个
				$(".rightcon1:eq(0)").css({display:"block"});
			}
		);
		$(".rightnav li:eq(1)").hover(
			function(){
				$(".rightcon1").css({display:"none"});
				$(".rightcon1:eq(1)").css({display:"block"});
			}
		);
		$(".rightnav li:eq(2)").hover(
			function(){
				$(".rightcon1").css({display:"none"});
				$(".rightcon1:eq(2)").css({display:"block"});
			}
		);
		$(".rightnav li:eq(3)").hover(
			function(){
				$(".rightcon1").css({display:"none"});
				$(".rightcon1:eq(3)").css({display:"block"});
			}
		);
		$(".rightnav li:eq(4)").hover(
			function(){
				$(".rightcon1").css({display:"none"});
				$(".rightcon1:eq(4)").css({display:"block"});
			}
		);
		//点击出现更多链接
		$(".friendlinkdetail li:gt(13):not(:last)").css({display:"none"});
		$(".morelink").click(function(){
			if($(".friendlink li:eq(14)").css("display") == "none"){
				$(".friendlink li").css({display:"block"});	
				$(".morelink").addClass("morelinkhover");
			}else{
				$(".friendlink li:gt(13):not(:last)").css({display:"none"});
				$(".morelink").removeClass("morelinkhover");	
			}
		});
		//选择城市
		var city;
		function choiceCitys(){
			$(".pad select>option").each(function(){
				if($(this).attr('selected') == true){
					city = $(this).text();		
				}
			});
		}
		$(".pad").change(function(){
			choiceCitys();
		});
		
		//鼠标悬浮到字母A
		//console.log($(".citys li").height());
		/*$(".citylist2 li:eq(0)").mouseover(function(){
			$(".citys").animate({scrollTop: 0},500);	
		});
		$(".citylist2 li:eq(1)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()},500);
		});
		$(".citylist2 li:eq(2)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*2},500);	
		});*/
		/*$(".citylist2 li:eq(3)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*4},500);
		});
		$(".citylist2 li:eq(4)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*5},500);
		});
		$(".citylist2 li:eq(5)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*6},500);
		});
		$(".citylist2 li:eq(6)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*7},500);
		});
		$(".citylist2 li:eq(7)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*8},500);
		});
		$(".citylist2 li:eq(8)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*9},500);
		});
		$(".citylist2 li:eq(9)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*10},500);
		});
		$(".citylist2 li:eq(10)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*11},500);
		});
		$(".citylist2 li:eq(11)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*12},500);
		});
		$(".citylist2 li:eq(12)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*13},500);
		});
		$(".citylist2 li:eq(13)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*14},500);
		});
		$(".citylist2 li:eq(14)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*15},500);
		});
		$(".citylist2 li:eq(15)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*16},500);
		});
		$(".citylist2 li:eq(16)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*17},500);
		});
		$(".citylist2 li:eq(17)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*18},500);
		});
		$(".citylist2 li:eq(18)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*19},500);
		});
		$(".citylist2 li:eq(19)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*20},500);
		});
		$(".citylist2 li:eq(20)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*21},500);
		});
		$(".citylist2 li:eq(21)").mouseover(function(){
			$(".citys").animate({scrollTop: $(".citys li").height()*22},500);
		});*/
		//顶栏菜单=
		$(".menulist li").eq(0).hover(
			function(){
				$(".orderservices").css({display:"block"});	
			},
			function(){
				$(".orderservices").css({display:"none"});
			}
		);
		$(".menulist li").eq(1).hover(
			function(){
				$(".specialserivces").css({display:"block"});	
			},
			function(){
				$(".specialserivces").css({display:"none"});
			}
		);	
		$(".menulist li").eq(2).hover(
			function(){
				$(".business").css({display:"block"});	
			},
			function(){
				$(".business").css({display:"none"});
			}
		);$(".menulist li").eq(3).hover(
			function(){
				$(".client").css({display:"block"});	
			},
			function(){
				$(".client").css({display:"none"});
			}
		);$(".menulist li").eq(4).hover(
			function(){
				$(".helpcenter").css({display:"block"});	
			},
			function(){
				$(".helpcenter").css({display:"none"});
			}
		);$(".menulist li").eq(5).hover(
			function(){
				$(".collect").css({display:"block"});	
			},
			function(){
				$(".collect").css({display:"none"});
			}
		);
		
		//点击进入触发写入事情
		$(".but4").click(function(){
			$(".city").text(locaCity+"站");	
		});
		//点击切换城市
		function changeCity(locaCity){
			$(".city").text(locaCity+"站");		
		}
		$(".citys li a").click(function(){
			changeCity($(this).text());	
		});
		$(".txt2").click(function(){
			$(".city").text($(this).text());
		});
		$(".citylist li a").click(function(){
			changeCity($(this).text());	
		});
		//微信微博二维码
		$(".codetwo").hover(
			function(){
				$(".codetwomian").css({display:"block"});	
			},
			function(){
				$(".codetwomian").css({display:"none"});	
			}
		);
		$(".microBlog").hover(
			function(){
				$(".microBlogmian").css({display:"block"});	
			},
			function(){
				$(".microBlogmian").css({display:"none"});	
			}
		);
		//右侧导航样式
		$(".weblist2 li:eq(0)").hover(
			function(){
				$(".weblist2 li a:eq(0)").css("color","#a7042a");
			},
			function(){
				$(".weblist2 li a:eq(0)").css("color","#fff");	
			}
		);
		$(".weblist2 li:eq(1)").hover(
			function(){
				$(".weblist2 li a:eq(1)").css("color","#a7042a");
			},
			function(){
				$(".weblist2 li a:eq(1)").css("color","#fff");	
			}
		);
		$(".weblist2 li:eq(2)").hover(
			function(){
				$(".weblist2 li a:eq(2)").css("color","#a7042a");
			},
			function(){
				$(".weblist2 li a:eq(2)").css("color","#fff");	
			}
		);
		//二级页导航栏效果
		$(".suball").hover(
			function(){
				$(".group").css({display:"block"});	
				$(".allpro").addClass("allpro2");
			},
			function(){
				$(".group").css({display:"none"});
				$(".allpro").removeClass("allpro2");	
			}
		);
		$(".shopcar").hover(
			function(){
				$(".shopcarmain").css({display:"block"});	
			},
			function(){
				$(".shopcarmain").css({display:"none"});
			}
		);
	//订单页面菜单展开 收缩
	$(".mycwcon .tit").click(function(){
		if($(this).next().css("display") == "none"){
			$(this).next().slideDown(200);
		}else{
			$(this).next().slideUp(200);	
		}
	})
	//顶级关闭收货地区
	$(".close_place").click(function(){
		$(".address").css({display:"none"});	
	})
	//商品切换
	$(".floorbrand li:not('.m-li')").mouseover(function(){
		$(".m-li").stop(true).animate({left:""+ $(this).outerWidth(true)*$(this).index() +""}, "fast").animate({left:""+ $(this).outerWidth(true)*$(this).index() +""}, "fast");
		$(this).parent().siblings(".floorcon").find(".pro-list").removeClass("curr").eq(""+ $(this).index() +"").addClass("curr");
	});
	//顶部商品切换
	$(".hot2righttit li:not('.m-li')").mouseover(function(){
		$(".m-li").stop(true).animate({left:""+ $(this).outerWidth(true)*$(this).index() - 25 +""}, "fast").animate({left:""+ $(this).outerWidth(true)*$(this).index() - 25 +""}, "fast");
		$(this).parent().siblings(".hot2rightcons").find(".hot2rightcon").removeClass("curr").eq(""+ $(this).index() +"").addClass("curr");
	});
});