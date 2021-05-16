<template>
<div>
<todopage-com @toDoCreate="todoCreate"></todopage-com>
    <table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Title</th>
      <th scope="col">Content</th>
      <th scope="col">Kind</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in todos" v-bind:key="index">
      <td>{{index+1}}</td>
      <td>{{item.todoTitle}}</td>
      <td>{{item.todoContent}}</td>
      <td>{{item.todoKind}}</td>
      <td><button type="button" class="btn btn-primary" @click="deleteTodo(item.todoNo,index)">삭제하기</button></td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            todos:[
            ]
        }
    },
    mounted(){
            this.getTodos();
    },
    methods:{
        getTodos() {
          this.$on('getToDo',function(){
            console.log
          })
            axios
                .get("http://localhost:8080/todos",
                {headers:{
                'x-auth-token':localStorage.getItem("x-auth-token")
                }})
                .then((res) => {
                this.todos = res.data
                })
                .catch((e) => {
                alert("get 실패");
                console.log(e);
                });
            },
            deleteTodo(todoNo,index){
                axios.delete("http://localhost:8080/todo/"+todoNo)
                .then((data)=>{
                    this.todos.splice(index,1)
                    console.log(data,"삭제성공")
                })
                .catch((e)=> {
                    console.log(e)
                })
            },
            todoCreate(todo){
              console.log("넘어온 todo 확인",todo)
              this.todos.push(todo)
            }
    }
}
</script>