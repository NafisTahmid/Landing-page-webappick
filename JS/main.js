$( document ).ready(function() {
    $('.say-slider-section').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1400:{
                items:3
            }
        }
    });
    $('.popular-courses-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1400:{
                items:3
            }
        }
    })
});
