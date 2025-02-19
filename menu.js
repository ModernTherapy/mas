document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;

            // Force CSS to reapply (fix for GitHub Pages)
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "style.css";
            document.head.appendChild(link);
        })
        .catch(error => console.error("Error loading menu:", error));
});
