music-snitcher
==============

Informs the world about the music you're currently listenting to.


1. Get a [Last.fm API account](http://www.last.fm/api/account/create).
2. Grab the public API Key.
3. Add the ```jquery.music.snitcher.js``` file to your HTML page.
4. Add an element in your HTML where you want the snitcher to appear (eg: <div class="snitch"></div>).
5. Launch the plugin:

```javascript
    <script type="text/javascript">
      $(function() {
        $(".snitch").snitch({ username: "YOUR_LASTFM_USERNAME", api_key: "YOUR_LASTFM_API_KEY" });
      })
    </script>
```

