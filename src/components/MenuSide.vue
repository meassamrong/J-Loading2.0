<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="menu-side">
        <div class="logo">
            <img src="../assets/image/Enterprise-AI-landscape-2020-updated.jpg" alt="">
        </div>
        <div class="title" style="text-center; font-family: Plaguard-ZVnjx; font-size: 50px; text-align: center; background-color: #00cc6d; color: #ffff">
            KHMER 90s Raching RP
          </div>
        <div class="menu-items">
          <ul>
            <li><RouterLink to="/">HOW TO PLAY</RouterLink></li>
            <li><RouterLink to="/">CONTENT</RouterLink></li>
            <li><RouterLink to="/">VIDEOS</RouterLink></li>
            <li><RouterLink to="/">SUPPORTER</RouterLink></li>
          </ul>
        </div>
    </div>
</template>
<style scoped>

.menu-side {
  position: absolute;
  z-index: 99;
  height: 100vh;
  width: 35%;
  background-color: rgba(226, 195, 255, 0.397);
  overflow: hidden;
}
.logo {
  position: absolute;
  left: 50%;
  top: 15%;
  height: 200px;
  width: 200px;
  border: solid 5px #00cc6d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: translate(-50%);
  
}
.logo img {
    height: 110%;
    width: 110%;
    padding: 0px;
    margin: 0px;
  }
/* menu */
.menu-items {
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-items:after {
  content: "Development by J'Corp#5228";
  position: absolute;
  height: 200%;
  top: 20px; right: -500%;
  background: rgba(255,255,255,.8);
  transform-origin: 54% 0;
  transform: rotate(45deg);
  z-index: -1;
  animation: menu-itemsBg 1s ease-in forwards;
}
@keyframes menu-itemsBg {
  from {
    width: 1500%; 
  }
  to {
    width: 1200%; 
  }
}
.menu-items ul {
  padding: 0px;
  margin: 0px;
}
.menu-items ul li {
  list-style-type: none;
}
.menu-items ul li a {
  display: block;
  font-size: 35px;
  font-family: Plaguard-ZVnjx;
  text-decoration: none;
  color: #00cc6d;
  transition: all 0.2s;
}
.menu-items ul li a:hover {
  transform: scale(1.2);
  
}

</style>