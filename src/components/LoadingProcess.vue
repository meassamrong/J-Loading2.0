<template>
  <div>
    <div class="progressBar"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      thisCount: 0
    }
  },
  mounted() {
    const handlers = {
      startInitFunctionOrder: (data) => {
        this.count = data.count
      },

      initFunctionInvoking: (data) => {
        this.updateProgressBar(data.idx)
      },

      startDataFileEntries: (data) => {
        this.count = data.count
      },

      performMapLoadFunction: () => {
        this.thisCount++
        this.updateProgressBar(this.thisCount)
      }
    }

    window.addEventListener('message', (e) => {
      ;(handlers[e.data.eventName] || function () {})(e.data)
    })
  },
  methods: {
    updateProgressBar(index) {
      const progressBar = document.querySelector('.progressBar')
      if (progressBar) {
        progressBar.style.left = '0%'
        progressBar.style.width = (index / this.count) * 100 + '%'
      }
    }
  }
}
</script>

<style scoped>
.progressBar {
  border-radius: 10px;
  z-index: 99;
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  height: 20px;
  width: 500px;
  /* Adjust as needed */
  background-color: #ffffff38;
  /* Adjust the color as needed */
  transition: width 0.2s ease;
  /* Adjust the animation speed as needed */
}
</style>
