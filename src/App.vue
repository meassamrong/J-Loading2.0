<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuSide from './components/MenuSide.vue';
</script>
<template>
  <div>
    <PreloadScreen v-if="preloading" />
    <div v-else>
      <MenuSide/>
      <RouterView />
      <audio-player></audio-player>
    </div>
  </div>
</template>
<script>
import PreloadScreen from './components/LoadingScreen.vue';
import AudioPlayer from './components/AudioPlayer.vue';
export default {
  components: {
    PreloadScreen,
    AudioPlayer,
  },
  data() {
    return {
      preloading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.preloading = false;
    }, 5000);
  },
};
</script>