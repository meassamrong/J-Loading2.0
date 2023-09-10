<template>
  <div class="control-auto-player">
    <audio ref="audio" loop></audio>
  </div>
</template>

<script>
import twentyOutnow from '../assets/music/20OUTNOWc.mp3'
import staywithme from '../assets/music/stayftme.mp3'
import EyesMountainJDMDriftEdit from '../assets/music/EyesMountainJDMDriftEdit.mp3'
import Sufferwithme from '../assets/music/Sufferwithme.mp3'
export default {
  data() {
    return {
      audio: null,
      autoSources : [twentyOutnow, staywithme, EyesMountainJDMDriftEdit, Sufferwithme],
      defaulsvolumes : 0.4
    }
  },
  mounted() {
    this.audio = this.$refs.audio
    // Load your audio file
    this.audio.volume = this.defaulsvolumes
    this.randomeMusic()
    this.playAudio()
  },
  methods: {
    playAudio() {
      this.audio.play()
    },
    randomeMusic(){
      this.audio.src = this.autoSources[Math.floor(Math.random() * this.autoSources.length)]
    },
    control_music(){
      
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
