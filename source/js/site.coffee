#= require jquery/jquery.js
#= require fadeshow/src/jquery.fadeshow-0.1.1.js
#= require "jquery.jplayer"
#= require "ttw-music-player"
#= require "player"

$ ->
  $("#header_carousel").fadeShow
    correctRatio: true
    speed: 5000
    shuffle: true
    images: [
      './img/photos/stage1.jpg'
      './img/photos/wing1.jpg'
      './img/photos/wing2.jpg'
    ]