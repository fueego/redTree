jQuery(document).ready(function( $ ) {

    $('.navbar-brand').on('click', function(e){
        e.preventDefault();

        console.log("Hello on test site...");
    })
    
    //check which link was selected
    var storeClicks = $('.navbar-right');

    storeClicks.on('click', 'a', function(e){
        e.preventDefault();
        var whatToOpen = $(this).data('info');

        //open collapsing window
        $('.' + whatToOpen).toggle();
    });

    //add effect to the text
    $('.singleCol').on('click', 'button', function(e){
        e.preventDefault();

        var effect = $(this).parent().find('.text').attr('class').split(" ");
            effect = effect[1];

        //start animation
        switch(effect){
            case 'effect1':
                $('.effect1').textillate(
                    { 
                        in: { effect: 'rollIn' },
                        out: { effect: 'rollOut', sync: true },
                        loop: true
                    });
            break;

            case 'effect2':
                $('.effect2').textillate(
                    { 
                        in: { effect: 'bounceInLeft' },
                        out: { effect: 'bounceOutRight', sync: true },
                        loop: true
                    });
            break;

            case 'effect3':
                $('.effect3').textillate(
                    { 
                        in: { effect: 'fadeInDown' },
                        out: { effect: 'fadeOutUp' },
                        loop: true
                    });
            break;
        }
    });

});
