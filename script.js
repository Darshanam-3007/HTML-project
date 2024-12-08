$(document).ready(function() {
    $('nav ul li a').filter(function() {
        return this.href === window.location.href;
    }).addClass('active');
});
