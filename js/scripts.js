$('#loginModal').on('shown.bs.modal', function (e) {
    $('body').attr('style', '');
});
$('#reserveModal').on('shown.bs.modal', function (e) {
    $('body').attr('style', '');
});
function mouseOver() {
    document.getElementById("loginbutton").style.color = "rgb(255, 255, 255)";
}

function mouseOut() {
    document.getElementById("loginbutton").style.color = "rgb(168, 150, 212)";
}
$("#mycarousel").carousel( { interval: 500 } );
$("#carousel-button").click(function() {
    if ($("#carousel-button").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carousel-button").children("span").removeClass('fa-pause');
        $("#carousel-button").children("span").addClass('fa-play');
    }
    else if ($("#carousel-button").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carousel-button").children("span").removeClass('fa-play');
        $("#carousel-button").children("span").addClass('fa-pause');                    
    }
});

$('#loginbutton').click(function() {
    $('#loginModal').modal('show');
});

$('#reservebutton').click(function() {
    $('#reserveModal').modal('show');
});

$('#closelogin, #closelogin2').click(function() {
    $('#loginModal').modal('hide');
});

$('#closereserve, #closereserve2').click(function() {
    $('#reserveModal').modal('hide');
});
