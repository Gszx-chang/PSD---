
window.onload = function(){
    var oTop = document.getElementById("weixin");
    var screenw = document.documentElement.clientWidth || document.body.clientWidth;
    var screenh = document.documentElement.clientHeight || document.body.clientHeight;
    oTop.style.left = screenw - oTop.offsetWidth - 10 + "px";
    oTop.style.top = screenh - oTop.offsetHeight - 30 + "px";
    window.onscroll = function(){
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        oTop.style.top = screenh - oTop.offsetHeight + scrolltop -30 +"px";
    }
}  

function gettop(){
    document.documentElement.scrollTop = document.body.scrollTop =0;
  }




var area = document.getElementById("portrait-con");
var speed = 50;
area.scrollLeft = 0;
function conmove() {
	if (area.scrollLeft >= 655) {
		area.scrollLeft = 0;
	} else {
		area.scrollLeft++;
	}
}
var myScroll = setInterval("conmove()", speed);
area.onmouseover = function() {
	clearInterval(myScroll)
}
area.onmouseout = function() {
	myScroll = setInterval("conmove()", speed)
}

