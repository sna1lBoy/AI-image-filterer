// get checkbox
var checkbox = document.getElementById("checkbox");

// on lick
document.addEventListener('DOMContentLoaded', function() {

    // get state
    chrome.storage.sync.get(['on'], function(result) {
        var on = result.on || 0;
        checkbox.checked = on === 1;

    // save state
    checkbox.addEventListener('click', () => {
        on = checkbox.checked ? 1 : 0;
        chrome.storage.sync.set({ 'on': on });
        });
    });
});