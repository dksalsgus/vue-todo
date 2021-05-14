<template>
  <div class="container">
    <h2>Todo List</h2>
    <div class="mb-3">
      <select id="disabledSelect" class="form-select" v-model="todo.todoKind">
        <option value="할일" selected>할일</option>
        <option  value="진행중">진행중</option>
        <option value="완료">완료</option>
      </select>
    </div>
    <div class="input-group" style="margin-bottom: 10px">
      <input
        type="text"
        class="form-control"
        placeholder="할일을 입력하세요"
        v-model="todo.todoTitle"
        v-on:keyup.enter="createTodo(todo)"
      />
      <textarea
        class="form-control"
        placeholder="내용"
        style="resize:none"
        v-model="todo.todoContent"
      >
      </textarea>
      
    </div>
    <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="createTodo(todo)">
          추가
        </button>
        <button class="btn btn-default" type="button" >
          리셋
        </button>
        <button class="btn btn-default" type="button" @click="moveList()" >
          리스트
        </button>
      </span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    createTodo(todo) {
      axios
        .post("http://localhost:8080/todo", todo,{
          headers:{
            'x-auth-token':localStorage.getItem("x-auth-token")
          }
        })
        .then((res) => {
          console.log('Todo 생성 성공');
          console.log(res.data);
          this.resetTodo();
        })
        .catch((e) => {
          alert("Todo 생성 실패");
          console.log(e);
        });
    },
    resetTodo(){
      this.todo.todoTitle= ''
      this.todo.todoContent= ''
      this.todo.todoKind= ''
    },
    moveList(){
      location.href='/todos'
    }
  },
  data() {
    return {
      todo: {
        todoTitle: '',
        todoContent: '',
        todoKind: '',
      },
    };
  },
  mounted() {
  },
};
</script>