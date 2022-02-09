import { createRouter ,createWebHashHistory} from 'vue-router'
import Home from './components/Home.vue'
import Newbuilt from './components/Newbuilt.vue'
import Revise from './components/Revise.vue'
import Show from './components/Show.vue'
import Login from './components/Login.vue'
import store from './store'
import Register from './components/Register.vue'
const routers=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/Newbuilt',
            component:Newbuilt
        },
        {
            path:'/Revise',
            name:'revise',
            component:Revise
        },
        {
            path:'/Show',
            component:Show
        },
        {
            path:'/Login',
            name:'login',
            component:Login
        },
        {
            path:'/Register',
            component:Register
        }
    ]

});
routers.beforeResolve((to,from,next)=>{
    let logined=store.state.islogin;
    if(to.name=='login'||to.path==='/Register'){
        if(!logined){
            next();
        }else{
            routers.replace('/');
        }
    }else{
        if(!logined){
            routers.replace('/Login');
        }else{
            next();
        }
    }
})
export default routers