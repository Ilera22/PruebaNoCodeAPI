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
    dark: true, // Puedes usar true para un tema oscuro o false para uno claro
    themes: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      primary: '#6200EE',
      'primary-darken-1': '#3700B3',
      secondary: '#03DAC6',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
      },
      light: {
        primary: '#2196F3', // Color primario en modo claro
        secondary: '#FF4081', // Color secundario en modo claro
        accent: '#536DFE', // Color de acento en modo claro
      },
    },
  },
);
export default vuetify;


app.use(vuetify)

app.mount('#app')
