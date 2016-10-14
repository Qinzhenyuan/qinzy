$(function(){
	
	
	var $select = $("#nav-left");
	var $box = $select.children("div");
	var index;
	var i = 2;
	
		$box.mouseenter(function(){
			i = $(this).index();

			
		})
	
		$(".select1").mouseenter(function(){
			$(this).css("display","block");
		})
		
		$box.mouseenter(function(){
			index = $(this).index();
			$box.eq(index).css("background","white");
			$box.eq(index).find("a").css("color","black")
			$(".select1").css("display","block");
			
			$(".select1").mouseenter(function(){
				
				$box.eq(index).css("background","white");
				$box.eq(index).find("a").css("color","black")
			});
			
			$(".select1").mouseleave(function(){
				$(this).css("display","none")
				
			
				$box.eq(index).css("background","white")
				
				
		
			});
			
		})
		
		$box.mouseleave(function(){
			index = $(this).index();
			
			
				$(this).css("background","rgb(200,22,35)")
				$box.eq(index).find("a").css("color","white")
		
			$(".select1").css("display","none");
		})
	
	
	
	
	
	
	
	
	
	
			$("#lbt").qzylbt({
				type:"fade"
				
			});
			$("#lbt2").qzylbt({
				type:"x",
				width:880,
			    height:300,
				autoPlay:false,
				page:false
				
			})
			
			
//		获取右边购物车cookie
			
//			var $cartlist = $("#gou");
//			var $gou = $(".ying");
//			var s = getcookie("shu");
//			var tu=getcookie("src");
//			var xinxi=getcookie("zi");
//			var $li=$("<li/>");
//			var $img = $("<img/>").attr("src",tu);
//			var $p=$("<p/>");
//			  $p.html(xinxi);
//			var $btnClose = $("<span/>");
//	 			$btnClose.addClass("btn-close").html("&times;").appendTo($li);
//	 			$btnClose.click(function(){
//	 			$(this).closest("li").remove();
//	 			removecookie("shu");
//	 			removecookie("src");
//	 			removecookie("zi");	
//	 			i--;
//	 		    $os.html(i);
//})
//	 			
//	 			
//          
//	 		         
//	 		   $img.appendTo($li);	
//	 		    $p.appendTo($li); 
//			   $li.appendTo($gou);
//			
//			
//			
//			var $os=$("#shu");
//	 		var i=s;
//	 		$os.html(s);
       
			
			//加载
				var $box1 = $("#jiazai");
				 var $ul = $('<ul/>');
				 
				 	
				
				$box1.on("mouseenter","li",function(){
					$(this).addClass("bian")
				}).on("mouseleave","li",function(){
					$(this).removeClass("bian")  
				})
				 
				 
				$.ajaxSetup({
					type: "get",
					url: "liebiao.json",
					async: true,
					success: function(res) {
              
						$.each(res, function(idx, item) {
							var $li = $("<li/>");

							$("<a/>").attr({href: "../src/html/xiangqing.html"}).html('<img src="'+ item.imgurl +'"/>').appendTo($li);
							$("<p/>").addClass("aa").html(item.title).appendTo($li);
							$("<span/>").addClass("bb").html("￥"+item.price+".00").appendTo($li);
							$li.appendTo($ul);
						   $ul.appendTo($box1);
							$li.click(function(){
								var $src = $(this).find("img").attr("src");
								var $xin = $(this).find("p").html();
								var $jg = $(this).find("span").html();
								var $srcs = "../"+$src;
								console.log($jg)
								console.log($srcs);
								console.log($xin);
								var d = new Date();
								d.setDate(d.getDate()+10);
								var src = setcookie("src",$srcs,d);
								var xinxi = setcookie("xinxi",$xin,d);
								var jg = setcookie("jg",$jg,d);
							})
							

						});
						
						
						
						
						
					}
				});
				$.ajax();
				$(window).on("scroll",function(){
					
					var scroolltop=$(window).scrollTop();
				if(scroolltop>=$(document).height()-$(window).height()-200){
					$.ajax();
					
				}
//					
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