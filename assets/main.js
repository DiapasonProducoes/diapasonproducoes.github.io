$(function(){
  'use strict';
  var sliders = $('[data-slider-container]');

  for(var i=0; i < sliders.length; i++) {
    var sliderIndex = $(sliders[i]).attr('data-slider-container');
    new Slider('[data-slider-container="' + sliderIndex + '"]');
  }
});
