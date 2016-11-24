
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
