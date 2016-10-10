$(function(){
			$("#lbt").qzylbt({
				type:"fade"
				
			});
			$("#lbt2").qzylbt({
				type:"x",
				width:880,
			    height:260,
				autoPlay:false,
				page:false
				
			})
			
			
			
   
	 		
	 		
	 		
//	 		var $box = $("#caini");
//				 var $ul = $('<ul/>');
//				$.ajax({
//					type: "get",
//					url: "caini.json",
//					async: true,
//					success: function(res) {
//                     
//						
//						$.each(res, function(idx, item) {
//							var $li = $("<li/>");
//
//							$("<a/>").attr({href: "#"}).html('<img src=" '+ item.imgurl + '"/>').appendTo($li);
//							$("<p/>").addClass("aa").html(item.title).appendTo($li);
//							$("<p/>").addClass("bb").html("￥"+item.price+".00").appendTo($li);
//							
//							$li.appendTo($ul);
//
//						});
//						$ul.appendTo($box);
//						
//					}
//				
//				});
			

			
			//加载
				var $box1 = $("#jiazai");
				 var $ul = $('<ul/>');
				$.ajaxSetup({
					type: "get",
					url: "louti.json",
					async: true,
					success: function(res) {
                       
						console.log(res);
						$.each(res, function(idx, item) {
							var $li = $("<li/>");

							$("<a/>").attr({href: "#"}).html('<img src=" '+ item.imgurl + '"/>').appendTo($li);
							$("<p/>").addClass("aa").html(item.title).appendTo($li);
							$("<p/>").addClass("bb").html("￥"+item.price+".00").appendTo($li);
							$li.appendTo($ul);

						});
						$ul.appendTo($box1);
						
					}
				});
				$.ajax();
				$(window).on("scroll",function(){
					
					var scroolltop=$(window).scrollTop();
				if(scroolltop>=$(document).height()-$(window).height()-200){
					$.ajax();
					
				}
					
				});
//				楼层
		var $nav = $("#LoutiNav");
				var $floor = $("#main .Louti");
				
				//1.给window添加滚动事件
				$(window).scroll(function(){
					
					var scrollTop = $(window).scrollTop();
					
					if(scrollTop >= 1500){
						$nav.fadeIn();
					}else{
						$nav.fadeOut();
					}
//					
					//console.log($floor);
					//目的 主要是来找index
					$floor.each(function(idx,ele){
						
						if(scrollTop >= $(ele).offset().top && scrollTop <= $(ele).offset().top + $(ele).outerHeight()/2){
							//console.log(idx);
							$nav.find("li").removeClass("hover").eq(idx).addClass("hover");
							return false;
						}
						
					});
					
					
				});
//				
				//2.给导航添加点击事件
				$nav.on("click","li",function(){
					//top
					if($(this).hasClass("last")){
						$("html body").animate({scrollTop:0});
					}
					
					var index = $(this).index();
					var _scrollTop = $floor.eq(index).offset().top;
					$("html body").animate({scrollTop:_scrollTop});
					
					
				});
			
			
			
		})