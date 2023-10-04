import './assets/main.css'

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
  directives,
  theme: {
    defaultTheme: 'dark', // Establece el tema por defecto a 'light'
    themes: {
      dark: true,
        colors: {
        background:'#1976D2',
        primary: '#1976D2', // Color primario en modo oscuro
        secondary: '#424242', // Color secundario en modo oscuro
        accent: '#82B1FF', // Color de acento en modo oscuro
      },
    },
  },
});

// Usar Vuetify en la aplicación
app.use(vuetify)

app.mount('#app')

