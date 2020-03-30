//스크롤시 메뉴리스트 반응
$(window).scroll(function () {
    var about = $('#about').offset().top;
    var aboutH = $('#about').outerHeight();
    var whatido = $('#whatido').offset().top;
    var whatidoH = $('#whatido').outerHeight();
    var portfolio = $('#portfolio').offset().top;
    var portfolioH = $('#portfolio').outerHeight();
    var contact = $('#contact').offset().top;
    var contactH = $('#contact').outerHeight();
    var scroll = $(window).scrollTop();

    if (scroll >= contact - 200 && scroll < contact + contactH - 200) {
        $('.menuTab>ul>li:eq(3)>p').addClass("bold");
        $('.menuTab>ul>li:eq(3)>div').addClass("liDiv2");
        $('.menuTab>ul>li:eq(0)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(0)>div').removeClass("liDiv2");
        $('.menuTab>ul>li:eq(1)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(1)>div').removeClass("liDiv2");
        $('.menuTab>ul>li:eq(2)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(2)>div').removeClass("liDiv2");

        $('.menuTab2>ul>li:eq(3)>p:eq(0)').addClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(3)>p:eq(1)').addClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(2)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(2)>p:eq(1)').removeClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(1)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(1)>p:eq(1)').removeClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(0)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(0)>p:eq(1)').removeClass("Tab2Pont2");

    } else if (scroll >= portfolio - 200 && scroll < portfolio + portfolioH - 200) {
        $('.menuTab>ul>li:eq(2)>p').addClass("bold");
        $('.menuTab>ul>li:eq(2)>div').addClass("liDiv2");
        $('.menuTab>ul>li:eq(0)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(0)>div').removeClass("liDiv2");
        $('.menuTab>ul>li:eq(1)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(1)>div').removeClass("liDiv2");
        $('.menuTab>ul>li:eq(3)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(3)>div').removeClass("liDiv2");

        $('.menuTab2>ul>li:eq(2)>p:eq(0)').addClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(2)>p:eq(1)').addClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(0)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(0)>p:eq(1)').removeClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(1)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(1)>p:eq(1)').removeClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(3)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(3)>p:eq(1)').removeClass("Tab2Pont2");

    } else if (scroll >= whatido - 200 && scroll < whatido + whatidoH - 200) {
        $('.menuTab>ul>li:eq(1)>p').addClass("bold");
        $('.menuTab>ul>li:eq(1)>div').addClass("liDiv2");
        $('.menuTab>ul>li:eq(0)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(0)>div').removeClass("liDiv2");
        $('.menuTab>ul>li:eq(2)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(2)>div').removeClass("liDiv2");
        $('.menuTab>ul>li:eq(3)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(3)>div').removeClass("liDiv2");

        $('.menuTab2>ul>li:eq(1)>p:eq(0)').addClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(1)>p:eq(1)').addClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(2)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(2)>p:eq(1)').removeClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(0)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(0)>p:eq(1)').removeClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(3)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(3)>p:eq(1)').removeClass("Tab2Pont2");

    } else if (scroll >= about - 200 && scroll < about + aboutH - 200) {
        $('.menuTab>ul>li:eq(0)>p').addClass("bold");
        $('.menuTab>ul>li:eq(0)>div').addClass("liDiv2");
        $('.menuTab>ul>li:eq(1)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(1)>div').removeClass("liDiv2");
        $('.menuTab>ul>li:eq(2)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(2)>div').removeClass("liDiv2");
        $('.menuTab>ul>li:eq(3)>p').removeClass("bold");
        $('.menuTab>ul>li:eq(3)>div').removeClass("liDiv2");

        $('.menuTab2>ul>li:eq(0)>p:eq(0)').addClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(0)>p:eq(1)').addClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(2)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(2)>p:eq(1)').removeClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(1)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(1)>p:eq(1)').removeClass("Tab2Pont2");
        $('.menuTab2>ul>li:eq(3)>p:eq(0)').removeClass("Tab2Pont");
        $('.menuTab2>ul>li:eq(3)>p:eq(1)').removeClass("Tab2Pont2");

    } else {
        $('.menuTab>ul>li>p').removeClass("bold");
        $('.menuTab>ul>li>div').removeClass("liDiv2");

        $('.menuTab2>ul>li>.kr2').addClass("Tab2Pont");
        $('.menuTab2>ul>li>.eng2').addClass("Tab2Pont2");
    }
})

//메뉴리스트 클릭시 스크롤 반응
$('.menuTab>ul>li').click(function () {
    var scrollPosition = $($(this).attr("data-target")).offset().top;
    $('html, body').animate({
        scrollTop: scrollPosition
    }, 200);
});

$('.menuTab2>ul>li>p').click(function () {
    var thi = $(this);
    var scrollPosition = $($(this).parent().attr("data-target")).offset().top;
    thi.addClass('trans08');
    setTimeout(function () {
        thi.removeClass('trans08');
    }, 500)
    $('html, body').animate({
        scrollTop: scrollPosition
    }, 200);
});

//홈로고 클릭시 스크롤 반응
$('#topBack>.soonlogoBlack').click(function () {
    $('#topBack>.soonlogoBlack').addClass('trans08');
    setTimeout(function () {
        $('#topBack>.soonlogoBlack').removeClass('trans08');
    }, 500)
    $('html, body').animate({
        scrollTop: 0
    }, 200);
})
$('#topBack>.soonlogoWhi').click(function () {
    $('#topBack>.soonlogoWhi').addClass('trans08');
    setTimeout(function () {
        $('#topBack>.soonlogoWhi').removeClass('trans08');
    }, 500)
    $('html, body').animate({
        scrollTop: 0
    }, 200);
})

//스크롤시 내부 콘텐츠 반응
//$(window).scroll(function () {
//    var about = $('#about').offset().top;
//    var aboutH = $('#about').outerHeight();
//    var whatido = $('#whatido').offset().top;
//    var whatidoH = $('#whatido').outerHeight();
//    var portfolio = $('#portfolio').offset().top;
//    var portfolioH = $('#portfolio').outerHeight();
//    var contact = $('#contact').offset().top;
//    var contactH = $('#contact').outerHeight();
//    var scroll = $(window).scrollTop();
//
//    if (scroll >= about - 200 && scroll < about + aboutH - 200) {
//        $('.titleBack1').removeClass('bot150')
//        $('.aboutImg').removeClass('mtop100')
//        $('.titleBack2').removeClass('right50')
//        $('.titleBack3').removeClass('right50')
//        $('.titleBar2').removeClass('left430')
//        $('#aboutCon>p, #aboutCon>span').removeClass('right0')
//        $('.dev').addClass('mtop100');
//        $('.des').addClass('mbot100');
//        $('.other').addClass('mleft100');
//        $('.barCon>div>div').addClass('wid0');
//    } else if (scroll >= whatido - 200 && scroll < whatido + whatidoH - 200) {
//        $('#aboutCon>p, #aboutCon>span').addClass('right0')
//        $('.titleBack2').addClass('right50')
//        $('.titleBack3').addClass('right50')
//        $('.titleBar2').addClass('left430')
//        $('.titleBack1').addClass('bot150')
//        $('.aboutImg').addClass('mtop100')
//        $('.dev').removeClass('mtop100');
//        $('.des').removeClass('mbot100');
//        $('.other').removeClass('mleft100');
//        $('.barCon>div>div').removeClass('wid0');
//        $('.portBox').addClass('top420');
//    } else if (scroll >= portfolio - 200 && scroll < portfolio + portfolioH - 200) {
//        $('.dev').addClass('mtop100');
//        $('.des').addClass('mbot100');
//        $('.other').addClass('mleft100');
//        $('.barCon>div>div').addClass('wid0');
//        $('.portBox').removeClass('top420');
//        $('.contacCon>article').addClass('hei100');
//        $('.contacCon>div').addClass('opa0');
//        $('#contact>i').addClass('opa0');
//        $('#contact>span').addClass('opa0');
//    } else if (scroll >= contact - 200 && scroll < contact + contactH - 200) {
//        $('.portBox').addClass('top420');
//        $('.contacCon>article').removeClass('hei100');
//        $('.contacCon>div').removeClass('opa0');
//        setTimeout(function(){
//        $('#contact>i').removeClass('opa0');
//        $('#contact>span').removeClass('opa0');
//        },500)
//    } else {}
//})
