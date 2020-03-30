$(function() { //문서가 준비되면 바로 실행
     //검색버튼을 클릭하면 검색창이 팝업되게
    $('.btnS').click(function(){
        $('.sPop').fadeIn();
    });
    //검색창에서 닫기버튼 클릭하면 검색창 안보이게
    $('.btnClose').click(function(){
        $('.sPop').fadeOut();
    });
    //메인 메뉴에 마우스 올리면 서브 메뉴 보이게
    $('.gnb > li').hover(function(){
        $(this).children('.sub').stop().slideDown();
    }, function(){
        $('.gnb > li > .sub').stop().slideUp();
    });
    //검색창의 탭메뉴 - 클릭한 탭에 active
    $('.sLink > a').click(function(){
        $('.sLink > a').removeClass('act');
        $(this).addClass('act');
        var idx = $(this).index();
        $('.sCon').hide();
        $('.sCon').eq(idx).show();
    });
    /*$('.sL1').click(function(){
        $('.sCon').hide();
         $('.sCon1').show();           
    })
    $('.sL2').click(function(){
        $('.sCon').hide();
         $('.sCon2').show();           
    })
    $('.sL3').click(function(){
        $('.sCon').hide();
         $('.sCon3').show();           
    })*/
    
});





