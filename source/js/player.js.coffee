$ ->
  $.getJSON "/tracks.json", (data) ->
    $("#music_player").ttwMusicPlayer data,
      autoPlay: false
      description: description
      currencySymbol: "$"
      buyText: "VIEW ALBUM"
      jPlayer:
        swfPath: "/js"

    description = ""