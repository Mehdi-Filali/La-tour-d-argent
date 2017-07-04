// scrolling effect for the arrow button

$(document).ready(function(){
    $('#arrow').click(function(){
        $('html,body').animate({
            scrollTop: $("#arrow").offset().top},
            1300);
    });
    
    $('#arrow2').click(function(){
        $('html,body').animate({
            scrollTop: $("#arrow2").offset().top},
            1300);
    });
    
    $('#arrow3').click(function(){
        $('html,body').animate({
            scrollTop: $(".terrail").offset().top},
            1300);
    });
    
    $('#arrow4').click(function(){
        $('html,body').animate({
            scrollTop: $("#arrow4").offset().top},
            1300);
    });
});
    console.log('hello world');