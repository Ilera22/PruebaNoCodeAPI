import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

// Usar Vue Router
app.use(router)

// Configurar Vuetify
const vuetify = createVuetify({
  components,
  directives
})

app.use(vuetify)

app.mount('#app')
