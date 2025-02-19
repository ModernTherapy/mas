document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;

            // Ensure CSS is loaded for the dynamically inserted content
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "menu.css"; // Make sure this matches the correct path
            document.head.appendChild(link);
        })
        .catch(error => console.error("Error loading menu:", error));
});
