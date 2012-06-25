$ ->
  $.getJSON "/tracks.json", (data) ->
    $("#music_player").ttwMusicPlayer data,
      autoPlay: false
      description: description
      currencySymbol: "$"
      buyText: "DOWNLOAD"
      tracksToShow: 8
      jPlayer:
        swfPath: "/js"

    description = ""