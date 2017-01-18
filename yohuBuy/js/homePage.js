//购物车的隐藏与显示
function showCart(){
	var _show=document.getElementById("showCart");
	var _cart=document.getElementById("cart1");
	_cart.style.display="block";
}

function hideCart(){
	var _show=document.getElementById("showCart");
	var _cart=document.getElementById("cart1");
	_cart.style.display="none";
}

function eventHandle1(){
	var _show=document.getElementById("showCart");
	var _cart=document.getElementById("cart1");
	
	_show.onmouseover=showCart;
	_show.onmouseout=hideCart;
	
	_cart.onmouseover=showCart;
	_cart.onmouseout=hideCart;
}

//服饰的下拉列表
function showClothes(){
	$("#li4").mouseenter(function(){
		$("#clothes").css({"display":"block"});
	});
	
	$("#li4").mouseleave(function(){
		$("#clothes").css({"display":"none"});
	});
	
	$("#clothes").mouseenter(function(){
		$("#clothes").css({"display":"block"});
	});
	
	$("#clothes").mouseleave(function(){
		$("#clothes").css({"display":"none"});
	});
}

//鞋履的下拉列表
function showShoes(){
	$("#li5").mouseenter(function(){
		$("#shoes").css({"display":"block"});
	});
	
	$("#li5").mouseleave(function(){
		$("#shoes").css({"display":"none"});
	});
	
	$("#shoes").mouseenter(function(){
		$("#shoes").css({"display":"block"});
	});
	
	$("#shoes").mouseleave(function(){
		$("#shoes").css({"display":"none"});
	});
}

//包袋的下拉列表
function showBags(){
	$("#li6").mouseenter(function(){
		$("#bags").css({"display":"block"});
	});
	
	$("#li6").mouseleave(function(){
		$("#bags").css({"display":"none"});
	});
	
	$("#bags").mouseenter(function(){
		$("#bags").css({"display":"block"});
	});
	
	$("#bags").mouseleave(function(){
		$("#bags").css({"display":"none"});
	});
}

//配饰-其他的下拉列表
function showPeishi(){
	$("#li7").mouseenter(function(){
		$("#peishi").css({"display":"block"});
	});
	
	$("#li7").mouseleave(function(){
		$("#peishi").css({"display":"none"});
	});
	
	$("#peishi").mouseenter(function(){
		$("#peishi").css({"display":"block"});
	});
	
	$("#peishi").mouseleave(function(){
		$("#peishi").css({"display":"none"});
	});
}

//轮播图的获取
$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.lunbo;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$("#lunbo ul li a").eq(i).append(_html);
				}	
			}
			
		}
		
	});
});

//轮播图
$(function(){
		var i=0;
		var _timer=0;
		function delay(){
			$("#btn span").eq(i).css("background-color","white");
			$("#lunbo ul li a").css({
				"display":"none",
				"opacity":0.3
			});
			i++;
			if(i>=$("#lunbo a").size()){
				i=0;
			}
			$("#lunbo ul li a").eq(i).css("display","block");
			$("#btn span").eq(i).css("background-color","red");
			player(true);
		}
		function player(_cmd){
			$("#btn span").eq(i).css("background-color","red");
			$("#lunbo ul li a").eq(i).animate({
				"opacity":1,
			},600,function(){
				if(_cmd){
					window.clearTimeout(_timer);
					_timer=window.setTimeout(delay,3000);
				}else{
					$("#lunbo a").eq(i).stop();
					window.clearTimeout(_timer);
				}
			});
		}
		player(true);
		
		function eventHandle(_current){
			$("#lunbo ul li a").eq(i).finish();
			$("#lunbo ul li a").css({
				"display":"none",
				"opacity":0.5
			});
			$("#btn span").css({
				"background-color":"white"
			});
			$(_current).css({
				"background-color":"red"
			});
			i=$(_current).index();
			$("#lunbo ul li a").eq(i).css({
				"display":"block"
			});
			window.clearTimeout(_timer);
			player(false);
		}
		$("#lunbo").mouseenter(function(){
			window.clearTimeout(_timer);
			$("#lunbo a").eq(i).stop();
		});
		$("#lunbo").mouseleave(function(){
			player(true);
		});
		$("#btn span").mouseenter(function(){
			eventHandle(this);
		});
		$("#arrow span.left").click(function(){
			eventHandle($("#btn span").eq(--i)[0]);
		});
		$("#arrow span.right").click(function(){
			eventHandle($("#btn span").eq(++i)[0]);
		});
	});
	
//获取brand无缝滚动图片
$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.brand;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$("#brand ul li a").eq(i).append(_html);
				}	
			}
		}
		
	});
});


//brand无缝滚动
$(function(){
	var _timer=0;
	function ss(){
		_timer=setInterval(function(){
			$('#ul1').animate({"left":"-900px"},1500,function(){
			$("#ul1").css("left",0).find("li").eq(0).appendTo($(this));
				
			});
			
		},5000);	
	}
	$('#left1').click(function(){
		window.clearInterval(_timer);
		$('#ul1').animate({"left":"-900px"},1500,function(){
			$("#ul1").css("left",0).find("li").eq(0).appendTo($(this));
				
			});
		ss();
	});
	$('#right1').click(function(){
		window.clearInterval(_timer);
		$("#ul1").find("li").eq(2).insertBefore($("#ul1").find("li").eq(0));
		$("#ul1").css("left","-900px");
		$('#ul1').animate({"left":"0px"},1500,ss());
		
	});
	$('#ul1').mouseover(function(){
		window.clearInterval(_timer);
	});
	$('#ul1').mouseleave(function(){
		ss();
	});
	ss();
});

//获取brand 商标淡入淡出图片
$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.brandDown;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$("#brandDown #bD-left ul li a").eq(i).append(_html);
				}	
			}
		}
		
	});
});


//brand 商标淡入淡出效果
$(function(){
	$("#a1").click(function(){
		$(".bD-left").fadeOut("normal","linear",function(){
			$(".bD-left").find("li").eq(0).appendTo($(this));
			$(".bD-left").fadeIn("normal","linear");
		});
	});
	
	$("#a2").click(function(){
		$(".bD-left").fadeOut("normal","linear",function(){
			$(".bD-left").find("li").eq(2).insertBefore($(".bD-left").find("li").eq(0));
			$(".bD-left").fadeIn("normal","linear");
		});
	});
			
});


//潮流时装图片获取	
$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.trendLeft;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$("#trendLeft ul li a").eq(i).append(_html);
				}	
			}
		}
		
	});
});


$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.trendCenter;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$("#trendCenter a").eq(i).append(_html);
				}	
			}
		}
		
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.trendRight;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$("#trendRight ul li a").eq(i).append(_html);
				}	
			}
		}
		
	});
});


//好店夯货图片获取
$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.goodLeft;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$(".goodLeft ul li a").eq(i).append(_html);
				}	
			}
		}
		
	});
});


$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.goodCenter;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$(".goodCenter a").eq(i).append(_html);
				}	
			}
		}
		
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.goodRight;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$(".goodRight ul li a").eq(i).append(_html);
				}	
			}
		}
		
	});
});


//欧美图片获取
$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.oumeiLeft;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$(".oumeiLeft ul li a").eq(i).append(_html);
				}	
			}
		}
		
	});
});


$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.oumeiCenter;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$(".oumeiCenter a").eq(i).append(_html);
				}	
			}
		}
		
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.oumeiRight;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$(".oumeiRight ul li a").eq(i).append(_html);
				}	
			}
		}
		
	});
});


//休闲图片获取
$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.xiuxianLeft;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$(".xiuxianLeft ul li a").eq(i).append(_html);
				}	
			}
		}
		
	});
});


$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.xiuxianCenter;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$(".xiuxianCenter a").eq(i).append(_html);
				}	
			}
		}
		
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/pictures.json",
		async:true,
		success:function(data){
			var _array=data.images.xiuxianRight;
			if(_array!=null){
				var _html="";
				for(var i=0;i<_array.length;i++){
					_html="<img src="+_array[i]+"/>";
					$(".xiuxianRight ul li a").eq(i).append(_html);
				}	
			}
		}
		
	});
});



$(function(){
	showYohu();
	hideYohu();
	eventHandle();
	yohu();
	showCart();
	hideCart();
	eventHandle1();
	showClothes();
	showShoes();
	showBags();
	showPeishi();
});
