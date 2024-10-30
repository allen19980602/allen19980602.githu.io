$(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 50) {
            $('.header').css('background-color', '#ffffffb6')
        } else {
            $('.header').css('background-color', 'transparent')
        }
    })
    
})
