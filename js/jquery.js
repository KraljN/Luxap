$( document ).ready(function() {
    $( "#hamburger" ).click(function() {
        $( "#lista1" ).slideToggle();
    });
    $("#autor").click(function () {
        $("#about").modal({
            fadeDuration: 500,
            fadeDelay: 0.50
          });
    });
    $('.slika').hover(function () {
            $(this).find('.horizontal').stop( true, true ).animate({'width':'75%'}, 'slow', function(){
                $(this).parent().parent().stop( true, true ).addClass('gray');
                $(this).parent().parent().stop( true, true ).removeClass('pocetna');
            });
            
        }, function () {
            $(this).find('.horizontal').stop( true, true ).animate({'width':'25%'}, 'fast', function(){
                $(this).parent().parent().stop( true, true ).addClass('pocetna');
                $(this).parent().parent().stop( true, true ).removeClass('gray');
            });
        }
    );
    
});