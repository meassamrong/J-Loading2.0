import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import $ from 'jquery'
app.use($)
app.component('GDialog', GDialog)
app.use(router)
app.mount('#app')
