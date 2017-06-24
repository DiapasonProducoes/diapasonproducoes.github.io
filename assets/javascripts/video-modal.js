$(function(){
  'use strict';

  var modal = $('#modal'),
      modalButton = $('[data-video]');

  modalButton.on('click', function(){
    modal.modal('toggle');
  });


});
