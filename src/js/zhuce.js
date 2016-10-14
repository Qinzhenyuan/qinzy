window.onload = function() {
	var oin = document.getElementsByTagName("input");
	var op = document.getElementsByClassName("xianshi");
	var oss = document.getElementById("yz");
	var osp = document.getElementsByName("span");
	console.log(op.length);

	oin[6].onclick = function() {

		var username = oin[0].value; //账号
		var pwd = oin[1].value; //密码
		console.log(username);
		console.log(pwd);

		for(var i = 0; i < oin.length; i++) {
			if(oin[i].value == "") {
				alert("请完善信息");
				return 0;
			} else {
				var d = new Date;
				d.setDate(d.getDate() + 10);
				var user = setcookie("user", username, d);
				var pass = setcookie("pass", pwd, d);
				location.assign("../html/denglu.html");
			}

		}

	}

	oin[0].onblur = function() {
		var name = this.value;
		var ss = /^\D\w{7,}$/.test(name);
		if(ss) {
			op[0].style.color = "green";
			op[0].innerHTML = "用户名合法";
		} else {
			op[0].style.color = "red";
			op[0].innerHTML = "用户名不合法";
		}
	}
	oin[1].onblur = function() {
		var pass = this.value;
		var ss = /\w{8,20}/.test(pass);
		if(ss) {
			op[1].style.color = "green";
			op[1].innerHTML = "密码合法";
		} else {
			op[1].style.color = "red";
			op[1].innerHTML = "密码不合法";
		}
	}

	oin[2].onkeyup = function() {

		if(oin[1].value != oin[2].value) {
			op[2].style.color = "red";
			op[2].innerHTML = "前后输入密码不一致";
		} else {
			op[2].style.color = "green";
			op[2].innerHTML = "输入密码正确";

		}
	}

	oin[3].onblur = function() {
		var pa = this.value;
		var ss = /^1\d{10}$/.test(pa);
		if(ss) {
			op[3].style.color = "green";
			op[3].innerHTML = "手机号码合法";

		} else {
			op[3].innerHTML = "手机号码不合法";
			op[3].style.color = "red";
		}

	}

	oss.onclick = function() {
		var str = '';
		for(var i = 0; i < 4; i++) {
			var num = parseInt(Math.random() * 10);
			str += num;
		}
		this.innerHTML = str;
	}
	oin[5].onblur = function() {
		if(this.value == osp[3].innerHTML) {
			op[4].style.color = "green";
			op[4].innerHTML = "验证码输正确";
		} else {
			op[4].style.color = "red";
			op[4].innerHTML = "验证码输入错误";

		}
	}

}