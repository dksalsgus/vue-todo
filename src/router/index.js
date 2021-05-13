import Vue from 'vue'
import Router from 'vue-router'
import TodoPage from '@/components/TodoPage'
import TodoList from '@/components/TodoList'
import MemberJoinPage from '@/components/MemberJoinPage'
import LoginPage from '@/components/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/todo',
      name:'TodoPage',
      component: TodoPage
    },
    {
      path:'/todos',
      name:'TodoList',
      component: TodoList
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
