$(function () {
    //예금적금의 질문을 클릭하면 답이 토글되게, 화살표 모양바뀌게
    //화살표 모양 기본은 다운
    $('.yList li a').click(function (e) {
        
        if ($(this).hasClass('down')) {
            $(this).removeClass('down');
            $(this).addClass('up');
            $(this).next('.answer').slideDown();
        } else {
            $(this).removeClass('up');
            $(this).addClass('down');
            $(this).next('.answer').slideUp();
        }

        return false;
    });

});
