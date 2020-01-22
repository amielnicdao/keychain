$(document).ready(function () {

    //"Sign Me Up" button/lock animation
    $("#signup").hover(function () {
        $('.lock').attr("src", "images/lock-5-64.png");

    }, function () {
        $('.lock').attr("src", "images/lock-4-64.png")
    });
});

$(function () {
    $('.col-6').fadeIn('slow');
});

//Image and text fade in on scroll
$(window).scroll(function () {
    $('.col-6').each(function () {

        var object = $(this).position().top + $(this).outerHeight();
        var windowBtm = $(window).scrollTop() + $(window).height();

        if (windowBtm > object) {
            $(this).animate({ 'opacity': '1' }, 2800);
        }
    });
});

//Icons appear one by one on scroll
var tl = gsap.timeline();
tl.from(".images", { duration: 1, opacity: 0, y: -150, stagger: 0.25 });
tl.pause();
var triggered = false;

$(window).scroll(function () {

    if ($(window).scrollTop() > 400 && triggered == false) {
        tl.resume();
        triggered = true;
    }

    if ($(window).scrollTop() == 0) {
        tl.restart();
        tl.pause();
        triggered = false;
    }
});

//On click of "Sign Me Up" button
$("#signup").on("click", function (event) {
    event.preventDefault();

    var newUser = {
        name: $("#inputUser")
            .val()
            .trim(),
        password: $("#inputPass")
            .val()
            .trim()
    };

    $.ajax("/signup", {
        type: "POST",
        data: JSON.stringify(newUser),
        dataType: "json",
        contentType: "application/json"
    }).then(function () {
        location.reload();
        window.location.replace("/login");
    });
});