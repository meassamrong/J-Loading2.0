<template>
  <div class="background">
    <div
      v-for="(imageUrl, index) in imageUrls"
      :key="index"
      :class="{ active: currentIndex === index }"
      class="background-image"
      :style="{ 'background-image': `url(${imageUrl})` }"
    ></div>
  </div>
</template>

<script>
import bgImage1 from '../assets/image/image1city.jpg'
import bgImage2 from '../assets/image/image2snow.jpg'
import bgImage3 from '../assets/image/image3sea.jpg'
import { ref, onMounted } from 'vue'
export default {
  name: 'BackgroundComponent',
  setup() {
    const currentIndex = ref(0)
    const imageUrls = [
      bgImage1,
      bgImage2,
      bgImage3

      // Add more image URLs here
    ]

    onMounted(() => {
      setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % imageUrls.length
      }, 5000)
    })

    return {
      currentIndex,
      imageUrls
    }
  }
}
</script>

<style>
.background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -2;
  opacity: 50%;
  filter: brightness(0.5);
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 5075px; /* Adjust this size based on your needs */
  height: 100%;
  animation: slideAnimation 50s linear infinite alternate;
}

@keyframes slideAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1920px); /* Adjust this value based on the image width */
  }
}
.active {
  z-index: 1;
}
</style>
