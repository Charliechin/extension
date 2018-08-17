

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      // var firstHref = $("a[href^='http']").eq(0).attr("href");
      var name = $('#user_firstname').val();
      var lastName = $('#user_lastname').val();
      var email = $('#user_email').val();

      var data = {"name": name, "lastName": lastName, "email": email }
      //console.log(firstHref);
      console.log(name + " " + lastName + " " + email);

      // This passes to Background.js the url and the data from the form
      chrome.runtime.sendMessage({
        "message":  "open_new_tab",
        "url":      "https://www.azilo.com/sign_in",
        "form_data": data
      });
    }
  });
