import '../css/index.css'
import $ from 'jquery' 
// document.onscroll = (e) => {
//   const heroHeight = $('.hero').height()
//   if ($(window).scrollTop()>=heroHeight-80) {
//     // $('#nav-float').removeClass('hidden')
//     $('#nav-float').fadeIn().css("display", "flex")
//     // $('#nav-float').removeClass('blur-1').addClass('blur-1')
//   } else {
//     // $('#nav-float').addClass('hidden')
//     $('#nav-float').fadeOut()
//   }
// }

$('a[href*="#"]:not([href="#"])').click(function() {
  $('.nav-link').each((idx, item) => {
    $(item).removeClass('active')
    if ($(item).html().toLowerCase() == this.hash.slice(1)) {
      $(item).addClass('active')
    }
  })
  $("#menu").delay(100).hide();
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          $('html, body').animate({
              scrollTop: target.offset().top-60
          }, 1000);
          return false;
      }
  }
});
const video = $('#home-video')[0]
$('#play').on('click',function(){
  console.log()
  if($('#play').data('state') === 'pause') {
    $('#play').data('state', 'play') 
    // $('#play').children(0)
    $('#play>img')[0].src=`src/img/play.svg`
    video.pause()
  } else {
    $('#play').data('state','pause')
    $('#play>img')[0].src=`src/img/pause.svg`
    video.play()
  }
});
$('#volume').on('click',function(){
  console.log()
  if($('#volume').data('state') === 'off') {
    $('#volume').data('state', 'on') 
    $('#volume>img')[0].src=`src/img/volume-medium.svg`
    video.muted=false
  } else {
    $('#volume').data('state','off')
    $('#volume>img')[0].src=`src/img/volume-off.svg`
    video.muted=true
  }
});

$('#menu-icon').on('click', function(){
  $("#menu").show()
  $("#menu-content").animate({
    width: '160px'
  }, 100);
})

$("#close").on('click', function(){
  $("#menu-content").animate({
    width: '0px'
  },100)
  setTimeout(() => {
    $("#menu").hide();
  }, 100)
 
})

// $('#menu-icon').on()