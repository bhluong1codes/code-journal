/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
var $view = document.querySelectorAll('.view');
window.addEventListener('beforeunload', function (event) {
  for (var i = 0; i < $view.length; i++) {
    if ($view[i].className === 'view') {
      data.view = $view[i].getAttribute('data-view');
    }
  }
  var entriesJSON = JSON.stringify(data);
  localStorage.setItem('local-storage', entriesJSON);

});

var previousEntries = localStorage.getItem('local-storage');
if (previousEntries !== null) {
  data = JSON.parse(previousEntries);
}
