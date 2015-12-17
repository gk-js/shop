$(function(){
	//关闭广告位
	$(".grouptit .close").click(function(){
		$(this).css({display:"none"});
		$("#bigad").css({display:"none"});		
	});
	//三个广告位阴影效果
	$(".threeAdtop li").mouseover(function(){
		$(this).siblings().removeClass("currentli");
		$(this).addClass("currentli");
	});
	//导航栏动画
	var timer;
	$(".menulist li").hover(
		function(){
			var $current = $(this);
			timer = setTimeout(
				function(){
					//console.log($current.index());
					$(".menulist .lastbg").animate({left:""+$current.index()*$current.width()+"px"},"fast");
					$(".menucon").removeClass("currentme");
					$(".menucon").eq($current.index()).addClass("currentme");
				},200);	
		},
		function(){
			clearTimeout(timer);
		}
	);
	//商品切换
	var proTimer;
	$(".menucon li").each(function(){
		if($(this).index()%4 !== 0){
			$(this).css({width:"150px"});
			//console.log($(this));	
		}
	});
	$(".menucon li")
		.mouseover(function(){
			var $currentDom = $(this);
			proTimer = setTimeout(function(){
				$currentDom.siblings().animate({width:"150px"},200).removeClass("lihover");
				$currentDom.addClass("lihover").animate({width:"456px"},200);		
			},100);
		})
		.mouseout(function(){
			clearTimeout(proTimer);	
		});	
	//楼层商品切换
	$(".pro_floorcon_center .toptit .titlist").hover(function(){
		$(this).siblings(".titlist").removeClass("current");
		$(this).addClass("current");
		//console.log($(this).index());
		$(this).parent().siblings(".prolist").removeClass("currentprolist");
		$(this).parent().siblings(".prolist").eq($(this).index()/2).addClass("currentprolist");
	});
	//左右切换图标切换
	$(".bx_wrapall").hover(
		function(){
			$(this).find(".prev,.next").css({display:"block"});	
		},
		function(){
			$(this).find(".prev,.next").css({display:"none"});
		}
	);
	//活动轮播图
	$("#actives").Xslider({
			// 默认配置
			affect: 'scrollx', //效果  有scrollx|scrolly|fade|none
			speed: 500, //动画速度
			space: 6000, //时间间隔
			auto: true, //自动滚动
			trigger: 'mouseover', //触发事件 注意用mouseover代替hover
			conbox: '.adlist', //内容容器id或class
			ctag: 'li', //内容标签 默认为<a>
			switcher: '.redbutton2', //切换触发器id或class
			stag: 'a', //切换器标签 默认为a
			current:'current', //当前切换器样式名称
			rand:false //是否随机指定默认幻灯图片
	});
	//楼层左侧轮播图
	$(".proimg_listAll").each(function(){
		$(this).Xslider({
			// 默认配置
			affect: 'scrollx', //效果  有scrollx|scrolly|fade|none
			speed: 500, //动画速度
			space: 6000, //时间间隔
			auto: true, //自动滚动
			trigger: 'mouseover', //触发事件 注意用mouseover代替hover
			conbox: '.proimg_list', //内容容器id或class
			ctag: 'li', //内容标签 默认为<a>
			switcher: '.contrl_button', //切换触发器id或class
			stag: 'li', //切换器标签 默认为a
			current:'currentli', //当前切换器样式名称
			rand:false //是否随机指定默认幻灯图片
		});
	});
	//切换城市
	//02获取城市
function GetAllCity() {
    // debugger;
    var cityList = $("#city_list").html();
    var city = $.parseJSON(cityList);

    var hostCityList = $("#host_city_list").html();
    var hostCity = $.parseJSON(hostCityList);

    var colhtml = "            <div class=\"line_1\">";
    colhtml += "           <span class=\"txt1\">点击进入</span><span class=\"txt2\"><a href=\"/\">全国站</a></span>";
    colhtml += "       </div>"
    colhtml += "       <div class=\"line_2\">";
    colhtml += "           <span class=\"tex3\">热门城市 ：</span>"
    colhtml += "           <ul class=\"citylist\">"
    for (var j = 0; j < hostCity.length; j++) {
        if (j < 6) {
            colhtml += "               <li><a onclick=\"GetCity('" + hostCity[j].split(',')[0] + "','" + hostCity[j].split(',')[1] + "','" + hostCity[j].split(',')[2] + "');\" title=\"\" href=\"/" + hostCity[j].split(',')[2] + "/\">" + hostCity[j].split(',')[1] + "</a></li>";
        }
    }
    colhtml += "           </ul>"
    colhtml += "       </div>"
    colhtml += "       <div class=\"line_3\">"
    colhtml += "           <span class=\"tex3\">查找城市 :</span>"
    colhtml += "            <div class=\"tips\">抱歉，该城市没有站点！</div>"
    //colhtml += "           <form name=\"creator\">"
    colhtml += "           <input type=\"text\" name=\"citys\" class=\"input_city\" value=\"\" /> "
    colhtml += "           <input type=\"button\" class=\"but4\" value=\"搜索\" />"
    //colhtml += "           </form>"
    colhtml += "       </div>"
    colhtml += "       <div class=\"line_4\">"
    colhtml += "           <ul class=\"citylist2\">"
    colhtml += "               <li class=\"firstcolor\">A</li>"
    colhtml += "               <li>B</li>"
    colhtml += "               <li>C</li>"
    colhtml += "               <li>D</li>"
    colhtml += "               <li>E</li>"
    colhtml += "               <li>F</li>"
    colhtml += "               <li>G</li>"
    colhtml += "               <li>H</li>"
    colhtml += "               <li>J</li>"
    colhtml += "               <li>K</li>"
    colhtml += "               <li>L</li>"
    colhtml += "               <li>M</li>"
    colhtml += "               <li>N</li>"
    colhtml += "               <li>P</li>"
    colhtml += "               <li>Q</li>"
    colhtml += "               <li>R</li>"
    colhtml += "               <li>S</li>"
    colhtml += "               <li>T</li>"
    colhtml += "               <li>W</li>"
    colhtml += "               <li>X</li>"
    colhtml += "               <li>Y</li>"
    colhtml += "               <li>Z</li>"
    colhtml += "               <li class=\"redbg\"></li>"
    colhtml += "           </ul>"
    colhtml += "       </div>"
    colhtml += "       <ul class=\"citys\">";
    //读取城市列表
    var zm = "";
    var bol = "A";
    for (var i = 0; i < city.length; i++) {
        var flag = city[i].split(',')[3] == zm;
        var fl = city[i].split(',')[3] == bol;

        if (fl == false) {
            colhtml += "       </ul>";
            colhtml += "   </li>";
        }
        if (!flag) {
            colhtml += "   <li>"
            colhtml += "       <div class=\"abctitle\">"
            colhtml += "           " + city[i].split(',')[3] + "</div>"
            colhtml += "       <ul class=\"abclist\">";
        }
        colhtml += "           <li><a onclick=\"GetCity('" + city[i].split(',')[0] + "','" + city[i].split(',')[1] + "','" + city[i].split(',')[4] + "');\" title=\"\" href=\"/" + city[i].split(',')[4] + "/\">" + city[i].split(',')[1] + "</a></li>";

        zm = city[i].split(',')[3];
        bol = city[i].split(',')[3];
    }
    colhtml += "           <li class=\"bottomspace\"></li>"
    colhtml += "       </ul>";

    $(".changecity").html(colhtml);
};
	GetAllCity();
	$(".changecitybut")
		.mouseover(function(){
			$(this).children(".changecity").css({display:"block"});
		})
		.mouseout(function(){
			$(this).children(".changecity").css({display:"none"});	
		}
	);
	//切换城市
	 //搜索城市
    var cityTimer;
    $(".changecitybut")
		.delegate(".citylist2 li", "mouseover", function() {
		    var num = $(this).index();
		    //console.log(num);
		    cityTimer = setTimeout(
				function() {
				    $(".changecitybut .citylist2 li").css({ color: "#000" });
				    //console.log($(".citylist2 li"));
				    $(".citylist2 li").each(function(i) {
				        if (num == i) {
				            $(this).css({ color: "#fff" });
				            $(".redbg").animate({ left: "" + i * 19 + "" }, 300);
				        }
				    });
				    var currentHeight = 0;
				    $(".changecitybut .citys .abclist").each(function(i) {
						//console.log(num);
				        if (i < num) {
							//console.log($(this).find("li"));
				            var currentWidth = 0;
							$(this).each(function(){
								currentHeight += $(this).outerHeight(true);
							});
				        }
				    });
					//console.log(currentHeight);
				    $(".citys").animate({ scrollTop: currentHeight }, 300);
				}
			, 200)
		}).delegate(".citylist2 li", "mouseout", function() {
		    clearTimeout(cityTimer);
		});
    // $("#floor1 img:first").css({ display: "block" });
    // $("#floor2 img:first").css({ display: "block" });
    // $("#floor3 img:first").css({ display: "block" });
    // $("#floor4 img:first").css({ display: "block" });
    //$("#floor5 img:first").css({ display: "block" });
    //    $(".billboards li").hover(
    //        function() {
    //            $(this).siblings().css({ display: "none" });
    //            $(this).find("img").css({ display: "block" });
    //        }
    //    )
    //验证城市有无
    var cityList = new Array(), cityList2 = new Array(), cityList3 = new Array();
    $(".changecitybut").delegate(".but4", "click", function() {
        var city = $.parseJSON($("#city_list").html());
        var val = $(".changecitybut .input_city").val();
        var flag_s, flag1_s, flag2_s;
        var currentcity, currentid, code;
        for (var i = 0; i < city.length; i++) {
            cityList[i] = city[i].split(",")[1];
            cityList2[i] = city[i].split(",")[4];
            cityList3[i] = city[i].split(",")[0];
        }
        //console.log(cityList[0]);
       	//console.log(cityList2[0] == "alashanmeng");
        //console.log(cityList3[0]);
        //console.log("阿拉善盟" == cityList[0]);
        for (var j = 0; j < cityList.length; j++) {
            //console.log(val);
            //console.log(cityList[j]);
            if (val == cityList[j] || val == cityList[j].split("市")[0]) {
                //alert(1);
                flag1_s = true;
                currentcity = cityList[j];
                currentid = cityList3[j];
                code = cityList2[j];
                break;
            } else {
                flag1_s = false;
            }
        }
        for (var j = 0; j < cityList2.length; j++) {
            if (val == cityList2[j] || val == cityList2[j].split("shi")[0]) {
                flag2_s = true;
                currentcity = cityList[j];
                currentid = cityList3[j];
                code = cityList2[j];
                break;
            } else {
                flag2_s = false;
            }
        }
         //console.log(flag1_s);
         //console.log(flag2_s);
         //console.log(flag1_s || flag2_s);
        if (!(flag1_s || flag2_s)) {
            $(".tips").css({ display: "block" });
        } else {
            $(".tips").css({ display: "none" });
            //GetCity(currentid, currentcity, code);
           // window.location.href = "/" + code + "/";
        }
    });
	
})
		