document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const changeColorButton = document.getElementById("changeColorButton");
    const popup = document.getElementById("popup");

    function changeHeaderColor() {
        const randomColor = getRandomColor();
        header.style.backgroundColor = randomColor;
        updatePopupText("Navigation bar color changed!");
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function updatePopupText(text) {
        popup.textContent = text;
        popup.style.display = "block";
        setTimeout(function () {
            popup.style.display = "none";
        }, 2000); 
    }

    if (changeColorButton) {
        changeColorButton.addEventListener("click", changeHeaderColor);
    }
});
