chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "receiving_form_data") {
     document.querySelector('#firstName').value = request.form_data["name"];
     document.querySelector('#lastName').value  = request.form_data["lastName"];
     document.querySelector('#email').value  = request.form_data["email"];
    }
})
