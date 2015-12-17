$(window).load(function(){
	//点击全选框事件
	$(".shopcarcon").delegate(".tit input","change",function(){
		if($(this).prop("checked")){
			$(".prolist input").prop("checked",true);
			proID();
		}else{
			$(".prolist input").prop("checked",false);		
		}	
	});
	//中间商品点击事件
	$(".prolist .select input").change(function(){
		if($(".prolist .select input").size() == $(".prolist .select input:checked").size()){
			$(".shopcarcon .tit input").prop("checked",true);
			proID();		
		}else{
			$(".shopcarcon .tit input").prop("checked",false);
			proID();	
		}
	});
	//点击商品自身删除按钮
	//$(".shopcarcon").delegate(".delete","click",function(){
	//	$(this).parents(".prolist")	.remove();	
	//});
	//删除已选商品
	//$(".delete span").click(function(){
	//	$(".prolist input:checked").parents(".prolist")	.remove();		
	//});
	//输出商品ID
	var productId2;
	function proID(){
		var productId = new Array();
		$(".prolist input:checked").each(function(index){
			console.log($(this).prop("id"));
			productId[index] = $(this).prop("id")
		})
		productId2  = productId;
		console.log(productId2);	
	}
});