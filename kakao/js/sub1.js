//sub1	
$(function(){
	//슬라이더1
	$('.slider1').slick();
	//슬라이더2
	$('.slider2').slick({
		  dots: true,
		  infinite: true,
		  speed: 300,
		  arrows: false,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			}
		  ]
		});
/*	var ulLen = $('.slick-dots li').length * 20;
	$('.slick-dots').width(ulLen);
	$(window).resize(function(e) {
        var ulLen = $('.slick-dots li').length * 20;
		$('.slick-dots').width(ulLen);
    });*/

})	
	
