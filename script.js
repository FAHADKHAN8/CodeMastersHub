window.onload = function () {
    // Add smooth scrolling to navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });

        // Change the background color of the header
        var header = document.querySelector('.header');
        header.style.backgroundColor = '#4c074c';

        // Add a class to the navigation links for better styling
        var navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(function (link) {
            link.classList.add('nav-link');
        });

        // Change the font size and color of featured articles
        var articles = document.querySelectorAll('.article h3');
        articles.forEach(function (article) {
            article.style.fontSize = '28px'; // Increase font size
            article.style.color = 'black'; // Change text color
        });

        // Add a hover effect to the featured articles
        var articleContainers = document.querySelectorAll('.article');
        articleContainers.forEach(function (container) {
            container.addEventListener('mouseenter', function () {
                container.style.backgroundColor = '#f0f0f0'; // Change background color on hover
            });
            container.addEventListener('mouseleave', function () {
                container.style.backgroundColor = 'white'; // Revert background color on mouse leave
            });
        });
    });
};
