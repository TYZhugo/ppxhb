import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            isLogin:false
        }
    },
    mutations:{
        LoginSuccess(state){
            state.isLogin = true
        }
    }
})

export default store