music-snitch
==============

Informs the world about the music you're currently listenting to.

### Installation

1. Get a [Last.fm API account](http://www.last.fm/api/account/create).
2. Grab the public API Key.
3. Add the ```jquery.music.snitch.js``` file to your HTML page.
4. Add an element in your HTML where you want the snitch to appear (eg: ```<div class="snitch"></div>```).
5. Launch the plugin: 
```js
  $(function() {
    $(".snitch").snitch({ username: "YOUR_LASTFM_USERNAME", api_key: "YOUR_LASTFM_API_KEY" });
  });
```

6. Enable the 'Scrobble to Last.fm' option from your favorite music player (see instructions below).
7. Play a nice song and refresh the page.

#### Events

You can listen to the "listening" event. It will return the track info (song name and artist).

```js
  $(function() {
    $(".snitch")
    .snitch({ username: "YOUR_LASTFM_USERNAME", api_key: "YOUR_LASTFM_API_KEY" })
    .on("listening", function(e, track) {
      console.log(track.name, track.artist);
    });
  });
```

#### Scrobbling

* [From Spotify](https://support.spotify.com/us/learn-more/faq/#!/article/Scrobble-to-Last-fm).  
* [From Rdio](http://help.rdio.com/customer/portal/articles/58992-external-settings).  

----

The jQuery plugin was created using the [jQuery Plugin Template](http://kolodny.github.io/blog/blog/2013/12/27/my-favorite-jquery-plugin-template/) by Moshe Kolodny.
