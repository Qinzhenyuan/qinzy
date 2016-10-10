$(function(){
	
	
	
	 var $gg=$("#gou")
	 		var $gou = $(".ying");
	 		
	 		//给按钮绑定点击事件
	 		var i=0;
	 		$(".buynow").click(function(){
	 		
	 			var $os=$("#shu");
	 			
	 			i++;
	 			$os.html(i);
	 			var $oli = $(".goods-img");
	 			var $oimg = $oli.find("img");
	 			var $xin=$(".xinxi");
	 			
	 			var $fuzhitu = $oimg.clone(); 
	 			var $fuzhitu1 = $oimg.clone();
	 			var startPos = $oimg.offset();   //获取原图坐标
	 			var startWidth = $oimg.width();  //获取原图宽度
	 			
	 			//给复制图片添加一个样式
	 			$fuzhitu.css({
	 				position: "absolute",
	 				left:startPos.left,
	 				top:startPos.top,
	 				width:startWidth
	 			});
	 			$fuzhitu.appendTo("body");
	 			
	 			var cartPos = $gg.offset();
	 			$fuzhitu.animate({left:cartPos.left,top:cartPos.top+$gou.outerHeight,width:0,opacity:0},function(){
	 				$fuzhitu.remove();
	 				var $xinxi=$xin.clone();
	 				$fuzhili=$("<li/>");
	 				
	 				$fuzhitu1.appendTo($fuzhili);
	 				$xinxi.appendTo($fuzhili);
	 				
	 				var $osp=$("<span/>");
	 				
	 				$osp.addClass("btn-close").html("&times;").appendTo($fuzhili);
	 				$osp.click(function(){
	 					$(this).closest("li").remove();
	 					i--;
	 			    $os.html(i);
	 				});
	 				
	 				$fuzhili.appendTo($gou);
	 				
	 				
	 			});
	 		});
            
            $("#gou").on('mouseenter',function(){
					$(".ying").show();
				}).on('mouseleave',function(){
				     $(".ying").hide();
				})
            
       });
	
	

