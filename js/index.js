$(document).ready(function() {
    $(' .button[filter="wd"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');

            $(' .button[filter]').removeClass('focused');
            $(this).addClass('focused');

            $(' .filter > div').hide(300);
            $(' .filter > div[filter="wd"]').show(300);
        }
    })
    $(' .button[filter="ud"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');


            $(' .button[filter]').removeClass('focused');
            $(this).addClass('focused');

            $(' .filter > div').hide(300);
            $(' .filter > div[filter="ud"]').show(300);
        }
    });

    $(' .button[filter="moc"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');


            $(' .button[filter]').removeClass('focused');
            $(this).addClass('focused');

            $(' .filter > div').hide(300);
            $(' .filter > div[filter="moc"]').show(300);
        }
    });
    $('.button[filter="all"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');


            $(' .button[filter]').removeClass('focused');
            $(this).addClass('focused');

            $(' .filter > div').show(300);
        }
    });
    /*Slider*/
    $('.sl').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    /*menu */

    $('ul.menu a[href^="#"]').click(function() {
        var target = $(this).attr('href');
        $('html, body').animation({
            scrollTop: $(target).offset().top
        }, 500);
        $('ul.menu a[href^="#"]').css({ 'color': '#212121' });
        $(this).css({ 'color': '#00897b' });
        return false;
    });

    /*кнопка наверх не работает! */

    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
    /*выпадающее меню */

    $('.menu_icon').click(function() {
        $('nav').slideToggle(500);
        $('ul.menu').css({
            'display': 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
        })
        if ($('.menu_icon').html() == '<i class="fas fa-bars"></i>') {
            $(this).html('<i class="fas fa-times"></i>')
        } else {
            $(this).html('<i class="fas fa-bars"></i>')
        }
    })

})