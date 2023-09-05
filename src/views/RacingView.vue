<template>
  <div class="control-sencs">
    <swiper
      :centeredSlides="true"
      :loop="true"
      :autoplay="{ delay: 1500, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="modules"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      class="mySwiper"
    >
      <swiper-slide v-for="image in imageSources" :key="image">
        <div class="control-racing-image">
          <img :src="image" />
        </div>
      </swiper-slide>
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
  </div>
</template>
<script>
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import img1 from '../assets/image/racing/img1.jpg'
import img2 from '../assets/image/racing/img2.jpg'
import img3 from '../assets/image/racing/img3.jpg'
import img4 from '../assets/image/racing/img4.jpg'
import img5 from '../assets/image/racing/img5.jpg'
import img6 from '../assets/image/racing/img6.webp'
export default {
  data() {
    return {
      imageSources: [img1, img2, img3, img4, img5, img6]
    }
  },
  setup() {
    const progressCircle = ref(null)
    const progressContent = ref(null)
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty('--progress', 1 - progress)
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`
    }
    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay, Pagination, Navigation]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
<style scoped>
.control-sencs {
  z-index: 999;
  height: 70vh;
  width: 80%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.205);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border: solid 2px #fff;
}

.control-racing-image {
  height: 100%;
  width: 100%;
}

.control-racing-image img {
  height: 100%;
  width: 100%;
}

/* Swiper */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: #fff;
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>
