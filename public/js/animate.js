// JavaScript Document
// JavaScript Document
//一楼导航动画
$(function(){
/*	$("#floor1img li:eq(1)").css({left:"564px"});
	$("#floor1img li:eq(0)").css({zIndex:"20"});
	var len2 = $("#floor1img li").length;
	var index2 = 0;
	var changeTimer2;
	var iconIndex2 = 0;
	$("#icon1 .leftred2").eq(0).css("background-image","url(images/bg_leftred.png)");
	$("#icon1 .centerred2").eq(0).css("background","#c9003b");
	$("#icon1 .rightred2").eq(0).css("background-image","url(images/bg_rightred.png)");
	//图片切换
	function changeImg2(index){ 
		$('#floor1img li').each(function(i){
				if($(this).index("#floor1img li") == index){
					if(index == 2){
						//console.log("小图：" + index)
					
						//主图切换
						$(this).animate({left:"-564px"},"slow");
						$('#floor1img li:eq(0)').animate({left:"0px"},"slow");
						//小图标大小
						//小图标样式
						$("#icon1 .leftred2").eq(0).css("background-image","url(images/bg_leftred.png)");
						$("#icon1 .centerred2").eq(0).css("background","#c9003b");
						$("#icon1 .rightred2").eq(0).css("background-image","url(images/bg_rightred.png)");
						//设置变小图标之后的样式
						$("#icon1 .leftred2").eq(2).css("background-image","url(images/bg_leftred2.png)");
						$("#icon1 .centerred2").eq(2).css("background","#dcdcdc");
						$("#icon1 .rightred2").eq(2).css("background-image","url(images/bg_rightred2.png)");
					}else{
						//主图切换
						//console.log(index);
						$(this).animate({left:"-564px"},"slow");
						var nextPic = index + 1;
						$('#floor1img li:eq('+nextPic+')').animate({left:"0px"},"slow");
						//$(this).css({left:"564px"});
						iconIndex = index;
						$("#icon1 .leftred2").eq(iconIndex + 1).css("background-image","url(images/bg_leftred.png)");
						$("#icon1 .centerred2").eq(iconIndex + 1).css("background","#c9003b");
						$("#icon1 .rightred2").eq(iconIndex + 1).css("background-image","url(images/bg_rightred.png)");
						//小图标变小
						//小图标样式
						$("#icon1 .leftred2").eq(iconIndex).css("background-image","url(images/bg_leftred2.png)");
						$("#icon1 .centerred2").eq(iconIndex).css("background","#dcdcdc");
						$("#icon1 .rightred2").eq(iconIndex).css("background-image","url(images/bg_rightred2.png)");
					}
				}else{
					$(this).css({left:"564px"});
					
				}
			});		
		}
		//图片自动轮播
    	changeTimer2 = setInterval(
					function(){
						if(index2 > len2-1){
						index2 = 0;
					
					} 
					changeImg2(index2);
			    	index2 ++;
				}
		,3000);
		//鼠标悬浮样式按钮1
		$("#icon1 li:eq(0)").hover(
			function(){
				clearInterval(changeTimer2);
				changeImg2(2);	
			},
			function(){
				changeTimer2 = setInterval(
					function(){
						if(index2 >len2-1){
						index2 = 0;
						} 
						changeImg2(index2);
			    		index2 ++;
					}
				,3000);
			}
		);
		//鼠标悬浮样式按钮2
		$("#icon1 li:eq(1)").hover(
			function(){
				clearInterval(changeTimer2);
				changeImg2(0);	
			},
			function(){
				changeTimer2 = setInterval(
					function(){
						if(index2 >len2-1){
						index2 = 0;
					
						} 
						changeImg2(index2);
			    		index2 ++;
					}
				,3000);
			}
		);
		//鼠标悬浮样式按钮3
		$("#icon1 li:eq(2)").hover(
			function(){
				clearInterval(changeTimer2);
				changeImg2(1);	
			},
			function(){
				changeTimer2 = setInterval(
					function(){
						if(index2 >len2-1){
						index2 = 0;
					
						} 
						changeImg2(index2);
			    		index2 ++;
					}
				,3000);
			}
		);
	//2楼导航动画
	$("#floor2img li:eq(1)").css({left:"564px"});
	$("#floor2img li:eq(0)").css({zIndex:"20"});
	var len3 = $("#floor2img li").length;
	var index3 = 0;
	var changeTimer3;
	var iconIndex3 = 0;
	$("#icon2 .leftred2").eq(0).css("background-image","url(images/bg_leftred.png)");
	$("#icon2 .centerred2").eq(0).css("background","#c9003b");
	$("#icon2 .rightred2").eq(0).css("background-image","url(images/bg_rightred.png)");
	//图片切换
	function changeImg3(index){ 
		$('#floor2img li').each(function(i){
				if($(this).index("#floor2img li") == index){
					if(index == 2){
						//console.log("小图：" + index)
					
						//主图切换
						$(this).animate({left:"-564px"},"slow");
						$('#floor2img li:eq(0)').animate({left:"0px"},"slow");
						//小图标大小
						//小图标样式
						$("#icon2 .leftred2").eq(0).css("background-image","url(images/bg_leftred.png)");
						$("#icon2 .centerred2").eq(0).css("background","#c9003b");
						$("#icon2 .rightred2").eq(0).css("background-image","url(images/bg_rightred.png)");
						//设置变小图标之后的样式
						$("#icon2 .leftred2").eq(2).css("background-image","url(images/bg_leftred2.png)");
						$("#icon2 .centerred2").eq(2).css("background","#dcdcdc");
						$("#icon2 .rightred2").eq(2).css("background-image","url(images/bg_rightred2.png)");
					}else{
						//主图切换
						//console.log(index);
						$(this).animate({left:"-564px"},"slow");
						var nextPic = index + 1;
						$('#floor2img li:eq('+nextPic+')').animate({left:"0px"},"slow");
						//$(this).css({left:"564px"});
						iconIndex = index;
						$("#icon2 .leftred2").eq(iconIndex + 1).css("background-image","url(images/bg_leftred.png)");
						$("#icon2 .centerred2").eq(iconIndex + 1).css("background","#c9003b");
						$("#icon2 .rightred2").eq(iconIndex + 1).css("background-image","url(images/bg_rightred.png)");
						//小图标变小
						//小图标样式
						$("#icon2 .leftred2").eq(iconIndex).css("background-image","url(images/bg_leftred2.png)");
						$("#icon2 .centerred2").eq(iconIndex).css("background","#dcdcdc");
						$("#icon2 .rightred2").eq(iconIndex).css("background-image","url(images/bg_rightred2.png)");
					}
				}else{
					$(this).css({left:"564px"});
					
				}
			});		
		}
		//图片自动轮播
    	changeTimer3 = setInterval(
					function(){
						if(index3 > len3-1){
						index3 = 0;
					
					} 
					changeImg3(index3);
			    	index3 ++;
				}
		,3000);
		//鼠标悬浮样式按钮1
		$("#icon2 li:eq(0)").hover(
			function(){
				clearInterval(changeTimer3);
				changeImg3(2);	
			},
			function(){
				changeTimer3 = setInterval(
					function(){
						if(index3 >len3-1){
						index3 = 0;
						} 
						changeImg3(index3);
			    		index3 ++;
					}
				,3000);
			}
		);
		//鼠标悬浮样式按钮2
		$("#icon2 li:eq(1)").hover(
			function(){
				clearInterval(changeTimer3);
				changeImg3(0);	
			},
			function(){
				changeTimer3 = setInterval(
					function(){
						if(index3 >len3-1){
						index3 = 0;
					
						} 
						changeImg3(index3);
			    		index3 ++;
					}
				,3000);
			}
		);
		//鼠标悬浮样式按钮3
		$("#icon2 li:eq(2)").hover(
			function(){
				clearInterval(changeTimer3);
				changeImg3(1);	
			},
			function(){
				changeTimer3 = setInterval(
					function(){
						if(index3>len3-1){
						index3 = 0;
					
						} 
						changeImg3(index3);
			    		index3 ++;
					}
				,3000);
			}
		);
		//3楼动画
		$("#floor3img li:eq(1)").css({left:"564px"});
	$("#floor3img li:eq(0)").css({zIndex:"20"});
	var len4 = $("#floor3img li").length;
	var index4 = 0;
	var changeTimer4;
	var iconIndex4 = 0;
	$("#icon3 .leftred2").eq(0).css("background-image","url(images/bg_leftred.png)");
	$("#icon3 .centerred2").eq(0).css("background","#c9003b");
	$("#icon3 .rightred2").eq(0).css("background-image","url(images/bg_rightred.png)");
	//图片切换
	function changeImg4(index){ 
		$('#floor3img li').each(function(i){
				if($(this).index("#floor3img li") == index){
					if(index == 2){
						//console.log("小图：" + index)
					
						//主图切换
						$(this).animate({left:"-564px"},"slow");
						$('#floor3img li:eq(0)').animate({left:"0px"},"slow");
						//小图标大小
						//小图标样式
						$("#icon3 .leftred2").eq(0).css("background-image","url(images/bg_leftred.png)");
						$("#icon3 .centerred2").eq(0).css("background","#c9003b");
						$("#icon3 .rightred2").eq(0).css("background-image","url(images/bg_rightred.png)");
						//设置变小图标之后的样式
						$("#icon3 .leftred2").eq(2).css("background-image","url(images/bg_leftred2.png)");
						$("#icon3 .centerred2").eq(2).css("background","#dcdcdc");
						$("#icon3 .rightred2").eq(2).css("background-image","url(images/bg_rightred2.png)");
					}else{
						//主图切换
						//console.log(index);
						$(this).animate({left:"-564px"},"slow");
						var nextPic = index + 1;
						$('#floor3img li:eq('+nextPic+')').animate({left:"0px"},"slow");
						//$(this).css({left:"564px"});
						iconIndex = index;
						$("#icon3 .leftred2").eq(iconIndex + 1).css("background-image","url(images/bg_leftred.png)");
						$("#icon3 .centerred2").eq(iconIndex + 1).css("background","#c9003b");
						$("#icon3 .rightred2").eq(iconIndex + 1).css("background-image","url(images/bg_rightred.png)");
						//小图标变小
						//小图标样式
						$("#icon3 .leftred2").eq(iconIndex).css("background-image","url(images/bg_leftred2.png)");
						$("#icon3 .centerred2").eq(iconIndex).css("background","#dcdcdc");
						$("#icon3 .rightred2").eq(iconIndex).css("background-image","url(images/bg_rightred2.png)");
					}
				}else{
					$(this).css({left:"564px"});
					
				}
			});		
		}
		//图片自动轮播
    	changeTimer4 = setInterval(
					function(){
						if(index4 > len4-1){
						index4 = 0;
					
					} 
					changeImg4(index4);
			    	index4 ++;
				}
		,3000);
		//鼠标悬浮样式按钮1
		$("#icon3 li:eq(0)").hover(
			function(){
				clearInterval(changeTimer4);
				changeImg4(2);	
			},
			function(){
				changeTimer4 = setInterval(
					function(){
						if(index4 >len4-1){
						index4 = 0;
						} 
						changeImg4(index4);
			    		index4 ++;
					}
				,3000);
			}
		);
		//鼠标悬浮样式按钮2
		$("#icon3 li:eq(1)").hover(
			function(){
				clearInterval(changeTimer4);
				changeImg4(0);	
			},
			function(){
				changeTimer4 = setInterval(
					function(){
						if(index4 >len4-1){
						index4 = 0;
					
						} 
						changeImg4(index4);
			    		index4 ++;
					}
				,3000);
			}
		);
		//鼠标悬浮样式按钮3
		$("#icon3 li:eq(2)").hover(
			function(){
				clearInterval(changeTimer4);
				changeImg4(1);	
			},
			function(){
				changeTimer4 = setInterval(
					function(){
						if(index4>len4-1){
						index4 = 0;
					
						} 
						changeImg4(index4);
			    		index4 ++;
					}
				,3000);
			}
		);
		//4楼动画
	$("#floor4img li:eq(1)").css({left:"564px"});
	$("#floor4img li:eq(0)").css({zIndex:"20"});
	var len5 = $("#floor4img li").length;
	var index5 = 0;
	var changeTimer5;
	var iconIndex5 = 0;
	$("#icon4 .leftred2").eq(0).css("background-image","url(images/bg_leftred.png)");
	$("#icon4 .centerred2").eq(0).css("background","#c9003b");
	$("#icon4 .rightred2").eq(0).css("background-image","url(images/bg_rightred.png)");
	//图片切换
	function changeImg5(index){ 
		$('#floor4img li').each(function(i){
				if($(this).index("#floor4img li") == index){
					if(index == 2){
						//console.log("小图：" + index)
					
						//主图切换
						$(this).animate({left:"-564px"},"slow");
						$('#floor4img li:eq(0)').animate({left:"0px"},"slow");
						//小图标大小
						//小图标样式
						$("#icon4 .leftred2").eq(0).css("background-image","url(images/bg_leftred.png)");
						$("#icon4 .centerred2").eq(0).css("background","#c9003b");
						$("#icon4 .rightred2").eq(0).css("background-image","url(images/bg_rightred.png)");
						//设置变小图标之后的样式
						$("#icon4 .leftred2").eq(2).css("background-image","url(images/bg_leftred2.png)");
						$("#icon4 .centerred2").eq(2).css("background","#dcdcdc");
						$("#icon4 .rightred2").eq(2).css("background-image","url(images/bg_rightred2.png)");
					}else{
						//主图切换
						//console.log(index);
						$(this).animate({left:"-564px"},"slow");
						var nextPic = index + 1;
						$('#floor4img li:eq('+nextPic+')').animate({left:"0px"},"slow");
						//$(this).css({left:"564px"});
						iconIndex = index;
						$("#icon4 .leftred2").eq(iconIndex + 1).css("background-image","url(images/bg_leftred.png)");
						$("#icon4 .centerred2").eq(iconIndex + 1).css("background","#c9003b");
						$("#icon4 .rightred2").eq(iconIndex + 1).css("background-image","url(images/bg_rightred.png)");
						//小图标变小
						//小图标样式
						$("#icon4 .leftred2").eq(iconIndex).css("background-image","url(images/bg_leftred2.png)");
						$("#icon4 .centerred2").eq(iconIndex).css("background","#dcdcdc");
						$("#icon4 .rightred2").eq(iconIndex).css("background-image","url(images/bg_rightred2.png)");
					}
				}else{
					$(this).css({left:"564px"});
					
				}
			});		
		}
		//图片自动轮播
    	changeTimer5 = setInterval(
					function(){
						if(index5 > len5-1){
						index5 = 0;
					
					} 
					changeImg5(index5);
			    	index5 ++;
				}
		,3000);
		//鼠标悬浮样式按钮1
		$("#icon4 li:eq(0)").hover(
			function(){
				clearInterval(changeTimer5);
				changeImg5(2);	
			},
			function(){
				changeTimer5 = setInterval(
					function(){
						if(index5 >len5-1){
						index5 = 0;
						} 
						changeImg5(index5);
			    		index5 ++;
					}
				,3000);
			}
		);
		//鼠标悬浮样式按钮2
		$("#icon4 li:eq(1)").hover(
			function(){
				clearInterval(changeTimer5);
				changeImg5(0);	
			},
			function(){
				changeTimer5 = setInterval(
					function(){
						if(index5 >len5-1){
						index5 = 0;
					
						} 
						changeImg5(index5);
			    		index5 ++;
					}
				,3000);
			}
		);
		//鼠标悬浮样式按钮3
		$("#icon4 li:eq(2)").hover(
			function(){
				clearInterval(changeTimer5);
				changeImg5(1);	
			},
			function(){
				changeTimer5 = setInterval(
					function(){
						if(index5 > len5-1){
						index4 = 0;
					
						} 
						changeImg5(index5);
			    		index5 ++;
					}
				,3000);
			}
		);
		//5楼动画
	$("#floor5img li:eq(1)").css({left:"564px"});
	$("#floor5img li:eq(0)").css({zIndex:"20"});
	var len6 = $("#floor4img li").length;
	var index6 = 0;
	var changeTimer6;
	var iconIndex6 = 0;
	$("#icon5 .leftred2").eq(0).css("background-image","url(images/bg_leftred.png)");
	$("#icon5 .centerred2").eq(0).css("background","#c9003b");
	$("#icon5 .rightred2").eq(0).css("background-image","url(images/bg_rightred.png)");
	//图片切换
	function changeImg6(index){ 
		$('#floor5img li').each(function(i){
				if($(this).index("#floor5img li") == index){
					if(index == 2){
						//console.log("小图：" + index)
					
						//主图切换
						$(this).animate({left:"-564px"},"slow");
						$('#floor5img li:eq(0)').animate({left:"0px"},"slow");
						//小图标大小
						//小图标样式
						$("#icon5 .leftred2").eq(0).css("background-image","url(images/bg_leftred.png)");
						$("#icon5 .centerred2").eq(0).css("background","#c9003b");
						$("#icon5 .rightred2").eq(0).css("background-image","url(images/bg_rightred.png)");
						//设置变小图标之后的样式
						$("#icon5 .leftred2").eq(2).css("background-image","url(images/bg_leftred2.png)");
						$("#icon5 .centerred2").eq(2).css("background","#dcdcdc");
						$("#icon5 .rightred2").eq(2).css("background-image","url(images/bg_rightred2.png)");
					}else{
						//主图切换
						//console.log(index);
						$(this).animate({left:"-564px"},"slow");
						var nextPic = index + 1;
						$('#floor5img li:eq('+nextPic+')').animate({left:"0px"},"slow");
						//$(this).css({left:"564px"});
						iconIndex = index;
						$("#icon5 .leftred2").eq(iconIndex + 1).css("background-image","url(images/bg_leftred.png)");
						$("#icon5 .centerred2").eq(iconIndex + 1).css("background","#c9003b");
						$("#icon5 .rightred2").eq(iconIndex + 1).css("background-image","url(images/bg_rightred.png)");
						//小图标变小
						//小图标样式
						$("#icon5 .leftred2").eq(iconIndex).css("background-image","url(images/bg_leftred2.png)");
						$("#icon5 .centerred2").eq(iconIndex).css("background","#dcdcdc");
						$("#icon5 .rightred2").eq(iconIndex).css("background-image","url(images/bg_rightred2.png)");
					}
				}else{
					$(this).css({left:"564px"});
					
				}
			});		
		}
		//图片自动轮播
    	changeTimer6 = setInterval(
					function(){
						if(index6 > len6-1){
						index6 = 0;
					
					} 
					changeImg6(index6);
			    	index6 ++;
				}
		,3000);
		//鼠标悬浮样式按钮1
		$("#icon5 li:eq(0)").hover(
			function(){
				clearInterval(changeTimer6);
				changeImg6(2);	
			},
			function(){
				changeTimer6 = setInterval(
					function(){
						if(index6 >len6-1){
						index6 = 0;
						} 
						changeImg6(index6);
			    		index6 ++;
					}
				,3000);
			}
		);
		//鼠标悬浮样式按钮2
		$("#icon5 li:eq(1)").hover(
			function(){
				clearInterval(changeTimer6);
				changeImg6(0);	
			},
			function(){
				changeTimer6 = setInterval(
					function(){
						if(index6 >len6-1){
						index6 = 0;
					
						} 
						changeImg6(index6);
			    		index6 ++;
					}
				,3000);
			}
		);
		//鼠标悬浮样式按钮3
		$("#icon5 li:eq(2)").hover(
			function(){
				clearInterval(changeTimer6);
				changeImg6(1);	
			},
			function(){
				changeTimer6 = setInterval(
					function(){
						if(index6 > len6-1){
						index6 = 0;
					
						} 
						changeImg6(index6);
			    		index6 ++;
					}
				,3000);
			}
		);
		//鼠标经过字母底部效果
		var cityTimer;
		$(".citylist2 li").eq(0).hover(
			function(){
				cityTimer = setTimeout( 
				function(){
					//把所有字体改为黑色
					$(".citylist2 li").css({color:"#000"});
					//把当前字体改为白色
					$(".citylist2 li").eq(0).css({color:"#fff"});
					$(".redbg").animate({left:"0"},300);
					$(".citys").animate({scrollTop: 0},300);
				}
				,200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(1).hover(
			function(){
				cityTimer = setTimeout(function(){
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(1).css({color:"#fff"});
				$(".redbg").animate({left:"19px"},300);
				$(".citys").animate({scrollTop: $(".citys li").height()},300);
				}
			,200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(2).hover(
			function(){
				cityTimer = setTimeout(function(){ //把所有字体改为黑色
					$(".citylist2 li").css({color:"#000"});
					//把当前字体改为白色
					$(".citylist2 li").eq(2).css({color:"#fff"});
					$(".redbg").animate({left:"38px"},300)
					$(".citys").animate({scrollTop: $(".citys li").height()*2},300);}
					,200);	
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(3).hover(
			function(){
				cityTimer = setTimeout(function(){
				//把所有字体改为黑色
					$(".citylist2 li").css({color:"#000"});
					//把当前字体改为白色
					$(".citylist2 li").eq(3).css({color:"#fff"});	
				$(".redbg").animate({left:""+ 19*3 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*4},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(4).hover(
			function(){
				cityTimer = setTimeout(function(){
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(4).css({color:"#fff"});	
				$(".redbg").animate({left:""+ 19*4 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*5},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(5).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(5).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*5 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*6},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(6).hover(
			function(){
				cityTimer = setTimeout(function(){
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(6).css({color:"#fff"});	
				$(".redbg").animate({left:""+ 19*6 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*7},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(7).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(7).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*7 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*8},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(8).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(8).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*8 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*9},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(9).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(9).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*9 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*10},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(10).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(10).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*10 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*11},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(11).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(11).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*11 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*12},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(12).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(12).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*12 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*13},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(13).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(13).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*13 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*14},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(14).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(14).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*14 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*15},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(15).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(15).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*15 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*16},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(16).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(16).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*16 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*17},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(17).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(17).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*17 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*18},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(18).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(18).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*18 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*19},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(19).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(19).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*19 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*20},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(20).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(20).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*20 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*21},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		$(".citylist2 li").eq(21).hover(
			function(){
				cityTimer = setTimeout(function(){ 
				//把所有字体改为黑色
				$(".citylist2 li").css({color:"#000"});
				//把当前字体改为白色
				$(".citylist2 li").eq(21).css({color:"#fff"});
				$(".redbg").animate({left:""+ 19*21 +"px"},300)
				$(".citys").animate({scrollTop: $(".citys li").height()*22},300);
				},200);
			},
			function(){
				if(cityTimer){
					clearTimeout(cityTimer);
				}
			}
		);
		 //当窗口滚动时触发调整菜单高度事件
    //banner图片轮播
    $('.banner').css({ width: "2200px" }, { height: "400px" }, { overflow: "hidden" });
    $(".banner li:eq(1)").css({ left: "2200px" });
	//$(".banner li:eq(0)").css({zIndex:"10"});
    var len = $(".banner li").length;
    var index = 0;
    var changeTimer;
    var iconIndex = 0;
    $(".centerred2").eq(0).css({width: "15px"}).css("background","#c9003d");
    //    $(".leftred2").eq(0).css("background-image", "url(images/bg_leftred.png)");
    //    $(".centerred2").eq(0).css("background", "#c9003b");
    //    $(".rightred2").eq(0).css("background-image", "url(images/bg_rightred.png)");
    //图片切换
    function changeImg(index) {
        $('.banner li').each(function(i) {
            if ($(this).index(".banner li") == index) {
                if (index == 4) {
                    //主图切换
                    $(this).animate({ left: "-2200px" }, "slow");
                    $('.banner li:eq(0)').animate({ left: "0px" }, "slow");
					//小图标变化样式
					$(".leftred2").eq(4).removeClass("leftred");
					$(".centerred2").eq(4).css("background","#dcdcdc").animate({width:"1px"},"slow");
					$(".rightred2").eq(4).removeClass("rightred");
					$(".leftred2").eq(0).addClass("leftred");
					$(".centerred2").eq(0).animate({width:"15px"},"slow").css("background","#c9003d");
					$(".rightred2").eq(0).addClass("rightred");
                } else {
                    //主图切换
					
                    $(this).animate({ left: "-2200px" }, "slow");
                    var nextPic = index + 1;
					console.log(index+":"+nextPic);
                    $('.banner li:eq(' + nextPic + ')').animate({ left: "0px" }, "slow");
					//小图标变化样式
					$(".leftred2").eq(index).removeClass("leftred");
					$(".centerred2").eq(index).css("background","#dcdcdc").animate({width:"1px"},"slow");
					$(".rightred2").eq(index).removeClass("rightred");
					$(".leftred2").eq(nextPic).addClass("leftred");
					$(".centerred2").eq(nextPic).animate({width:"15px"},"slow").css("background","#c9003d");
					$(".rightred2").eq(nextPic).addClass("rightred");
                }
            } else {
                $(this).css({ left: "2200px" });
            }
        });
    }
    var Cur_AnimIndex, End_AnimIndex;
    //鼠标悬浮样式按钮1
    $(".redbutton li").mouseover(
			function() {
			    clearInterval(changeTimer);
			    End_AnimIndex = $(this).index();
			    $(".banner li").each(function() {
			        if ($(this).css("left") == "0px") {
			            Cur_AnimIndex = $(this).index();
			        }
			    })
			    $('.banner li').eq(Cur_AnimIndex).css("left", "0px");
			    $('.banner li').eq(End_AnimIndex).css("left", "2200px");
				//小图标样式变化
				$(".leftred2").eq(Cur_AnimIndex).removeClass("leftred");
				$(".centerred2").eq(Cur_AnimIndex).css("background","#dcdcdc").animate({width:"1px"},"slow");
				//console.log($(".centerred2").eq(Cur_AnimIndex));
				$(".rightred2").eq(Cur_AnimIndex).removeClass("rightred");
				//console.log($(".rightred2").eq(Cur_AnimIndex));
				$(".leftred2").eq(End_AnimIndex).addClass("leftred");
				$(".centerred2").eq(End_AnimIndex).animate({width:"15px"},"slow").css("background","#c9003d");
				$(".rightred2").eq(End_AnimIndex).addClass("rightred");
			    //			    //清除所有样式
			    //			    $(".leftred2").addClass("leftred2");
			    //			    $(".centerred2").addClass("centerred2");
			    //			    $(".rightred2").addClass("rightred2");
			    //			    //添加当前显示样式
			    //			    $('.leftred2').eq(End_AnimIndex).addClass("leftred");
			    //			    $('.centerred2').eq(End_AnimIndex).adClass("centerred");
			    //			    $('.rightred2').eq(End_AnimIndex).addClass("rightred");
			    if (Cur_AnimIndex != End_AnimIndex) {

			        $('.banner li').eq(Cur_AnimIndex).animate({ left: "-2200px" }, "500");
			        $('.banner li').eq(End_AnimIndex).animate({ left: "0px" }, "500");
			    } else {
			        $('.banner li').eq(End_AnimIndex).css({ left: "0px" });

			    }
			}
		).mouseleave(function() {
		    index = End_AnimIndex;
		    changeTimer = setInterval(
		  					function() {
		  					    if (index > len - 1) {
		  					        index = 0;
		  					    }
		  					    changeImg(index);
		  					    index++;
		  					}
		   	, 2000);
		})
    function mouseover(startIndex, EndIndex) {
        $('.banner li').eq(Cur_AnimIndex).animate({ left: "-2200px" }, "slow")
        $('.banner li').eq(End_AnimIndex).animate({ left: "0px" }, "slow");

    }
    //图片自动轮播
    changeTimer = setInterval(
					function() {
					    if (index > len - 1) {
					        index = 0;
					    }
					    changeImg(index);
					    index++;
					}
		, 3000);

	//鼠标悬浮倒计时样式
	$(".product").hover(
		function(){
			$(this).children(".time").addClass("timehover");
		},
		function(){
			$(".time").removeClass("timehover");
		}
	);
	//左侧鼠标悬浮商品显示图片效果
	$(".billboards li").hover(
		function(){
			$(this).siblings().find("img").removeClass("imgpadcu");
			$(this).find("img").addClass("imgpadcu");
		}
	);
		/*$(".billboards .imgpad:gt(0)").css("display","none")
		$(".billboards li:eq(0)").hover(function(){
			$("#floor1 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(0)").css("display","block")
			}
		);	
		$(".billboards li:eq(1)").hover(function(){
			$("#floor1 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(1)").css("display","block")
			}
		);
		$(".billboards li:eq(2)").hover(function(){
			$("#floor1 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(2)").css("display","block")
			}
		);
		$(".billboards li:eq(3)").hover(function(){
			$("#floor1 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(3)").css("display","block")
			}
		);
		$(".billboards li:eq(4)").hover(function(){
			$("#floor1 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(4)").css("display","block")
			}
		);
		
		$(".billboards .imgpad:eq(5)").css("display","block");
		$(".billboards li:eq(5)").hover(function(){
			$("#floor2 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(5)").css("display","block")
			}
		);	
		$(".billboards li:eq(6)").hover(function(){
			$("#floor2 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(6)").css("display","block")
			}
		);
		$(".billboards li:eq(7)").hover(function(){
			$("#floor2 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(7)").css("display","block")
			}
		);
		$(".billboards li:eq(8)").hover(function(){
			$("#floor2 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(8)").css("display","block")
			}
		);
		$(".billboards li:eq(9)").hover(function(){
			$("#floor2 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(9)").css("display","block")
			}
		);
		$(".billboards .imgpad:eq(15)").css("display","block");
		$(".billboards li:eq(15)").hover(function(){
			$("#floor4 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(15)").css("display","block")
			}
		);	
		$(".billboards li:eq(16)").hover(function(){
			$("#floor4 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(16)").css("display","block")
			}
		);
		$(".billboards li:eq(17)").hover(function(){
			$("#floor4 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(17)").css("display","block")
			}
		);
		$(".billboards li:eq(18)").hover(function(){
			$("#floor4 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(18)").css("display","block")
			}
		);
		$(".billboards li:eq(19)").hover(function(){
			$("#floor4 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(19)").css("display","block")
			}
		);
		
		$(".billboards .imgpad:eq(20)").css("display","block");
		$(".billboards li:eq(20)").hover(function(){
			$("#floor5 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(20)").css("display","block")
			}
		);	
		$(".billboards li:eq(21)").hover(function(){
			$("#floor5 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(21)").css("display","block")
			}
		);
		$(".billboards li:eq(22)").hover(function(){
			$("#floor5 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(22)").css("display","block")
			}
		);
		$(".billboards li:eq(23)").hover(function(){
			$("#floor5 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(23)").css("display","block")
			}
		);
		$(".billboards li:eq(24)").hover(function(){
			$("#floor5 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(24)").css("display","block")
			}
		);
		
		$(".billboards .imgpad:eq(10)").css("display","block");
		$(".billboards li:eq(10)").hover(function(){
			$("#floor3 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(10)").css("display","block")
			}
		);	
		$(".billboards li:eq(11)").hover(function(){
			$("#floor3 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(11)").css("display","block")
			}
		);
		$(".billboards li:eq(12)").hover(function(){
			$("#floor3 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(12)").css("display","block")
			}
		);
		$(".billboards li:eq(13)").hover(function(){
			$("#floor3 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(13)").css("display","block")
			}
		);
		$(".billboards li:eq(14)").hover(function(){
			$("#floor3 .imgpad").css("display","none")
			$(".billboards .imgpad:eq(14)").css("display","block")
			}
		);	8*/
		//购物车
		
});
		