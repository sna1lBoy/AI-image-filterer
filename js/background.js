// listen for tab events
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    // make sure the extension is on
    chrome.storage.sync.get(["on"], function(result) {
        var on = result.on || false;

        // update search
        if (request.isImageSearch && on && request.searchTerms && !request.searchTerms.includes("-ai")) {
            chrome.tabs.update(sender.tab.id, { url: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(request.searchTerms + " -ai")}` });
        }
    });
});
