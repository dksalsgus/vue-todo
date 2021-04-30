import Vue from 'vue'
import Router from 'vue-router'
import TodoPage from '@/components/TodoPage'
import MemberJoinPage from '@/components/MemberJoinPage'
import LoginPage from '@/components/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/todos',
      name:'TodoPage',
      component: TodoPage
    },
    {
      path:'/join',
      name:'MemberJoinPage',
      component: MemberJoinPage
    },
    {
      path:'/login',
      name:'LoginPage',
      component: LoginPage
    }
  ],
  mode:"history"
})
