$('.page-scroll').on('click', function (e) {
    var href = $(this).attr('href');
    var elemenhref = $(href);
    var body = $("html, body");
    body.stop().animate({
        scrollTop: elemenhref.offset().top - 80
    }, 1250, 'easeInOutExpo', function () {
        ;
    })
    e.preventDefault();
});


$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 6 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });
    $('.jumbotron a').css({
        'transform': 'translate(0px, ' + wScroll / 1 + '%)'
    });

    //photo
    // if (wScroll > $('.portfolio').offset().top - 200) {
    //     $('.portfolio .card').addClass('muncul');
    // }
    // //about
    // if (wScroll > $('.about').offset().top - 200) {
    //     $('.about .pkanan').addClass('munculkan');
    // }
    // if (wScroll > $('.about').offset().top - 200) {
    //     $('.about .pkiri').addClass('munculkan');
    // }
});

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.navbar').addClass('bg-dark');
    } else {
        $('.navbar').removeClass('bg-dark');
    }
});