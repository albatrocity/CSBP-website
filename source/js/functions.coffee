$ ->
  $('.band .content').wrap("<div class='content-wrapper'></div>")
  $('.band .name-time').click ->
    current = $(this).parent(".band")
    notCurrent = $('.band').not(current)
    notCurrent.find('.content-wrapper').css
      height: 0
      opacity: 0
    current.find('.content-wrapper').css
      height: current.find('.content').outerHeight() + 20,
      opacity: 1