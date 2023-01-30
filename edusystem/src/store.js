import {createStore} from 'vuex'  
const store=createStore({
    state(){
        return{
        Users:[{
            username:'112110311',
            password:'112110311'
        }
        ],
        islogin:true,
        isteacher:true
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
        },
        loginChange(state){
            state.islogin=false;
        }
    },
    actions:{

    }
})
export default store