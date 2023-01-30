import { createRouter ,createWebHashHistory} from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'


const routers = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/Login',
            component:Login
        },
        {
            path:'/',
            component:Home
        }
    ]
})
export default routers