var username = ""; // your lastfm username
var api_key  = ""; // your lastfm api key

var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + username + "&api_key=" + api_key + "&limit=1&format=json&callback=lastTrackCallback";

function getCurrentTrack() {

  var showCurrentTrack = function(data) {

    var tracks = data.recenttracks.track;

    track = tracks[0];

    if (track && "@attr" in track && track["@attr"].nowplaying == "true") {

      var separator = (track.name.length + track.artist["#text"].length > 25) ? ' by ': ' by ';

      $("#listening .track").html('<img src="eq.gif" width="12px" height="12px" />' + track.name + separator + '<strong>' + track.artist["#text"] + '</strong>');
      $("#listening").addClass("active");
      $("#listening .track").delay(250).fadeIn(250);

    }
  };

  // Get the current track
  $.ajax({ url: url, data: null, success: showCurrentTrack, dataType: "jsonp" });

}
