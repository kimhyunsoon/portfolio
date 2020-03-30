//좌우 버튼 색상 변경
var BtnColor = function () {
    var Btn = $('.rightBtn>p, .rightBtn>span, .leftBtn>p, .leftBtn>span')

    if ($('.dot1').hasClass('zdot')) {
        Btn.addClass('hansangBtn')
    } else {
        Btn.removeClass('hansangBtn')
    }

    if ($('.dot2').hasClass('zdot')) {
        Btn.addClass('coffeeBtn')
    } else {
        Btn.removeClass('coffeeBtn')
    }

    if ($('.dot3').hasClass('zdot')) {
        Btn.addClass('luigiBtn')
    } else {
        Btn.removeClass('luigiBtn')
    }
}

//오른쪽 버튼 액션
var playR = function () {
    var zon = $('.zon');
    var zdot = $('.zdot');
    var zwide = $('.zwide')
    $('.dot>div').addClass('BtnNone');
    $('.rightBtn').removeClass('rBt');
    zon.siblings('.z40').addClass('opa1');
    zon.removeClass('opa1');
    zdot.siblings('.z4').addClass('zdot');
    zdot.removeClass('zdot');
    BtnColor();
    setTimeout(function () {
        zon.removeClass('z50');
        zon.siblings('.z40').addClass('z50');
        zon.siblings('.z40').removeClass('z40');
        zon.siblings('.z30').addClass('z40');
        zon.siblings('.z30').removeClass('z30');
        zon.addClass('z30');
        zon.removeClass('zon');
        $('.z50').addClass('zon');
        zwide.removeClass('z5');
        zwide.siblings('.z4').addClass('z5');
        zwide.siblings('.z4').removeClass('z4');
        zwide.siblings('.z3').addClass('z4');
        zwide.siblings('.z3').removeClass('z3');
        zwide.addClass('z3');
        zwide.removeClass('zwide');
        $('.z5').addClass('zwide');
    }, 500)
    setTimeout(function () {
        $('.z50>div>.illBack').removeClass('top300');
        $('.z40>div>.illBack').addClass('top300');
        $('.z30>div>.illBack').addClass('top300');
        $('.z50>div>.logo').removeClass('left100');
        $('.z40>div>.logo').addClass('left100');
        $('.z30>div>.logo').addClass('left100');
    }, 600)
    setTimeout(function () {
        $('.z50>div>.illIll').removeClass('top150');
        $('.z40>div>.illIll').addClass('top150');
        $('.z30>div>.illIll').addClass('top150');
        $('.z50>div>a').removeClass('left50');
        $('.z40>div>a').addClass('left50');
        $('.z30>div>a').addClass('left50');
        $('.rightBtn').addClass('rBt');
        $('.dot>div').removeClass('BtnNone');
    }, 1000)
}

//왼쪽 버튼 액션
var playL = function () {
    var zon = $('.zon');
    var zdot = $('.zdot');
    var zwide = $('.zwide');
    $('.dot>div').addClass('BtnNone');
    $('.leftBtn').removeClass('lBt');
    zon.siblings('.z30').addClass('opa1');
    zon.removeClass('opa1');
    zdot.siblings('.z3').addClass('zdot');
    zdot.removeClass('zdot');
    BtnColor();
    setTimeout(function () {
        zon.removeClass('z50');
        zon.siblings('.z30').addClass('z50');
        zon.siblings('.z30').removeClass('z30');
        zon.siblings('.z40').addClass('z30');
        zon.siblings('.z40').removeClass('z40');
        zon.addClass('z40');
        zon.removeClass('zon');
        $('.z50').addClass('zon');
        zwide.removeClass('z5');
        zwide.siblings('.z3').addClass('z5');
        zwide.siblings('.z3').removeClass('z3');
        zwide.siblings('.z4').addClass('z3');
        zwide.siblings('.z4').removeClass('z4');
        zwide.addClass('z4');
        zwide.removeClass('zwide');
        $('.z5').addClass('zwide');
    }, 500)
    setTimeout(function () {
        $('.z50>div>.illBack').removeClass('top300');
        $('.z40>div>.illBack').addClass('top300');
        $('.z30>div>.illBack').addClass('top300');
        $('.z50>div>.logo').removeClass('left100');
        $('.z40>div>.logo').addClass('left100');
        $('.z30>div>.logo').addClass('left100');
    }, 600)
    setTimeout(function () {
        $('.z50>div>.illIll').removeClass('top150');
        $('.z40>div>.illIll').addClass('top150');
        $('.z30>div>.illIll').addClass('top150');
        $('.z50>div>a').removeClass('left50');
        $('.z40>div>a').addClass('left50');
        $('.z30>div>a').addClass('left50');
        $('.leftBtn').addClass('lBt');
        $('.dot>div').removeClass('BtnNone');
    }, 1000)
}

//오른쪽 버튼 클릭
$(document).stop().on('click', '.rBt', function () {
    playR();
})

//왼쪽 버튼 클릭
$(document).stop().on('click', '.lBt', function () {
    playL();
})

// 네비 dot 클릭
$(document).stop().on('click', '.z4', function () {
    if ($(document).width() <= 1300) {
        $('#playStop').removeClass('playSlide')
        $('#playStop').addClass('stopSlide')
        $('.playBtn1').addClass('playBtn1a');
        $('.playBtn2').addClass('playBtn2a');
        $('.playBtn3').addClass('playBtn3a');
        clearInterval(playAuto);
        playR();
    } else {
        playR();
    }
})
$(document).stop().on('click', '.z3', function () {
    if ($(document).width() <= 1300) {
        $('#playStop').removeClass('playSlide')
        $('#playStop').addClass('stopSlide')
        $('.playBtn1').addClass('playBtn1a');
        $('.playBtn2').addClass('playBtn2a');
        $('.playBtn3').addClass('playBtn3a');
        clearInterval(playAuto);
        playL();
    } else {
        playL();
    }
})

// 자동 배너롤링
playAuto = setInterval(function () {
    playR();
}, 5000)

//마우스 진입시 클리어
$('#banner').stop().mouseenter(function () {
    if ($(document).width() > 1300) {
        clearInterval(playAuto);
    } else {}
})

//마우스 이탈시 재시작
$('#banner').stop().mouseleave(function () {
    if ($(document).width() > 1300) {
        playAuto = setInterval(function () {
            playR();
        }, 5000);
    } else {}
})






//재생 버튼 관련
$('#playStop').click(function () {
    $(this).addClass('playStop2')
    setTimeout(function () {
        $('#playStop').removeClass('playStop2');
    }, 500)
})
$(document).stop().on('click', '.playSlide', function () {
    $(this).removeClass('playSlide')
    $(this).addClass('stopSlide')
    setTimeout(function () {
        $('.playBtn1').addClass('playBtn1a');
        $('.playBtn2').addClass('playBtn2a');
        $('.playBtn3').addClass('playBtn3a');
    }, 500)
    clearInterval(playAuto);
})
$(document).stop().on('click', '.stopSlide', function () {
    $(this).removeClass('stopSlide')
    $(this).addClass('playSlide')
    setTimeout(function () {
        $('.playBtn1').removeClass('playBtn1a');
        $('.playBtn2').removeClass('playBtn2a');
        $('.playBtn3').removeClass('playBtn3a');
    }, 500)
    playAuto = setInterval(function () {
        playR();
    }, 5000);

})
