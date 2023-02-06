import { createRouter ,createWebHashHistory} from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Function from './components/Function'


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
        },
        {
            path:'/Function',
            component:Function
        }
    ]
})
export default routers