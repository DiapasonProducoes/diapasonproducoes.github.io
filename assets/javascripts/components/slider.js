function Slider(sliderContainer) {
  'use strict';

  var self                = this,
      slider              = $(sliderContainer),
      slides              = null,
      slidesSize          = 0,
      slideList           = null,
      currentSlide        = null,
      currentSlideNumber  = 0,
      activeSlide         = null,
      activeSlideNumber   = 0;

  self.init = function() {
    slides      = self.findSlides();
    slideList   = self.findSlideList();
    slidesSize  = self.findSlideSize();

    self.generateSlider();
    self.update();
  };

  self.update = function() {
    currentSlide        = self.findCurrentSlide();
    currentSlideNumber  = self.findCurrentSlideNumber();
  };

  self.findSlides = function() {
    return slider.find('[data-slide]');
  };

  self.findSlideList = function(){
    return slider.find('[data-slider-list]');
  };

  self.findSlideSize = function(){
    return slider.find('[data-slide]').length;
  };

  self.generateSlider = function() {
    slideList.empty();

    for(var i = 0; i < slides.length; i++){
      $(slides[i]).hide();
      $(slides[i]).attr('data-slide', i);
      slideList.append('<span data-slide-list="'+i+'" class="slide-list"></span>');
    }

    $(slides[0]).addClass('current').show();
    $(slideList.find('.slide-list')[0]).addClass('current');
  };

  self.toggleSlide = function() {
    currentSlide.hide();
    currentSlide.removeClass('current');
    activeSlide.fadeIn();
    activeSlide.addClass('current');
  };

  self.toggleSlideList = function(){
    var slideList = slider.find('[data-slider-list]'),
        currentSlideList = slideList.find('[data-slide-list="'+ currentSlideNumber +'"]'),
        activeSlideList = slideList.find('[data-slide-list="'+ activeSlideNumber +'"]');

    currentSlideList.removeClass('current');
    activeSlideList.addClass('current');
  };

  self.findBackSlideNumber = function(){
    if(currentSlideNumber === 0){
      return slidesSize-1;
    }else{
      return currentSlideNumber - 1;
    }
  };

  self.findBackSlide = function(aBackSlideNumber){
    return slider.find('[data-slide="' + aBackSlideNumber + '"]');
  };

  self.findNextSlideNumber = function(){
    if(currentSlideNumber == slidesSize-1){
      return 0;
    }else{
      return currentSlideNumber + 1;
    }
  };

  self.findCurrentSlideNumber = function(){
    return parseInt(currentSlide.attr('data-slide'));
  };

  self.findNextSlide = function(aNextSlideNumber){
    return slider.find('[data-slide="' + aNextSlideNumber + '"]');
  };

  self.findCurrentSlide = function(){
    return slider.find('.slide-item.current');
  };

  self.findSlide = function(aSlideNumber){
    return slider.find('[data-slide="'+aSlideNumber+'"]');
  };

  self.findSlides = function() {
    return slider.find('[data-slide]');
  };

  self.toggle = function() {
    self.toggleSlide();
    self.toggleSlideList();
    self.update();
  };

  self.next = function() {
    activeSlideNumber = self.findNextSlideNumber(),
    activeSlide       = self.findNextSlide(activeSlideNumber);

    self.toggle();
  };

  self.nextList = function(aSlideListItem){
    activeSlideNumber = aSlideListItem.attr('data-slide-list'),
    activeSlide       = self.findSlide(activeSlideNumber);

    self.toggle();
  };

  self.back = function() {
    activeSlideNumber = self.findBackSlideNumber(),
    activeSlide       = self.findBackSlide(activeSlideNumber);

    self.toggle();
  };

  slider.on('click', '[data-slide-list]', function(){
    self.nextList($(this));
  });

  slider.on('click', '[data-next]', function(e){
    self.next();
  });

  slider.on('click', '[data-back]', function(e){
    self.back();
  });

  self.init();

}
