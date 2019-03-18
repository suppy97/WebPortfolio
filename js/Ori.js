$(function(){

  <!--back_image-->
  $('.1').click(function(){
    $('.sb2').removeClass('active');
    $('.sb1').addClass('active');
  });
  $('.2').click(function(){
      $('.sb1').removeClass('active');
      $('.sb2').addClass('active');
  });
  <!--colorChange-->
  $('footer img').click(function(){
    $('body').css('background-color','#fff').css('color','black');
    $('#top').css('background','url("../images/top2.png")');
    $('.button').css('color','black').css('border','2px solid black').css('background-color','#fff');
    $('.button:hover::after ').css('color','#fff').css('background-color','black');
    $('.hamburger__icon, .hamburger__icon:before, .hamburger__icon:after').css('background-color','black');
    $('.hamburger.active .hamburger__icon:before, .hamburger.active .hamburger__icon:after').css('background-color','black');

  })
  $('.fat-nav a').hover(
    function(){
      $(this).animate({
        'font-size' :'50px'
      },240);
    },
    function(){
      $(this).animate({
        'font-size':'30px'
      },240);
    }
  );
  <!--scroll miss WHAT!?-->
  $('.fat-nav a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html body').animate({
      'scrollTop':position
    },1000);
  });
});
