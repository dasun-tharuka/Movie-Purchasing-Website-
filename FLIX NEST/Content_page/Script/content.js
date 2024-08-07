// showing go up button when scroll down
window.addEventListener('scroll',function(){
    var scrollPosition = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    if (scrollPosition > (scrollHeight/2) - clientHeight) {
        document.getElementById('goUp').style.bottom = "190px";
    }else{
        document.getElementById('goUp').style.bottom = "-60px";
    }
});