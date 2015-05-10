$(document).ready(function() {
  $(window).resize(function() {
    $('.row').height($(window).height());
  }).resize();
});

// Handle clicks.
$(document).on('click', '#bottomdiv', function() {
  $('html, body').animate({
       scrollTop: $('#bottom').offset().top
     }, 750);

     return false;
});

/*
var distance = $('div').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        // Your div has reached the top
    }
});
*/

/*$('.bottom').on('click', function () {
    var ele = $(this).closest("body").find(".row yellow");
    $("body").animate({
         scrollTop: $(ele).offset().top
                    }, 100);
    return false;
});*/

/*jQuery(function($) {

  var $sections = $('.row'),
    $animContainer = $('html, body'),
    $document = $(document),
    numSections = $sections.length,
    currSection = 0,
    isAnimating = false;

  // Animate to a specific index.
  var gotoSection = function(index) {
    isAnimating = true;
    $animContainer.animate({
      scrollTop: $sections.eq(index).offset().top
    }, 750, function () {
      isAnimating = false;
    });
  };

  // Advance to next or previous section.
  var handleAction = function(direction) {
    if (isAnimating) { return false; }

    if (direction === 'prev' && currSection > 0) { currSection--; }
    else if (direction === 'next' && currSection < numSections - 1) { currSection++; }
    else { return false; } // This shouldn't happen.

    gotoSection(currSection);
  };

  // Handle clicks.
  $document.on('click', '.action', function() {
    handleAction($(this).data('direction'));
  });

  // Handle keyboard input.
  $document.keyup(function(e){
    if (e.keyCode === 38) { handleAction('prev'); } // Up arrow.
    if (e.keyCode === 40) { handleAction('next'); } // Down arrow.
  });

});*/
