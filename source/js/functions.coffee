$ ->
  $('.band .content').wrap("<div class='content-wrapper'></div>")
  $('.band .name-time').click ->
    current       = $(this).parent(".band")
    notCurrent    = $('.band').not(current)
    notCurrent.removeClass('active').find('.content-wrapper').css
      height: 0
      opacity: 0
    current.addClass('active').find('.content-wrapper').css
      height: current.find('.content').outerHeight() + 20,
      opacity: 1
  $(window).resize ->
    current = $('.band.active .content-wrapper')
    unless current.css('height') == 'auto'
      $('.band.active .content-wrapper').css 'height', 'auto'