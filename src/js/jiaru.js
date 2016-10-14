$(function(){
       
       
//     加载下方购物车列表
	var $box1 = $(".jiaz");
				 var $ul = $('<ul/>');
				 var $jiaz = $(".jiaz");
				$.ajaxSetup({
					type: "get",
					url: "../jiaru.json",
					async: true,
					success: function(res) {
                       
						
						$.each(res, function(idx, item) {
							var $li = $("<li/>");

							$("<a/>").attr({href: "#"}).html('<img src=" '+ item.imgurl + '"/>').appendTo($li);
							$("<p/>").addClass("aa").html(item.title).appendTo($li);
							$("<p/>").addClass("bb").html("￥"+item.price+".00").appendTo($li);
						    $("<button class='btn' />").html("加入购物车").appendTo($li);
							$li.appendTo($ul);
							
							$jiaz.on("mouseenter","li",function(){
					       $(this).addClass("active")
				           }).on("mouseleave","li",function(){
					      $(this).removeClass("active")  
				           })
								

						});
						$ul.appendTo($box1);
						
					}
				});
				$.ajax();
				
				
			
			var $cartlist = $("#gou");
			var $gou = $(".ying");
			var s = getcookie("shu");
			var tu=getcookie("src");
			var xinxi=getcookie("zi");
			console.log(tu);	
		
				
			
			
			var $li=$("<li/>");
			var $img = $("<img/>").attr("src",tu);
			var $p=$("<p/>");
			  $p.html(xinxi);
			var $btnClose = $("<span/>");
	 			$btnClose.addClass("btn-close").html("&times;").appendTo($li);
	 			
	 		
	 			$btnClose.click(function(){
	 			$(this).closest("li").remove();
//	 			removecookie("shu");
	 			removecookie("src");
//	 			removecookie("zi");	
	 			i--;
	 		    $os.html(i);
})
	 		       
	 		   $img.appendTo($li);	
	 		    $p.appendTo($li); 
			   $li.appendTo($gou);
			
			
			
			var $os=$("#shu");
	 		var i=s;
	 		$os.html(s);
	 	
	 		$("#gou").on('mouseenter',function(){
					$(".ying").show();
				}).on('mouseleave',function(){
				     $(".ying").hide();
				})
	 		//给按钮绑定点击事件
	 		$(".jiaz").on('click','.btn',function(){
	 				
	 			i++;
	 			$os.html(i);
	 			
	 		
	 			var $cruttenli = $(this).closest("li");
	 			var $cruttenImg = $cruttenli.find("img");
	 			console.log(111);
	 			var $copyImg = $cruttenImg.clone();   //复制原图
	 			
	 			var startPos = $cruttenImg.offset();   //获取原图坐标
	 			var startWidth = $cruttenImg.width();  //获取原图宽度
	 			
	 			//给复制图片添加一个样式
	 			$copyImg.css({
	 				position: "absolute",
	 				left:startPos.left,
	 				top:startPos.top,
	 				width:startWidth
	 			});
	 			
	 			//把复制的图片放到body中来
	 			$copyImg.appendTo("body");
	 			
	 			var cartPos = $cartlist.offset();
	 			//动画图片飞入购物车
	 			$copyImg.animate({left:cartPos.left,top:cartPos.top+$gou.outerHeight,width:0,opacity:0},function(){
	 				
	 				//1.删除复图片
	 				$copyImg.remove();
	 				
	 				//2.复制列表信息的li
	 				var $copyli = $cruttenli.clone();
	 				//3.复制对象里删除按钮
	 				$copyli.find("button").remove();
	 				//4.添加删除按钮
	 				var $btnClose = $("<span/>");
	 				$btnClose.addClass("btn-close").html("&times;").appendTo($copyli);
	 				$btnClose.click(function(){
	 					$(this).closest("li").remove();
	 					i--;
	 			        $os.html(i);
	 				});
	 				//5.把复制的li添加到购物车中
	 				$copyli.appendTo($gou);
	 				
	 				
//	 				 var $src = $oimg.attr("src");
//				    var $shu=$os.html();
//				    var $zi=$xin.html();
//				    console.log($zi);
//				    
//								
//								console.log($src);
//								console.log(shu);
//								var d = new Date();
//								d.setDate(d.getDate()+10);
//								var src = setcookie("src1",$src,d,"/");
//								var shu=setcookie("shu",$shu,d,"/");
//								var  zi=setcookie("zi",$zi,d,"/");
//	 				
 
	 			});
	 			
	 			
 
	 		});
	 		

})