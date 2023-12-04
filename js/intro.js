//resource link: https://www.w3schools.com/jquery/default.asp

$("#bg-two").hide();

$("#bg-one").click(function(){

    $("#bg-one").hide();
    $("#bg-two").show();
});

$("#bg-two").click(function(){

    $("#bg-two").hide();
    $("#bg-one").show();
});

$("#mannequin-img").mousemove(function(){

    $("#mannequin-img").addClass("animate-img");
    setTimeout(function(){

        $("#mannequin-img").removeClass("animate-img");
    }, 15000);
});

$("#b-letter").mousemove(function(){

    $("#b-letter").addClass("animate-letter-b");
    setTimeout(function(){

        $("#b-letter").removeClass("animate-letter-b");
    }, 15000);
});

$("#o-letter").mousemove(function(){

    $("#o-letter").addClass("animate-letter-o");
    setTimeout(function(){

        $("#o-letter").removeClass("animate-letter-o");
    }, 20000);
});

$("#d-letter").mousemove(function(){

    $("#d-letter").addClass("animate-letter-d");
    setTimeout(function(){

        $("#d-letter").removeClass("animate-letter-d");
    }, 15000);
});

$("#y-letter").mousemove(function(){

    $("#y-letter").addClass("animate-letter-y");
    setTimeout(function(){

        $("#y-letter").removeClass("animate-letter-y");
    }, 20000);
});
