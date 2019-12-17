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
});
$(document).ready(function() {
    $(' .button[filter="ud"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');


            $(' .button[filter]').removeClass('focused');
            $(this).addClass('focused');

            $(' .filter > div').hide(300);
            $(' .filter > div[filter="ud"]').show(300);
        }
    })
});
$(document).ready(function() {
    $(' .button[filter="moc"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');


            $(' .button[filter]').removeClass('focused');
            $(this).addClass('focused');

            $(' .filter > div').hide(300);
            $(' .filter > div[filter="moc"]').show(300);
        }
    })
});
$(document).ready(function() {
    $('.button[filter="all"]').click(function() {
        if ($(this).attr('val') == 'off') {
            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');


            $(' .button[filter]').removeClass('focused');
            $(this).addClass('focused');

            $(' .filter > div').show(300);
        }
    })
})