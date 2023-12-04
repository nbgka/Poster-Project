//resource link: https://www.w3schools.com/jquery/default.asp

$("#cat-img").hide();

$("#secret-text").hide();

$("#happy-img").click(function(){

    $("#happy-img").hide();
    $("#cat-img").show();
});

$("#cat-img").click(function(){

    $("#cat-img").hide();
    $("#happy-img").show();
});

$("#toggle-text").click(function(){

    $("#secret-text").toggle();
});

$("#change-bg-color").click(function(){

    $("#home-screen").css("background-color","pink");
});

$("#secret-text").click(function(){

    $(".main-img").addClass("animate-img");
    setTimeout(function(){

        $(".main-img").removeClass("animate-img");
    }, 5000);

});
