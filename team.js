// No additional JavaScript is needed for the hover effects as they are handled by CSS.
// However, if you want to add some interactive behavior, you can use JavaScript.

// Example: JavaScript to handle smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').replace('html', '');
            var targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
