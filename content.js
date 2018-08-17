

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      // var firstHref = $("a[href^='http']").eq(0).attr("href");
      var name = $('#user_firstname').val();
      var lastName = $('#user_lastname').val();
      var email = $('#user_email').val();

      var data = {"name": name, "lastName": lastName, "email": email }
      console.log("chrome ext");
      //console.log(firstHref);
      console.log(name + " " + lastName + " " + email);
      console.log("chrome ext");

      chrome.runtime.sendMessage({
        "message":  "open_new_tab",
        "url":      "file:///tmp/form.html",
        "form_data": data
      });
      //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  });
