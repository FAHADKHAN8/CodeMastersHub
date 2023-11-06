document.addEventListener('DOMContentLoaded', function () {
    var articles = document.querySelectorAll('.article h3');
    articles.forEach(function (article) {
        article.style.fontSize = '28px'; 
        article.style.color = 'black'; 
    });

    var articleContainers = document.querySelectorAll('.article');
    articleContainers.forEach(function (container) {
        container.addEventListener('mouseenter', function () {
            container.style.backgroundColor = '#f0f0f0'; 
        });
        container.addEventListener('mouseleave', function () {
            container.style.backgroundColor = 'white'; 
        });
    });
});
