;(function($) {

  (function(pluginName) {
    var defaults = {

      getCurrentTrack: function(url, $elem) {

        var self = this;

        $.ajax({ url: url, data: null, success: function(data) {
          self.showCurrentTrack(data, $elem);
        }, dataType: "jsonp" });

      },

      showCurrentTrack: function(data, $elem) {

        if (data.error) {
          console.error(data.message);
          return;
        }

        var tracks = data.recenttracks.track;

        track = tracks[0];

        if (track && "@attr" in track && track["@attr"].nowplaying == "true") {

          $elem.find(".track").html(track.name + ' by ' + '<strong>' + track.artist["#text"] + '</strong>');
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

        var url  = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + options.username + '&api_key=' + options.api_key + '&limit=1&format=json&callback=lastTrackCallback';
        var html = '<a href="http://www.lastfm.es/user/' + options.username + '" title="Currently listening"><div class="track"></div></a>';

        $elem.append(html);

        options.getCurrentTrack(url, $elem);

      });
    };
    $.fn[pluginName].defaults = defaults;
  })('snitch');
})(jQuery);
