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

  data.entries.unshift(entry);
  $form.reset();
  $img.src = 'images/placeholder-image-square.jpg';
  $entries.prepend(renderEntry(data.entries[0]));
  data.nextEntryId++;
});

// <li class="row">
//   <div class="column-half">
//     <div class="img-container">
//       <img src="data.photoUrl" alt="">
//     </div>
//   </div>
//   <div class="column-half">
// <div class="title-flex">
//     <h3>
//       data.title;
//     </h3>
//     <i class="fas fa-pen"></i>
//  </div>
//     <p>
//       data.notes;
//     </p>
//   </div>
// </li>

function renderEntry(entry) {
  var $entry = document.createElement('li');
  $entry.setAttribute('class', 'row');
  $entry.setAttribute('data-entry-id', entry.entryId);
  var $divCol = document.createElement('div');
  $divCol.setAttribute('class', 'column-half');
  var $divCol2 = document.createElement('div');
  $divCol2.setAttribute('class', 'column-half');
  var $divTitle = document.createElement('div');
  $divTitle.setAttribute('class', 'title-flex');
  var $icon = document.createElement('i');
  $icon.setAttribute('class', 'fas fa-pen');
  $icon.setAttribute('data-view', 'entry-form');
  var $imgContainer = document.createElement('div');
  $imgContainer.setAttribute('class', 'img-container');
  var $img = document.createElement('img');
  $img.setAttribute('src', entry.photoUrl);
  var $h3 = document.createElement('h3');
  $h3.textContent = entry.title;
  $divTitle.appendChild($h3);
  $divTitle.appendChild($icon);
  var $p = document.createElement('p');
  $p.textContent = entry.notes;
  $divCol2.appendChild($divTitle);
  $divCol2.appendChild($p);
  $entry.appendChild($divCol).appendChild($imgContainer).appendChild($img);
  $entry.appendChild($divCol2);

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

$entries.addEventListener('click', editEntry);

function editEntry(event) {
  if (event.target.tagName === 'I') {
    var id = parseInt(event.target.closest('li').getAttribute('data-entry-id'));
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === id) {
        data.editing = data.entries[i];
      }
    }
    viewSwap(event);
  }

  $title.setAttribute('value', data.editing.title);
  $photoUrl.setAttribute('value', data.editing.photoUrl);
  $img.src = data.editing.photoUrl;
  $notes.textContent = data.editing.notes;
}
