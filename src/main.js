import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Import- Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
//Import- Bootstrap

// Import Components
import Components from './components'
// Import Components


const app = createApp(App)
app.use(store).use(router).mount('#app')


Components.forEach(component =>{
    app.component(component.name, component)
})
