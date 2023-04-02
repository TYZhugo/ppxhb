import { createRouter ,createWebHashHistory} from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Function from './components/Function'
import Week from './components/Week'
import store from './store'


const routers = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/Login',
            component:Login,
            name:'Login'
        },
        {
            path:'/',
            component:Home
        },
        {
            path:'/Function',
            component:Function
        },
        {
            path:'/Week',
            component:Week
        }
    ]
})
routers.beforeEach((to,from,next)=>{
    if(to.name!=='Login' && store.state.isLogin == false){
        routers.replace('/Login');
    }else{
        next()
    }
})
export default routers