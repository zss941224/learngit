/*YOHUBUY 有货，导航栏下拉列表   */
function showYohu(){
	var _nav=document.getElementById("nav1");
	_nav.children[0].style.backgroundColor="#dcdcdc";
	_nav.children[1].style.display="block";
}

function hideYohu(){
	var _nav=document.getElementById("nav1");
	_nav.children[0].style.backgroundColor="#f4f4f4";
	_nav.children[1].style.display="none";
	
}


/*YOHUBUY 有货，手机版扫码下拉菜单  */
function showMa(){
	var _li1=document.getElementById("li1");
	var _tele=document.getElementById("telephone");
	_li1.style.backgroundColor="#dcdcdc";
	_tele.style.display="block";
}

function hideMa(){
	var _li1=document.getElementById("li1");
	var _tele=document.getElementById("telephone");
	_li1.style.backgroundColor="#f4f4f4";
	_tele.style.display="none";
}


function eventHandle(){
	var _nav=document.getElementById("nav1");
	var _li1=document.getElementById("li1");
	var _tele=document.getElementById("telephone");
	
	_nav.children[0].onmouseover=showYohu;
	_nav.children[0].onmouseout=hideYohu;
	
	_nav.children[1].onmouseover=showYohu;
	_nav.children[1].onmouseout=hideYohu;
	
	_li1.onmouseover=showMa;
	_li1.onmouseout=hideMa;
	
	_tele.onmouseover=showMa;
	_tele.onmouseout=hideMa;
}


function yohu(){
	var _self=this;
	var _name1=document.getElementById("name");
	var _arr1=["集团官网","男生潮流","女生潮流","物趣分享","潮流嘉年华"];
	var _arr2=["YOHO!","YOHO!BOYS","YOHO!GIRLS","YOHO!SHOW","YOHO'HOOD"];
	
	for(var i=0;i<_name1.children.length;i++){
		
		(function(i){
			_name1.children[i].onmouseover=function(){
			this.innerHTML=_arr1[i];
			}
		})(i);	
		
		(function(i){
			_name1.children[i].onmouseout=function(){
			this.innerHTML=_arr2[i];
			}
		})(i);	
	
	}
}

