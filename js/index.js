//번역 버튼 클릭
$('#topBack>.trans').click(function () {
    $('#topBack>.trans').addClass('trans08');
    setTimeout(function () {
        $('#topBack>.trans').removeClass('trans08');
    }, 500)
    $('#topBack>p, .menuTab>ul>li>p, .title, #aboutCon>p, #aboutCon>span, .whatTitle>p, .WhatTxt>p, .WhatSpan, .portBox>div>p, .portBox>div>span, article>p, .portBox>div>ul>li>p, .select>div>p, .select>div>span, .contacCon>div>span, .contacCon>div>a>p, .menuTab2 > ul > li > p, #contact>span, #contact>i').stop().toggleClass('none');
    $('#topBack>.trans>span').stop().toggleClass('transNone');
    
    $('.menuTab>ul>li>div, .titleBar, .WhatBar>.barCon>div>div').toggleClass('liDivb')
    $('.titleBar2').toggleClass('liDivb2')
    $('#topBack').toggleClass('topEng')
    $('.menuTab2').toggleClass('Tab2Eng')
    $('.contacCon>div>p>i').toggleClass('iKr')
});

//우측 메뉴버튼 클릭
$('.topBtn').click(function () {
    $('.br1').toggleClass('br1a');
    $('.br2').toggleClass('br2a');
    $('.br3').toggleClass('br3a');
    $('#left').toggleClass('menuWid');
    $('#topBack, #bottom').toggleClass('menuTop');
    $('#topBack>p').toggleClass('menuTopTxt');
    $('#topBack>.trans').toggleClass('menuTopTrans');
    $('#topBack>.soonlogoBlack').toggleClass('menuTopImg');
    $('.topBtn').toggleClass('menuBtn');
    $('.menuTab').toggleClass('menuTabOpen');
    $('#back').toggleClass('backOn');
    $('.menuTab2').toggleClass('menuTab2open');
})

//메뉴버튼 클릭 후 배경 클릭
$('#back').click(function () {
    $('.br1').toggleClass('br1a');
    $('.br2').toggleClass('br2a');
    $('.br3').toggleClass('br3a');
    $('#left').toggleClass('menuWid');
    $('#topBack, #bottom').toggleClass('menuTop');
    $('#topBack>p').toggleClass('menuTopTxt');
    $('#topBack>.trans').toggleClass('menuTopTrans');
    $('#topBack>.soonlogoBlack').toggleClass('menuTopImg');
    $('.topBtn').toggleClass('menuBtn');
    $('.menuTab').toggleClass('menuTabOpen');
    $('#back').toggleClass('backOn');
    $('.menuTab2').toggleClass('menuTab2open');
})

//메뉴 탭 li 관련
$('.menuTab>ul>li').mouseenter(function () {
    $(this).children('div').addClass('liDiv')
})
$('.menuTab>ul>li').mouseleave(function () {
    $(this).children('div').removeClass('liDiv')
})

//문자, 메일 복사

function copyPhone(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}

$('.phoneNum').stop().click(function () {
    copyPhone('010-8443-9554');
    $('.contacCon>div>.clip').removeClass('clipNone');
    setTimeout(function () {
        $('.contacCon>div>.clip').addClass('clipNone');
    }, 3000)

    $(this).children('i').addClass('fw600');
    setTimeout(function () {
        $('.phoneNum>i').removeClass('fw600');
    }, 500)
});

$('.emailAdd').stop().click(function () {
    copyPhone('tnssha@gmail.com');
    $('.contacCon>div>.clip2').removeClass('clipNone2');
    setTimeout(function () {
        $('.contacCon>div>.clip2').addClass('clipNone2');
    }, 3000);

    $(this).children('i').addClass('fw600');
    setTimeout(function () {
        $('.emailAdd>i').removeClass('fw600');
    }, 500)
});

//문자, 메일 보내기 
$('.sendMail').click(function () {
    location.href = 'mailto:tnssha@gmail.com'
})
$('.sendSms').click(function () {
    location.href = 'sms:010-8443-9554'
})
