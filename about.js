// about.js
$(document).ready(function() {
    // Animate data on scroll
    $(window).scroll(function() {
        $('.about-section, .why-this-project-section').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight) {
                $(this).addClass('data-animation');
            }
        });
    });
});
