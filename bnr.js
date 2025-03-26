
function modifyText() {
    var tudiviLink = document.querySelector('body > a:last-child');
    if (tudiviLink) {
        var p = tudiviLink.querySelector('p');
        if (p && p.textContent.includes('Made With TUDIVI EDITOR')) {
            p.textContent = 'REALIZAT CU TUDIVI EDITOR'; 
            return true; 
        }
    }
    return false; 
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (modifyText()) {
            observer.disconnect();
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
