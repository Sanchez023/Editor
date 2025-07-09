
import { createApp } from 'vue'
import './assets/main.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.min.css' // 明确引入 MDI 样式
import router from './router/router.js' // 确保正确引入路由配置

import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
    icons: {
    iconfont: 'mdi', // 默认值（Material Design Icons）
  },
})

createApp(App).use(vuetify).use(router).mount('#app')