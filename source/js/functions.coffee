$ ->
  ###
  $(".band").each ->
    h = $(this).height()
    $(this).attr "data-height", h
    $(this).height "40"

  $(".name-time").click (e) ->
    e.preventDefault()
    band = $(this).parent(".band")
    h = band.data("height")
    console.log h
    $(".band").not(band).animate height: "40"
    band.animate height: "auto"
  ###
  $('.band .content').hide()
  $('.band .name-time').click ->
    current = $(this).parent(".band")
    $('.band').not(current).find('.content').slideUp('fast')
    current.find('.content').slideToggle('fast')