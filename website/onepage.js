
// Resizes divs.
/*
$(document).ready(function() {
  $(window).resize(function() {
    $('.row').height($(window).height());
  }).resize();
});*/

/*
// Make header fixed after scrolling a bit.
$(window).scroll(function () {
    if($(window).scrollTop() > $('#navigation').offset().top && !($('#navigation').hasClass('fixed'))){
    $('#navigation').addClass('fixed');
    } else if ($(window).scrollTop() == 0){
    $('#navigation').removeClass('fixed');
    }
});
*/
// Handle clicks.
$(document).on('click', '#topdiv', function() {
  $('html, body').animate({
       scrollTop: $('#top').offset().top
     }, 750);

     return false;
});

$(document).on('click', '#middlediv', function() {
  $('html, body').animate({
       scrollTop: $('#middle').offset().top
     }, 750);

     return false;
});


$(document).on('click', '#bottomdiv', function() {
  $('html, body').animate({
       scrollTop: $('#bottom').offset().top
     }, 750);

     return false;
});
