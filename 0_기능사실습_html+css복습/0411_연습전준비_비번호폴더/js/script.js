
// submenu SlideDown 기능구현

$(".nav>li").mouseover(function(){
    $(this).children(".submenu").stop().sliderDown();
});

$(".nav>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});


// 메인이미지 슬라이드 기능

start();
var img = 2;
var now = 0;
function start() {
    $(".img>img").eq(0).siblings().css({"margin-left":"-2000px"});
    setInterval(function(){slide();},2000);
    }
function slide() {
    now = now==imgs?0:now+=1;
    $(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});
    $(".imgs>img").eq(now).css({"margin-left":"0px"});
}

