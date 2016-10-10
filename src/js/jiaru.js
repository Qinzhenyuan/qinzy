$(function(){
	var $box1 = $(".jiaz");
				 var $ul = $('<ul/>');
				$.ajaxSetup({
					type: "get",
					url: "../jiaru.json",
					async: true,
					success: function(res) {
                       
						console.log(res);
						$.each(res, function(idx, item) {
							var $li = $("<li/>");

							$("<a/>").attr({href: "#"}).html('<img src=" '+ item.imgurl + '"/>').appendTo($li);
							$("<p/>").addClass("aa").html(item.title).appendTo($li);
							$("<p/>").addClass("bb").html("￥"+item.price+".00").appendTo($li);
						    $("<button class='btn' />").html("加入购物车").appendTo($li);
							$li.appendTo($ul);

						});
						$ul.appendTo($box1);
						
					}
				});
				$.ajax();
	
	

})