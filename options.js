chrome.storage.local.get(['login_username'], function(result) {
    document.getElementById('userName').value = result.login_username;
  });
  chrome.storage.local.get(['login_password'], function(result) {
    document.getElementById('password').value = result.login_password;
  });

document.getElementById('userName').addEventListener('change', function() {
    chrome.storage.local.set({login_username: document.getElementById('userName').value}, function() {
      console.log('Login name set');
    })
  });

document.getElementById('password').addEventListener('change', function() {
    chrome.storage.local.set({login_password: document.getElementById('password').value}, function() {
      console.log('Password set');
    })
  });
