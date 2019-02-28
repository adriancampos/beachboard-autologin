chrome.storage.sync.get('activated', function(data) {
  if (data.activated) {
	  
	  // TODO don't use a timer, do a proper listener
    // Requires user interaction? Set a click listener on anywhere? Ugh.
	//setTimeout(login, 2000);
  login();
  }
});


function login() {
  // document.querySelector('input#userName').focus()
  // document.querySelector('input#userName').select()
  chrome.storage.local.get(['login_username'], function(result) {
    document.querySelector('input#userName').value = result.login_username;
  });
  chrome.storage.local.get(['login_password'], function(result) {
    document.querySelector('input#password').value = result.login_password;
  });
  
  document.querySelectorAll('button').forEach(function(button) {
    if (button.innerText == "Log In") {
      button.click();
    }
  });
}

