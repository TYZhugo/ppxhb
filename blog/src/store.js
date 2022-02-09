
import {createStore} from 'vuex'  
const store=createStore({
    state(){
        return{
        Users:[{
            username:'123',
            password:'123'
        }
        ],
        islogin:false
        }
    },
    mutations:{
        change3(state,revision){
            state.List.splice(revision.id,1,revision)
        },
        loginSuccess(state){
            state.islogin=true;
        },
        newBuiltUser(state,user){
            state.Users.push(user)
        }
    },
    actions:{

    }
})
export default store