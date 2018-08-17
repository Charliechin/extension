chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "receiving_form_data") {

     document.querySelector('#sign-in-email').value = "carlos@azilo.com";
     document.querySelector('#sign-in-password').value  = "kinkin22";
     document.querySelector('#login-btn').click();

    }
})
