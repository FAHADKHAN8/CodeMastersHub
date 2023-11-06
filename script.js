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

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", function () {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach(function(slide) {
        slide.classList.remove("active");
      });
      slides[index].classList.add("active");
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 3000);
  });
  
