import { createRouter ,createWebHashHistory} from 'vue-router'
import store from './store'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Exam from './components/Exam.vue'
import Question from './components/Question.vue'
import Manage from './components/Manage.vue'
import Grades from './components/Grades.vue'
import Build from './components/Build.vue'
import Jiankong from './components/Jiankong.vue'

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
            path:'/Exam',
            component:Exam
        },
        {
            path:'/Question',
            component:Question
        },
        {
            path:'/Manage',
            component:Manage
        },
        {
            path:'/Grades',
            component:Grades
        },
        {
            path:'/Build',
            component:Build
        },
        {
            path:'/Jiankong',
            component:Jiankong
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