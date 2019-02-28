'use strict';

let enabledCheckbox = document.getElementById('pause');

function updateButton(activated) {
  enabledCheckbox.checked = activated;
}


chrome.storage.sync.get('activated', function (data) {
  enabledCheckbox.checked = data.activated;
});

enabledCheckbox.onchange = function (element) {
  chrome.storage.sync.set({ activated: enabledCheckbox.checked });
}