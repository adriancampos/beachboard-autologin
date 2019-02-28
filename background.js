chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({activated: true}, function() {
  });
  
  
  // Tell the browser when the user can interact with popup.html
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'bbcsulb.desire2learn.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
  
  
  
  
});