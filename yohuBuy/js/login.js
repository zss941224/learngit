
function showMy(){
	var _li5=document.getElementById("li5");
	var _my=document.getElementById("my");
	_my.style.display="block";
	_li5.style.backgroundColor="#eaeceb";
}

function hideMy(){
	var _li5=document.getElementById("li5");
	var _my=document.getElementById("my");
	_my.style.display="none";
	_li5.style.backgroundColor="#fff";
}

function exchange(){
	var _putong=document.getElementById("putong");
	var _phone=document.getElementById("phone");
	
	_putong.onclick=function(){
		_putong.style.backgroundColor="#000";
		_putong.style.color="#fff";
		_phone.style.backgroundColor="#ccc";
		_phone.style.color="#000";
	}
	
	_phone.onclick=function(){
		_phone.style.backgroundColor="#000";
		_phone.style.color="#fff";
		_putong.style.backgroundColor="#ccc";
		_putong.style.color="#000";
	}
	
}
function eventHandle3(){
	var _li5=document.getElementById("li5");
	var _my=document.getElementById("my");
	
	_li5.onmouseover=showMy;
	_li5.onmouseout=hideMy;
	
	_my.onmouseover=showMy;
	_my.onmouseout=hideMy;
}

//鼠标滑过二维码，显示手机提示图
function erweima(){
	$("#pic1").mouseover(function(){
		$("#pic1").animate({"marginLeft":"80px"}, 500,function(){
			$("#pic2")[0].className = "pic2_show";
		});
	});
	
	$("#pic1").mouseout(function(){
		$("#pic1").finish();
		$("#pic2")[0].className =null;
		$("#pic1").animate({"marginLeft":"155px"},500);
	});
}

//普通登录与手机扫码登录的转换
function exchange1(){
	$("#click1").click(function(){
		$("#erweima").css({"display":"block"});
		$("#login1").css({"display":"none"});
		
	});
	
	$("#click2").click(function(){
		$("#login1").css({"display":"block"});
		$("#erweima").css({"display":"none"});
		
	});
}

window.onload=function(){
	showMy();
	hideMy();
	eventHandle3();
	exchange();
	erweima();
	exchange1();
}
$(function(){
	
	//登录验证
$("#logining").click(function(){
	var _params={
		"user":$("#username").val(),
		"password":$("#pwd").val()
	};
	$.post("api/login.php",_params,function(data,textStatus){
		console.log(data);
	});
});
});

