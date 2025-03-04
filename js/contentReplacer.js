function loadContent(page) {
    let pageMap = {
        "home": "components/main.html",
        "about": "components/about.html",

        "contact": "components/contact.html"
    };

    if (pageMap[page]) {
        loadComponent(pageMap[page], "main-content");
    }
}

function loadComponent(url, targetId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => console.error("Error loading component:", error));
}
