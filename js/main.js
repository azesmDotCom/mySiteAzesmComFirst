$(document).ready(function () {
    $('.sidemenu-toggler').click(function () {
        $('.sidemenu').addClass('active');
    });

    $('.close').click(function () {
        $('.sidemenu').removeClass('active');
    });
});