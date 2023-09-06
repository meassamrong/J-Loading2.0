<template>
  <div class="control-main-screen">
    <PreloadScreen v-if="preloading" />
    <div v-else>
      <LoadingProgress />
      <MenuSide />
      <audioPlayer />
      <!-- page -->
      <div class="control-home-page" v-if="HomePages">
        <HomeViewVue />
      </div>
      <div class="control-racing-page" v-if="RacingPage">
        <RacingViewVue />
      </div>
      <div class="control-setting-page" v-if="SettingPage">
        <SettingViewVue />
      </div>
      <!--  backgroup -->
      <ParticleNetwork />
      <BackgroundRolling />
    </div>
  </div>
</template>
<script>
import store from './store'
import HomeViewVue from './views/HomeView.vue'
import RacingViewVue from './views/RacingView.vue'
import SettingViewVue from './views/SettingView.vue'
import PreloadScreen from './components/LoadingScreen.vue'
import ParticleNetwork from './components/ParticleNetwork.vue'
import BackgroundRolling from './components/BackgroundRolling.vue'
import LoadingProgress from './components/LoadingProcess.vue'
import MenuSide from './components/MenuSide.vue'
import audioPlayer from './components/AudioPlayer.vue'
import { ref, watchEffect } from 'vue'
export default {
  data() {
    return {
      preloading: false
    }
  },
  setup() {
    const HomePages = ref(store.HomePages)
    const RacingPage = ref(store.RacingPage)
    const SettingPage = ref(store.SettingPage)
    watchEffect(() => {
      HomePages.value = store.HomePages
      RacingPage.value = store.RacingPage
      SettingPage.value = store.SettingPage
    })
    return {
      HomePages,
      RacingPage,
      SettingPage
    }
  },
  components: {
    audioPlayer,
    ParticleNetwork,
    BackgroundRolling,
    PreloadScreen,
    MenuSide,
    LoadingProgress,
    HomeViewVue,
    RacingViewVue,
    SettingViewVue
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
