
$(document).ready(function() {

// header

  $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
    delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
    if (delta >= 0) {
      $('#header').addClass('scrollUp');
      $('#header').removeClass('scrollDown');
    } else {
      $('#header').removeClass('scrollUp');
      $('#header').addClass('scrollDown');
    }
  });

});

// slide
$(function () { 
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "50%" // this works just fine with duration 0 as well
            // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });

    // get all slides
    var slides = document.querySelectorAll(".section__start" );

    // создать сцену для каждого слайда 
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i], {pushFollowers: false})
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    };


// black theme

    $('.theme').click(function(){
        if ($('.logo_wrap').hasClass('black-style')) {
            $('.logo_wrap').removeClass('black-style');
        } else{
            $('.logo_wrap').addClass('black-style');
        }
        
    });

// guides grid

    $('#grid__off').click(function(){
            $('#grid__off').parent('.switch_off').removeClass('active');
            $('#grid__on').parent('.switch_on').addClass('active');
            $('.grid__img').addClass('active');

    });


    $('#grid__on').click(function(){
            $('.grid__img').removeClass('active');
            $('#grid__on').parent('.switch_on').removeClass('active');
            $('#grid__off').parent('.switch_off').addClass('active');

    });


// guides area

    $('#area__off').click(function(){
            $('#area__off').parent('.switch_off').removeClass('active');
            $('#area__on').parent('.switch_on').addClass('active');
            $('.area__img').addClass('active');

    });


    $('#area__on').click(function(){
            $('.area__img').removeClass('active');
            $('#area__on').parent('.switch_on').removeClass('active');
            $('#area__off').parent('.switch_off').addClass('active');


    });


});




