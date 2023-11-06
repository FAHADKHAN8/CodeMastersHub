document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".header");
    const changeColorButton = document.getElementById("changeColorButton");


    function changeHeaderColor() {

        const randomColor = getRandomColor();
        header.style.backgroundColor = randomColor;
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    if (changeColorButton) {
        changeColorButton.addEventListener("click", changeHeaderColor);
    }
});
