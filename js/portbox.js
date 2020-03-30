//포트폴리오 마우스 진입, 이탈 액션
$('.portBox>div').stop().mouseenter(function () {
    var bar1 = $(this).children('hr:eq(0)');
    var bar2 = $(this).children('hr:eq(1)');
    var bar3 = $(this).children('hr:eq(2)');
    var bar4 = $(this).children('hr:eq(3)');

    bar1.stop().toggleClass('hr1');
    setTimeout(function () {
        bar2.stop().toggleClass('hr2');
    }, 100)
    setTimeout(function () {
        bar3.stop().toggleClass('hr3');
    }, 200)
    setTimeout(function () {
        bar4.stop().toggleClass('hr4');
    }, 300)

    $('.portBox>div').removeClass('opa1');
    $(this).addClass('opa1');

    $(this).children('article').addClass('opa1');
    $(this).children('div').children('img').addClass('imgBig');
    $('.select>div').addClass('opa7');
})
$('.portBox>div').stop().mouseleave(function () {
    var bar1 = $(this).children('hr:eq(0)');
    var bar2 = $(this).children('hr:eq(1)');
    var bar3 = $(this).children('hr:eq(2)');
    var bar4 = $(this).children('hr:eq(3)');

    bar4.stop().toggleClass('hr4');
    setTimeout(function () {
        bar3.stop().toggleClass('hr3');
    }, 100)
    setTimeout(function () {
        bar2.stop().toggleClass('hr2');
    }, 200)
    setTimeout(function () {
        bar1.stop().toggleClass('hr1');
    }, 300)

    $(this).children('article').removeClass('opa1');
    $(this).children('div').children('img').removeClass('imgBig');
    $('.select>div').removeClass('opa7');
})
$('.portBox').mouseleave(function () {
    $('.portBox>div').addClass('opa1');
})

//포트폴리오 필터
$('.select>div>.krSpan').click(function () {
    $('.select>div>p').removeClass('krSel');
    $('.select>div>p').removeClass('engSel');
    $(this).addClass('krAll');
    $('.select>div>.engSpan').addClass('engAll');
    $('.portBox>div').removeClass('view1');
    $('.portBox>div').removeClass('view2');
    $('.portBox>div').removeClass('view3');
    $('.portBox>div').removeClass('view4');
    $('.portBox>div').removeClass('view5');
    $('.portBox>div').removeClass('view6');
    $('.portBox>div').addClass('view');
})
$('.select>div>.engSpan').click(function () {
    $('.select>div>p').removeClass('krSel');
    $('.select>div>p').removeClass('engSel');
    $(this).addClass('engAll');
    $('.select>div>.krSpan').addClass('krAll');
    $('.portBox>div').removeClass('view1');
    $('.portBox>div').removeClass('view2');
    $('.portBox>div').removeClass('view3');
    $('.portBox>div').removeClass('view4');
    $('.portBox>div').removeClass('view5');
    $('.portBox>div').removeClass('view6');
    $('.portBox>div').addClass('view');
})

$('.select>div>.krp').click(function () {
    $('.select>div>span').removeClass('krAll');
    $('.select>div>span').removeClass('engAll');
    $(this).toggleClass('krSel');
    $(this).siblings('.engp').toggleClass('engSel');
})
$('.select>div>.engp').click(function () {
    $('.select>div>span').removeClass('krAll');
    $('.select>div>span').removeClass('engAll');
    $(this).toggleClass('engSel');
    $(this).siblings('.krp').toggleClass('krSel');
})

$('.planningSel').click(function () {
    $('.portBox>div').removeClass('view');
    $('.planning').toggleClass('view1');

})
$('.designSel').click(function () {
    $('.portBox>div').removeClass('view');
    $('.design').toggleClass('view2');
})
$('.publishingSel').click(function () {
    $('.portBox>div').removeClass('view');
    $('.publishing').toggleClass('view3');
})
$('.desktopSel').click(function () {
    $('.portBox>div').removeClass('view');
    $('.desktop').toggleClass('view4');
})
$('.mobileSel').click(function () {
    $('.portBox>div').removeClass('view');
    $('.mobile').toggleClass('view5');
})
$('.responsiveSel').click(function () {
    $('.portBox>div').removeClass('view');
    $('.responsive').toggleClass('view6');
})
