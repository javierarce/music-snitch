class MusicSnitch extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback(e) {
    const username = this.getAttribute("data-username")
    const key = this.getAttribute("data-key")
    const URL  = `//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${key}&limit=1&format=json`

    fetch(URL).then(response => response.json()).then((data) => {
      const track = data.recenttracks.track[0]

      if (track) {
        this.render(track.name, track.artist, track.url)
      }
    })
  }

  render (name, artist, URL) {
    const text = document.createElement('a')
    text.href = URL
    text.textContent = `${name} by ${artist['#text']}`
    text.target = '_blank'
    text.part = 'a'

    const title = document.createElement('strong')
    title.textContent = 'Listening'
    title.part = 'title'

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(title)
    shadow.appendChild(text)

    this.classList.add('is-visible')
  }
}

customElements.define('music-snitch', MusicSnitch)
