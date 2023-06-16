<template>
    <canvas ref="canvas" id="canvas1"></canvas>
  </template>
<style scoped>
  #canvas1{
  position: absolute;
  top: 0; left:0;
  width: 100%;
  height: 100%;
  background-color: #7c7c7c54;
  opacity: 60%;
}
</style>
  <script>
  export default {
    mounted() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
  
      this.area = Math.sqrt(this.canvas.width * this.canvas.height);
      this.radiusLength = this.canvas.width * this.canvas.height / 8000;
      this.particlesArray = [];
      this.mouse = {
        x: null,
        y: null,
        radius: this.radiusLength
      };
  
      window.addEventListener("mousemove", (event) => {
        this.mouse.x = event.x;
        this.mouse.y = event.y;
      });
  
      window.addEventListener("mouseout", () => {
        this.mouse.x = undefined;
        this.mouse.y = undefined;
      });
      window.addEventListener("resize", () => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.radiusLength = this.canvas.width * this.canvas.height / 9000;
        this.createParticles();
      });
  
      this.createParticles();
      this.animate();
    },
    methods: {
      createParticles() {
        this.particlesArray = [];
        const noOfParticles = this.canvas.width * this.canvas.height / 12000;
  
        for (let i = 0; i < noOfParticles; i++) {
          const size = Math.random() * 1 + 1;
          const x = Math.random() * (window.innerWidth - 2 * size) + 2 * size;
          const y = Math.random() * (window.innerHeight - 2 * size) + 2 * size;
          const velX = Math.random() * 5 - 2.5;
          const velY = Math.random() * 5 - 2.5;
          const color = "#00cc6d";
  
          this.particlesArray.push({
            x,
            y,
            velX,
            velY,
            size,
            color
          });
        }
      },
      connect() {
        const vicinityDist = this.canvas.width * this.canvas.height / 81;
        for (let i = 0; i < this.particlesArray.length; i++) {
          for (let j = i; j < this.particlesArray.length; j++) {
            const distance =
              Math.pow(
                this.particlesArray[i].x - this.particlesArray[j].x,
                2
              ) +
              Math.pow(this.particlesArray[i].y - this.particlesArray[j].y, 2);
  
            const opacity = 1 - distance / 25000;
  
            if (distance < vicinityDist) {
              this.ctx.strokeStyle = `rgba(0,146,255,${opacity})`;
              this.ctx.lineWidth = 1;
              this.ctx.beginPath();
              this.ctx.moveTo(
                this.particlesArray[i].x,
                this.particlesArray[i].y
              );
              this.ctx.lineTo(
                this.particlesArray[j].x,
                this.particlesArray[j].y
              );
              this.ctx.stroke();
            }
          }
        }
      },
      animate() {
        requestAnimationFrame(this.animate);
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  
        for (let i = 0; i < this.particlesArray.length; i++) {
          const particle = this.particlesArray[i];
  
          if (particle.x > this.canvas.width || particle.x < 0) {
            particle.velX = -particle.velX;
          }
          if (particle.y > this.canvas.height || particle.y < 0) {
            particle.velY = -particle.velY;
          }
  
          const dx = this.mouse.x - particle.x;
          const dy = this.mouse.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
  
          if (dist < this.mouse.radius + particle.size) {
            const buffer = particle.size * 10;
  
            if (
              this.mouse.x < particle.x &&
              particle.x < this.canvas.width - buffer
            ) {
              particle.x += 10;
            }
            if (this.mouse.x > particle.x && particle.x > buffer) {
              particle.x -= 10;
            }
            if (
              this.mouse.y < particle.y &&
              particle.y < this.canvas.height - buffer
            ) {
              particle.y += 10;
            }
            if (this.mouse.y > particle.y && particle.y > buffer) {
              particle.y -= 10;
            }
          }
  
          particle.x += particle.velX;
          particle.y += particle.velY;
  
          this.ctx.beginPath();
          this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 1, false);
          this.ctx.fillStyle = particle.color;
          this.ctx.fill();
        }
  
        this.connect();
      }
    }
  };
  </script>
  