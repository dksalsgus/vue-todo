<template>
<div>
    <table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Content</th>
      <th scope="col">Kind</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in todos" v-bind:key="item">
      <td>{{index}}</td>
      <td>{{item.todoTitle}}</td>
      <td>{{item.todoContent}}</td>
      <td>{{item.todoKind}}</td>
      <td><button type="button" class="btn btn-primary" @click="deleteTodo(item.todoNo,index)">삭제하기</button></td>
    </tr>
  </tbody>
</table>

<a name="" id="" class="btn btn-primary" href="/todo" role="button">
    Todo 생성
</a>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            todos:[]
        }
    },
    mounted(){
            this.getTodos();
    },
    methods:{
        getTodos() {
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
            }
    }
}
</script>