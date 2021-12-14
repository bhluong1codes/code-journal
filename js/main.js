/* global data */
/* exported data */

var $photoUrl = document.querySelector('#imgurl');
var $img = document.querySelector('img');
var $form = document.querySelector('form');
var $title = document.querySelector('#title');
var $notes = document.querySelector('#notes');
var $view = document.querySelectorAll('.view');
var $link = document.querySelector('.link');
var $newBtn = document.querySelector('.newBtn');
var $entries = document.querySelector('.entries-list');
var $noEntriesMsg = document.querySelector('.no-entries-msg');

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
  $entries.prepend(renderEntry(data.entries[0]));
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

function renderEntry(entry) {
  var $entry = document.createElement('li');
  $entry.setAttribute('class', 'row');
  var $divCol = document.createElement('div');
  $divCol.setAttribute('class', 'column-half');
  var $divCol2 = document.createElement('div');
  $divCol2.setAttribute('class', 'column-half');
  var $imgContainer = document.createElement('div');
  $imgContainer.setAttribute('class', 'img-container');
  var $img = document.createElement('img');
  $img.setAttribute('src', entry.photoUrl);
  var $h3 = document.createElement('h3');
  $h3.textContent = entry.title;
  var $p = document.createElement('p');
  $p.textContent = entry.notes;
  $entry.appendChild($divCol).appendChild($imgContainer).appendChild($img);
  $entry.appendChild($divCol2).appendChild($h3);
  $divCol2.appendChild($p);
  $noEntriesMsg.style.display = 'none';
  return $entry;
}

function viewSwap(event) {
  var $dataView = event.target.getAttribute('data-view');
  for (var i = 0; i < $view.length; i++) {
    if ($dataView === $view[i].getAttribute('data-view')) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
}

function loadView(event) {
  for (var i = 0; i < $view.length; i++) {
    if (data.view === $view[i].getAttribute('data-view')) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
}

$link.addEventListener('click', viewSwap);
$newBtn.addEventListener('click', viewSwap);
window.addEventListener('submit', viewSwap);
window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    $entries.appendChild(renderEntry(data.entries[i]));
  }
});
window.addEventListener('DOMContentLoaded', loadView);
