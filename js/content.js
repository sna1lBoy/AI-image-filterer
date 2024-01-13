// return whether image search element appears
function isImageSearch() {
    const element = document.querySelector('.T1diZc.KWE8qe');
    return !!element;
}

// extract the search terms from the title
function getSearchTerm() {
    const title = document.querySelector('title');
    if (title) {
        return title.textContent.replace(/ - Google Search$/, '');;
    } else {
        return null;
    }
}

chrome.runtime.sendMessage({ action: "checkImageSearch", isImageSearch: isImageSearch(), searchTerms: getSearchTerm() });