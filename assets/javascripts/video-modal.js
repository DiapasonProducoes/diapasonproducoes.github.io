$(function(){
  'use strict';




  // var modal = $('#modal'),
  //     modalButton = $('[data-video]');

  // modalButton.on('click', function(){
  //   modal.modal('toggle');
  // });

  videojs("my-video").ready(function(){
    resizeVideo();
  });


  window.addEventListener('resize', function(event){
    resizeVideo();
  });

  function resizeVideo() {
    var video = $('.vjs-tech'),
        windowSize = $(window).width(),
        currentLeft = (2541 - windowSize) / 2;

    if (windowSize <= 767) {
      currentLeft = 0;
    }

    $('.video-left').css({ left: '-' + currentLeft + 'px' });
  }
});
