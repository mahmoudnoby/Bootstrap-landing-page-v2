$( function(){
//Slide 
    "use strict";
    var windH  = $(window).height(),
        navH   = $('.navbar').innerHeight();

        $('.header').height(windH - (navH));


        $('.tabs .tab-switch li').on('click', function(){
            $(this).addClass('active').siblings().removeClass('active');
            

            $('.tabs .tabs-content > div').hide();
            $($(this).data('class')).show();
        });         

});

