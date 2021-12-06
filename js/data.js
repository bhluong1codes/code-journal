/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  var entriesJSON = JSON.stringify(data);
  localStorage.setItem('local-storage', entriesJSON);
});

var previousEntries = localStorage.getItem('local-storage');
if (previousEntries !== null) {
  data = JSON.parse(previousEntries);
}
