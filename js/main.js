/* global data */
/* exported data */
var $img = document.querySelector('img');
var $form = document.querySelector('form');

$form.addEventListener('submit', function (event) {
  $form.reset();
  $img.src = 'images/placeholder-image-square.jpg';
});
