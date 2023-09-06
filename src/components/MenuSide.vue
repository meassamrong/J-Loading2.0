<template>
  <div class="control-menu">
    <ul>
      <li><router-link to="/setting" @click="togglePage('settingPage')">Setting</router-link></li>
      <li><router-link to="/racing" @click="togglePage('racingPage')">Racing</router-link></li>
      <li><router-link to="/" @click="togglePage('homePage')">HOME</router-link></li>
    </ul>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router'
import store from '../store'
export default {
  setup() {
    const togglePage = (page) => {
      if (page == 'homePage') {
        store.HomePages = true
        store.RacingPage = false
        store.SettingPage = false
      } else if (page == 'racingPage') {
        store.HomePages = false
        store.RacingPage = true
        store.SettingPage = false
      } else if (page == 'settingPage') {
        store.HomePages = false
        store.RacingPage = false
        store.SettingPage = true
      }
    }
    return {
      togglePage
    }
  },
  components: {
    RouterLink
  }
}
</script>
<style scoped>
.control-menu ul li .memu-active-page {
  background-color: rgb(165, 165, 165);
}

.control-menu {
  top: 50%;
  left: -5%;
  z-index: 999;
  transform: rotate(-90deg) translate(0%, 0%);
  position: absolute;
}

.control-menu ul {
  font-size: 0px;
  margin: 0px;
  padding: 0px;
}

.control-menu ul li {
  display: inline-block;
  border: solid 1px #fff;
  width: auto;
  height: auto;
}

.control-menu ul li a {
  font-size: 20px;
  display: block;
  padding: 10px 50px;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.603);
  transition: all 0.2s ease-in;
}

.control-menu ul li a:hover {
  background-color: rgb(165, 165, 165);
}
</style>
