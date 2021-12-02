/* global data */
/* exported data */

var $photoUrl = document.querySelector('#imgurl');
var $img = document.querySelector('img');

$photoUrl.addEventListener('input', function (event) {
  if ($photoUrl.value === '' || !$photoUrl.value.includes('http')) {
    $img.src = 'images/placeholder-image-square.jpg';
  } else {
    $img.src = $photoUrl.value;
  }
});
