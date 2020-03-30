// index
$(function(){
	//메인페이지 스크롤시 d 영역 배경색과 moon 배경색 바꾸기
	var dTop = $('.d').offset().top;
	$(window).scroll(function(e) {
		var scrTop = $(window).scrollTop();
		
		if(scrTop > dTop-100){
			$('.d').css({"background-color":"#333b58"});
			$('.moon').css({"background-color":"white", "right":"15px", "top":"5px"});
		}
    });


});
