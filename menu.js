document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Error loading menu:", error));
});
