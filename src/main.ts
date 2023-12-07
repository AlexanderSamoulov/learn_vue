import { createApp } from 'vue'
import App from './App.vue'
import './style/mainStyle.scss'
import components from '@/components/UI/'

const app = createApp(App)

components.forEach(component=>{
    app.component(component.name,component)
})

/* console.log(components,'components'); */

app.mount('#app')
