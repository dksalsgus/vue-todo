import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        member:{
            memberId:'',
            token:''
        }
    },
    mutations:{
        setMember(state,payload){
            state.member={
                memberId:payload.memberId,
                token:payload.token
            }
        }
    }
});