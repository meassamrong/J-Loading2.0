<template>
  <div class="control-auto-player">
    <audio ref="audio" autoplay loop></audio>
    <vue-waveform :audio-element="audio" />
  </div>
</template>

<script>
import VueWaveform from 'vue-waveform'
import autoSources from '../assets/music/20OUTNOW.mp3'
export default {
  components: {
    VueWaveform
  },
  data() {
    return {
      audio: null
    }
  },
  mounted() {
    this.audio = this.$refs.audio
    // Load your audio file
    this.audio.src = autoSources
    this.audio.volume = 0.5
    this.playAudio()
  },
  methods: {
    playAudio() {
      this.audio.play()
    }
  }
}
</script>
<style scoped>
.control-auto-player {
  position: absolute;
  z-index: 99;
  bottom: 0px;
  right: 0%;
}
</style>
