;(function($) {
  // multiple plugins can go here
  (function(pluginName) {
    var defaults = {

      getCurrentTrack: function(url, $elem) {

        var self = this;

        $.ajax({ url: url, data: null, success: function(data) {
          self.showCurrentTrack(data, $elem);
        }, dataType: "jsonp" });

      },

      showCurrentTrack: function(data, $elem) {

        var tracks = data.recenttracks.track;

        track = tracks[0];

        if (track && "@attr" in track && track["@attr"].nowplaying == "true") {

          var separator = (track.name.length + track.artist["#text"].length > 25) ? ' by ': ' by ';

          $elem.find(".track").html('<img src="eq.gif" width="12px" height="12px" />' + track.name + separator + '<strong>' + track.artist["#text"] + '</strong>');
          $elem.addClass("active");
          $elem.find(".track").delay(250).fadeIn(250);

        }
      }
    };
    $.fn[pluginName] = function(options) {
      options = $.extend(true, {}, defaults, options);

      return this.each(function() {
        var elem = this,
        $elem = $(elem);

        // heres the guts of the plugin
        var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + options.username + "&api_key=" + options.api_key + "&limit=1&format=json&callback=lastTrackCallback";

        $elem.append('<a href="http://www.lastfm.es/user/' + options.username + '" title="Currently listening"><div class="track"></div></a>');

        options.getCurrentTrack(url, $elem);

      });
    };
    $.fn[pluginName].defaults = defaults;
  })('snitch');
})(jQuery);
