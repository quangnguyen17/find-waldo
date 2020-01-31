
var waldo = { position: 0 };
var points = 0;

function handleNavBarAnimations() {
    $("nav").hide();
    $("nav").slideDown(function () {
        setTimeout(() => {
            $(this).slideUp();
        }, 2000);
    });
}

function hideWaldo() {
    $(".bg-waldo").css("opacity", "0");
    $(".bg-blank").css("opacity", "0");
}

function draw() {
    handleNavBarAnimations();

    waldo.position = Math.floor(Math.random() * 120) + 0;
    code = ``;

    for (var i = 0; i < 120; i++) {
        code += `<div class="col-1 bg-${i == waldo.position ? "waldo" : "blank "} waldo-hovering"></div>`;
    }

    $(".row").html(code);

    hideWaldo();
    handleHovering();

    $(".bg-waldo").on("click", function () {
        draw();
        points++;
        $("#points").text(`Points: ${points}`);
    });
}

function handleHovering() {
    $(".waldo-hovering").hover(function () {
        $(this).animate({
            opacity: "1"
        }, 150)
    }, function () {
        $(this).animate({
            opacity: "0"
        }, 150);
    });
}

$(document).ready(function () {
    draw();
});

