(function($){

  $('.main-btn').mouseenter(function(){
    $('.sub').stop().slideUp(0);
    $(this).next().stop().slideDown(300);

    $('.main-btn').removeClass('hover');
    $(this).addClass('hover');
  });

  $('#nav').mouseleave(function(){
    $('.sub').stop().slideUp(300)
    $('.main-btn').removeClass('hover');
  });
  
  //메인슬라이드
  let cnt=0;
  const slideWrap = $('.slide-wrap'); 
  const n = 3;  

  //1.메인슬라이드함수
  function mainSlide(){
    slideWrap.animate({left: `${-100*cnt}%`}, 600, function(){
      cnt>n-1?cnt=0:cnt;
      slideWrap.animate({left: `${-100*cnt}%`}, 0);
    })
  }

  //2.다음카운트함수
  function nextCount(){
    cnt++;
    mainSlide();
  }

  //3.자동타이머함수
  function autoTimer(){
    setInterval(nextCount, 3000);
  }
  autoTimer();

  //공지사항 & 갤러리 탭메뉴 클릭 이벤트
  //갤러리버튼 클릭
  $('.gallery-btn').click(function(){
      $('.notice-btn').addClass('on');
      $('.gallery-btn').addClass('on');
  });

  //공지사항버튼 클릭
  $('.notice-btn').click(function(){
      $('.notice-btn').removeClass('on');
      $('.gallery-btn').removeClass('on');
  });



})(jQuery);