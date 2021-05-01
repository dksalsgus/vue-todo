<template>
<div>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Id</label>
      <input
      name="memberId"
        type="text"
        class="form-control"
        id="memberId"
        v-model="member.memberId"
      />
    </div>
    <div class="mb-3">
      <label for="memberPw" class="form-label">Password</label>
      <input
      name="memberPw"
        type="password"
        class="form-control"
        id="memberPw"
        v-model="member.memberPw"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click="onSubmit()">
      Login
    </button>
  </form>
  </div>
</template>
<script>
import axios from "axios";
import { store } from '../store/store';
export default {
  data() {
    return {
      member: {
        memberId: this.memberId,
        memberPw: this.memberPw,
      },
    };
  },
  methods: {
    onSubmit(member) {
      axios
        .post("http://localhost:8080/login", member)
        .then((res) => {
          console.log(member)
          store.commit('setMemberId',member.memberId)
          console.log(store.state.member)
          console.log(res.data);
          alert('로그인 성공')
          location.href = "http://localhost:3000/todos";
        })
        .catch((e) => {
          alert("로그인 실패");
          console.log(e);
        });
    },
  },
};
</script>