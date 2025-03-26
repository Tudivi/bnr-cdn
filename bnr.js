function modifyText() {
    var tudiviLink = document.querySelector('body > a:last-child');
    if (tudiviLink) {
        var p = tudiviLink.querySelector('p');
        if (p && p.textContent.includes('Made With TUDIVI EDITOR')) {
            p.textContent = 'REALIZAT CU TUDIVI EDITOR';
        }

        tudiviLink.style.position = "static";
        tudiviLink.style.padding = "10px";
        tudiviLink.style.justifyContent = "center";
        tudiviLink.style.width = "100%";

        var img = tudiviLink.querySelector("img");
        if (img) {
            img.style.width = "18px";
            img.style.height = "18px";
        }

        if (p) {
            p.style.fontSize = "14px";
        }

        return true;
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

modifyText();
