// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send message to the active tab
  chrome.tabs.query({
    active: true,
    currentWindow: true
    },
    function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        message: "clicked_browser_action"
      });
    });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      // chrome.tabs.create({"url": request.url});
      injectScript(request.url, request.form_data);
    }
  });

function injectScript(url, form_data) {
  chrome.tabs.create({url: url}, function(tab) {
    chrome.tabs.executeScript(tab.id, {file: 'injector.js'}, function() {
      chrome.tabs.sendMessage(tab.id, {
        message: "receiving_form_data",
        form_data: form_data
      });
      console.log("Stoppp");
    });
  });
};
