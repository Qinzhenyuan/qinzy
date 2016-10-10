window.onload = function(){
	var newyh = getcookie("user");
	var newmm = getcookie("pass")
  	console.log(newyh);
  	console.log(newmm);
  	var znyh = getcookie("ny");
  	var znmm = getcookie("nm")

	
	var oinput = document.getElementsByTagName("input");
	var op = document.getElementById("xs");
	
	op.innerHTML="dddd";
	console.log(oinput.length);
	if(znyh){
  		oinput[0].value = znyh;
  		oinput[1].value = znmm;
  	}
	
	oinput[3].onclick = function(){
		console.log(0000);	
		if(oinput[0].value == newyh&&oinput[1].value == newmm){
			console.log(111);	
//			window.open("../index.html")
		}
		
		if(oinput[0].value != newyh){
			op.innerHTML = "用户名不正确";
		}else if(oinput[1].value != newmm){
			op.innerHTML = "密码不正确";
		}
		
		
		
		if(oinput[2].checked){
			console.log(678)
			var nnyh = oinput[0].value;
			var nnmm = oinput[1].value;
			
			var d = new Date();
			d.setDate(d.getDate()+10);
			var ny = setcookie("ny",nnyh,d);
			var nm = setcookie("nm",nnmm,d);
			
		}
	}
}