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

// <li class="row">
//   <div class="column-half">
//     <div class="img-container">
//       <img src="data.photoUrl" alt="">
//     </div>
//   </div>
//   <div class="column-half">
//     <h3>
//       data.title;
//     </h3>
//     <p>
//       data.notes;
//     </p>
//   </div>
// </li>

function createEntry(event) {
  var $entries = document.querySelector('.entries-list');
  for (var i = 0; i < data.entries.length; i++) {
    var $entry = document.createElement('li');
    $entry.setAttribute('class', 'row');
    var $divCol = document.createElement('div');
    $divCol.setAttribute('class', 'column-half');
    var $divCol2 = document.createElement('div');
    $divCol2.setAttribute('class', 'column-half');
    var $imgContainer = document.createElement('div');
    $imgContainer.setAttribute('class', 'img-container');
    var $img = document.createElement('img');
    $img.setAttribute('src', data.entries[i].photoUrl);
    var $h3 = document.createElement('h3');
    $h3.textContent = data.entries[i].title;
    var $p = document.createElement('p');
    $p.textContent = data.entries[i].notes;

    $entry.appendChild($divCol).appendChild($imgContainer).appendChild($img);
    $entry.appendChild($divCol2).appendChild($h3);
    $divCol2.appendChild($p);
    $entries.appendChild($entry);
  }
}

window.addEventListener('DOMContentLoaded', createEntry);
