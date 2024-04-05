// return whether image search element appears
function isImageSearch() {
    const element = document.getElementById("rcnt");
    if (element.classList.length === 2 && element.classList[1] === "gIatYd") {
        return true
    }
    return false;
}

// extract the search terms from the title
function getSearchTerm() {
    const title = document.querySelector('title');
    if (title) {
        return title.textContent.replace(/ - Google Search$/, '');
    } else {
        return null;
    }
}

chrome.runtime.sendMessage({ action: "checkImageSearch", isImageSearch: isImageSearch(), searchTerms: getSearchTerm() });