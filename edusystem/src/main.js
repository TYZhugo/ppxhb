import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { zhCn } from 'element-plus/lib/locale'

const app=createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus,{
    locale:zhCn
})
app.mount('#app')
