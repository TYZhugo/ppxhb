import { createRouter ,createWebHashHistory} from 'vue-router'
import store from './store'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Grades from './components/Grades.vue'
import Task from './components/Task.vue'
import Completion from './components/Completion'
import Prevevt from './components/Prevent'
import Forewarm from './components/Forewarm'
import Report from './components/Report'
import Information from './components/Information'

const routers=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/Login',
            component:Login,
            name:'login'
        },
        {
            path:'/Grades',
            component:Grades
        },
        {
            path:'/Task',
            component:Task
        },
        {
            path:'/Completion',
            component:Completion
        },
        {
            path:'/Prevent',
            component:Prevevt
        },
        {
            path:'/Forewarm',
            component:Forewarm
        },
        {
            path:'/Report',
            component:Report
        },
        {
            path:'/Information',
            component:Information
        }
    ]

});
routers.beforeResolve((to,from,next)=>{
    let logined=store.state.islogin;
    if(to.name=='login'){
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