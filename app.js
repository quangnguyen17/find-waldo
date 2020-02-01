
var waldo = { row: 0, col: 0 };
var points = 0;

function hideWaldo() {
    $(".bg-waldo").css("opacity", "0");
    $(".bg-blank").css("opacity", "0");
}

function draw() {
    // waldo.row = Math.floor(Math.random() * 120) + 0;
    // waldo.col = Math.floor(Math.random() * 120) + 0;

    var code = ``;

    for (var row = 0; row < 20; row++) {
        code += `<div class="row game-content m-0 p-0" style="height: 5vh">`;

        for (var col = 0; col < 30; col++) {
            var waldo = (col == 0 && row == 0) ? "waldo" : "blank";
            code += `<div class="col bg-${waldo} waldo-hovering m-0 p-0"></div>`;
        }

        code += `</div>`;
    }

    console.log(code);
    $('.game').html(code);

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
            opacity: "1",
        }, 200)
    }, function () {
        $(this).animate({
            opacity: "0"
        }, 200);
    });
}

$(document).ready(function () {
    draw();
});

