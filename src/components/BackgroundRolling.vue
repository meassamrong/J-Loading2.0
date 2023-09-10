<template>
  <div class="background">
    <div id="iframeId"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      youtubeVedioID : [
        'u9fftcQGSa0',
        '31kplxJn6nw',
        'fdS1ZQ7WJMk',
      ]
    }
  },
  mounted() {
    const randomeVideo = () => {
      const randomVideoID = this.youtubeVedioID[Math.floor(Math.random() * this.youtubeVedioID.length)];
      return randomVideoID;
    };
    // Function to initialize YouTube Player
    const onYouTubeIframeAPIReady = () => {
      // iframeId parameter should match your Iframe's id attribute
      const player = new YT.Player('iframeId', {
        width: 100 + "%",
        height: 110 + "%",
        videoId: randomeVideo(),
        playerVars: {
          controls: 0,     // Hide video controls
          loop: 1,         // Loop the video
          modestbranding: 1, // Show minimal YouTube branding
          playsinline: 1,  // Play video inline (important for mobile)
          rel: 0,          // Hide related videos at thse end
          autohide: 1,     // Hide video controls when not interacting
          fs: 0,           // Hide full-screen button
          iv_load_policy: 3, // Hide video annotations
          start: 0,        // Set the video start time (in seconds)
          suggestedQuality: 'hd1080' // Set default resolution
        },
        events: {
          onReady: function (event) {
            event.target.setVolume(0);
            event.target.playVideo();
          }
        }
      });
      console.log(randomeVideo())
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);
    // Set the callback function for when the script is loaded
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  }
};
</script>

<style>

.background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -2;
  opacity: 0%;
  animation-name: startPlaybackground;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
  animation-duration: 10s;
}
#iframeId {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}
@keyframes startPlaybackground {
  0% {
    opacity: 0%;
  }
  100%{
    opacity: 100%;
  }
}
.active {
  z-index: 1;
}
</style>
