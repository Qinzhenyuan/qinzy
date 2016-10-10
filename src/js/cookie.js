function setcookie(name,value,expires,path,domain,secure){
				var cookietext = encodeURIComponent(name)+"="+encodeURIComponent(value);
				if(expires instanceof Date){
					cookietext += ";expires=" + expires;
				}
				
				if(path){
					cookietext += ";path" + path;
				}
				if(domain){
					cookietext += ";domain" + domain;
				}
				if(secure){
					cookietext += ";secure";
				}
				document.cookie = cookietext;
				return document.cookie;
			}
			
			function getcookie(name){
				var cookie = decodeURIComponent(document.cookie);
				var arr = cookie.split("; ")
				
				for(var i = 0 ; i < arr.length;i++){
					var arr2 = arr[i].split("=");
					if(arr2.length >= 2){
						if(arr2[0] == name){
							return arr2[1];
						}
					}
				}
				return "";
			}
			
			function removecookie(name){
				var d = new Date();
				document.cookie = encodeURIComponent(name)+"=;expires="+d;
				return document.cookie;
			}