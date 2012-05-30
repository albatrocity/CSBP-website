$ ->
  spinOpts =
    lines: 7
    length: 0
    width: 3
    radius: 6
    rotate: 0
    color: "#000"
    speed: 0.9
    trail: 24
    shadow: false
    hwaccel: false
    className: "spinner"
    zIndex: 2e9
    top: "auto"
    left: "auto"


  $('.band .content').wrap("<div class='content-wrapper'></div>")
  $('.band .name-time').click ->
    current       = $(this).parent ".band"
    photo         = current.find '.photo'
    photoURL      = photo.data 'src'
    notCurrent    = $('.band').not(current)
    notCurrent.find('.content-wrapper').css
      height: 0
      opacity: 0

    current.addClass('loading').append("<div id='loading'></div>")
    $('#loading').spin(spinOpts)
    if photo.find('img').attr('src') == undefined
      photo.find('img').attr('src', photoURL).imagesLoaded ->
        revealImage(current)
    else
      revealImage(current)

  revealImage = (el) ->
    el.removeClass('loading').find('#loading').remove()
    el.find('.content-wrapper').css
      height: el.find('.content').outerHeight() + 20,
      opacity: 1



$.fn.spin = (opts) ->
  @each ->
    $this = $(this)
    data = $this.data()
    if data.spinner
      data.spinner.stop()
      delete data.spinner
    if opts isnt false
      data.spinner = new Spinner($.extend(
        color: $this.css("color")
      , opts)).spin(this)

  this