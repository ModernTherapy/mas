document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load menu.html");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading menu:", error);
        });
});
