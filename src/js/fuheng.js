$(function(){
	var nsrc = getcookie("src");
	var img = $("<img/>").attr("src",nsrc);
	var ctlf = $(".content1_left");
	img.appendTo(ctlf);
	
	var $jr = $(".jr");
	var i = 0;
	
	$jr.click(function(){
		var $src = $(".content1_left").find("img").attr("src");
		console.log($src);
		var $wz = $(".tb").html(); 
		var $cd = $(".cd").html();
		var $dd = $(".dd").html();
		var $sl = $(".ip").children("input").eq(1).val();
		console.log($cd);
		//console.log($cd);
		var d = new Date();
		d.setDate(d.getDate()+10);
		var src = setcookie("src",$src,d);
		var wz = setcookie("wz",$wz,d);
		var cd = setcookie("cd",$cd,d);
		var dd = setcookie("dd",$dd,d);
		var sl = setcookie("sl",$sl,d);
		
		var $ctl = $(".content1_left");
		var $img = $ctl.find("img");
		var $imgcopy = $img.clone();
		
		var $imgleft = $img.offset().left;
		var $imgtop = $img.offset().top;
		var $imgwidth = $img.width();
		
		$imgcopy.css({
			position:"absolute",
			left:$imgleft,
			top:$imgtop,
			width:$imgwidth
		});
		
		$imgcopy.appendTo("body");
		
		var $sp = $(".car");
		var $spleft = $sp.offset().left;
		var $sptop = $sp.offset().top;
		
		$imgcopy.animate({"left":$spleft,"top":$sptop,"width":"50px","opacity":1},1000,function(){
			var $span = $(".car");
			i++;
			$span.html(i);
			$imgcopy.remove();
		})
	})
	
	
	
})




$(function(){
				var $ct = $(".content");
				
				$ct.on("mouseenter","li",function(){
					$(this).addClass("active")
				}).on("mouseleave","li",function(){
					$(this).removeClass("active")  
				})
				
				$.ajaxSetup({
					type:"get",
					url:"../js/new_file.json",
					async:true,
					success:function(res){
						//console.log(res);
						
						$.each(res, function(idx,item) {
							var $a = $("<a/>").attr("href",item.url);	
						//	console.log(item.url);
							var $li = $("<li/>");
							var $p = $("<p/>");
							var $sp = $("<span/>");
							var $img = $("<img/>").attr("src",item.imgurl);
							$p.html(item.pag);
							$sp.html(item.price);
							$li.append($img).append($p).append($sp);
							$li.appendTo($a);
							$a.appendTo($ct);
							
							$li.click(function(){
								var $src = $(this).find("img").attr("src");
								
								//console.log($src);
								var d = new Date();
								d.setDate(d.getDate()+10);
								var src = setcookie("src",$src,d);
							})
						});
					}
				});
				$.ajax();
				
				$(window).scroll(function(){
					var scrolltop = $(window).scrollTop();
					
					if(scrolltop>=$(document).height()-$(window).height()-100){
						$.ajax();
					}
				})
			})
