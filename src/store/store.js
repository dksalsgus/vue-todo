import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        member:{
            memberId:'',
        }
    },
    mutations:{
        setMemberId(state,memberId){
            state.member.memberId = memberId
        }
    }
});