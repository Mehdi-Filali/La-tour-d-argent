$(document).ready(function(){
    $(".yes").click (function() {
        $(".identification").clone().addClass("go").prependTo(".right"); 
        $(".contact").clone().addClass("go").prependTo(".right"); 
    });

    $(".non").click (function() {   
        $(".go").fadeOut(); 
        $(".go").fadeOut(); 
        $(".go").fadeOut(); 
    });
});
