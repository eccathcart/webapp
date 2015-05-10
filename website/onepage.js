
// Resizes divs.
$(document).ready(function() {
  $(window).resize(function() {
    $('.row').height($(window).height());
  }).resize();
});

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
