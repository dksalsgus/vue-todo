<template>
  <div class="container">
    <h2>Todo List</h2>
    <div class="mb-3">
      <select id="disabledSelect" class="form-select" v-model="todo.todoKind">
        <option value="할일">할일</option>
        <option selected="selected" value="진행중">진행중</option>
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
        v-model="todo.todoContent"
      >
      </textarea>
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="createTodo(todo)">
          추가
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {store} from '../store/store'
export default {
  methods: {
    createTodo(todo) {
      axios
        .post("http://localhost:8080/todo", todo)
        .then((res) => {
          console.log('Todo 생성 성공');
          console.log(res.data);
        })
        .catch((e) => {
          alert("Todo 생성 실패");
          console.log(e);
        });
    },
    getTodos() {
      console.log(store.getters)
      axios
        .get("http://localhost:8080/"+store.state.member.memberId/"todos")
        .then((res) => {
          todos = res.data;
          console.log(todos);
        })
        .catch((e) => {
          alert("get 실패");
          console.log(e);
        });
    },
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
    this.getTodos();
  },
};
</script>