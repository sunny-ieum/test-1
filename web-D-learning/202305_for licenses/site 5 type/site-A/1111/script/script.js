$(function(){
    // 슬라이드 : 페이드 효과
    let currentIndex = 0;
    $(".slider").hide().first().show();

    setInterval(function(){
        let nextIndex = (currentIndex+1) % 3; // 0 1 2  0 1 2 

        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000);

    // 메뉴 : 서브메뉴 하나씩 나오는
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(300);
    });

    // 탭 메뉴
    const tabBtn = $(".info-menu > a");
    const tabCont = $(".info-cont > div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });

    // 레이어 팝업
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });

});