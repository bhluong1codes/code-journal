/* global data */
/* exported data */

var $photoUrl = document.querySelector('#imgurl');
var $img = document.querySelector('img');
var $form = document.querySelector('form');
var $title = document.querySelector('#title');
var $notes = document.querySelector('#notes');

$photoUrl.addEventListener('input', function (event) {
  if ($photoUrl.value === '') {
    $img.src = 'images/placeholder-image-square.jpg';
  } else {
    $img.src = $photoUrl.value;
  }
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var titleValue = $title.value;
  var photoUrlValue = $photoUrl.value;
  var notesValue = $notes.value;

  var entry = {
    title: titleValue,
    photoUrl: photoUrlValue,
    notes: notesValue,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(entry);
  $form.reset();
  $img.src = 'images/placeholder-image-square.jpg';
});
