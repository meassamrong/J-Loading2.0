<template>
  <div class="control-main-screen">
    <PreloadScreen v-if="preloading" />
    <div v-else>
      <LoadingProgress />
      <MenuSide />
      <audioPlayer />
      <RouterView />
      <ParticleNetwork />
      <BackgroundRolling />
    </div>
  </div>
</template>
<script>
import { RouterView } from 'vue-router'
import PreloadScreen from './components/LoadingScreen.vue'
import ParticleNetwork from './components/ParticleNetwork.vue'
import BackgroundRolling from './components/BackgroundRolling.vue'
import LoadingProgress from './components/LoadingProcess.vue'
import MenuSide from './components/MenuSide.vue'
import audioPlayer from './components/AudioPlayer.vue'
export default {
  components: {
    audioPlayer,
    RouterView,
    ParticleNetwork,
    BackgroundRolling,
    PreloadScreen,
    MenuSide,
    LoadingProgress
  },
  data() {
    return {
      preloading: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.preloading = false
    }, 5000)
  }
}
</script>

<style scoped>
.control-main-screen {
  height: 100vh;
  width: 100%;
  position: fixed;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 999;
  margin: 0px;
  padding: 0px;
}
</style>
