$(".controls").on("click","li", function() {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
    var color = $(this).css("background-color");
   
});

$("#revealColorSelect").click( function() {
    changecolor();
    $("#ColorSelect").toggle();
});


function changecolor(){
    var red = $("#red").val();
    var green = $("#green").val();
    var blue = $("#blue").val();
    $("#newColor").css("background-color","rgb("+red+","+green+","+blue+")");
    console.log("ok")
}

$("input[type=range]").change("changecolor");