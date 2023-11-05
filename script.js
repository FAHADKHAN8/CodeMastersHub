// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
  
    // Example: Change the background color of the header when the logo is clicked
    const logo = document.querySelector(".logo-heading a");
    const header = document.querySelector(".header");
  
    logo.addEventListener("click", function (event) {
      event.preventDefault();
      header.style.backgroundColor = "#4c074c"; // Change the background color
    });
  
    // You can add more JavaScript code to enhance your webpage's interactivity.
  });
  