$(function() {
	
	
	
	var $tab = $("table");
	var $js = $(".jiesuan")
	var $zj = $(".zz");

	var $str = $(".shangpin");

	var tusrc = getcookie("src");
	var tuxinx = getcookie("xinxi");

	var tujg = getcookie("jg");
	var tusl = getcookie("shu");

	console.log(tuxinx);
	console.log(tusrc);
	console.log(tujg);
	console.log(tusl);
	
	
//  如果图片路径存在,则创建表格
	if(tusrc) {

		var $input = $("<input/>").attr("type", "checkbox");
		var $img = $("<img/>").attr("src", tusrc);
		var $a = $("<a/>").attr("href", "#");
		var $sp = $("<span/>").addClass("jies").append(tuxinx);
		var del = tujg.replace("￥", "");

		//		var $sljia=$("input").addClass("sljia").attr("type","button").val("-");
		//       <input class="jian" type="button" value="-">
		var $a = $("<a/>").attr("href", "#");
		$a.html("删除");
		var $zshu = $(".zshu");
		$zshu.html(tusl);
        var nxj = tusl * del;
		console.log(del);
		console.log(tusl)
		
		console.log(nxj);

		var $zu = $(".zz");
		$zu.html(nxj + ".00");
		var $tr = $("<tr/>");
		var $td1 = $("<td/>");
		var $td2 = $("<td/>");
		var $td3 = $("<td/>");
		var $td4 = $("<td/>");
		var $td5 = $("<td/>");
		var $td6 = $("<td/>");

		$td1.append($input).appendTo($tr);
		$td2.append($img).appendTo($tr);
		$td2.append($sp).appendTo($tr);
		$td3.append(tujg).appendTo($tr);
		//		$td4.append($sljia).appendTo($tr);
		$td4.append(tusl).appendTo($tr);
		$td5.append(nxj + ".00").appendTo($tr);
		$td6.append($a).appendTo($tr);

		$tr.appendTo($tab);

		$a.click(function() {
			$(this).parent().parent().remove();
			//			$js.css("display","none");
			//			$str.css("display","none");
			location.assign("../html/goucar.html");

			removecookie("src");
		})
	}
})