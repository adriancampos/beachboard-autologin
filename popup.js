'use strict';

let pauseButton = document.getElementById('pause');

function updateButton(activated) {
  pauseButton.style.backgroundColor = activated ? 'green' : 'red';
  pauseButton.setAttribute('value', activated);
}


chrome.storage.sync.get('activated', function(data) {
  updateButton(data.activated)
});

pauseButton.onclick = function(element) {
  chrome.storage.sync.get('activated', function(data) {
    updateButton(!data.activated);
    chrome.storage.sync.set({activated: !data.activated});
  });
}