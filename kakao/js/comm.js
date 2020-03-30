// 공통
$(function (){
	//메뉴
	$(".menuBtn").click(function(e) {
        $('nav').slideDown();
    });
	$('.menuClose').click(function(e) {
        $('nav').slideUp();
    });

});