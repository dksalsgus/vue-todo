<template>
<div>
  <form v-on:submit.prevent="onSubmit">
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
    <button type="submit" class="btn btn-primary" >
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
        memberId: '',
        memberPw: '',
      },
    };
  },
  methods: {
    onSubmit() {
      let frm = new FormData()
      frm.append('memberId',this.member.memberId)
      frm.append('memberId',this.member.memberPw)
      axios
        .post("http://localhost:8080/login", frm)
        .then((res) => {
          console.log(res.data)
          store.commit('setMemberId',this.member.memberId)
          console.log('test',store.state.member)
          // location.href = "http://localhost:3000/todos";
        })
        .catch((e) => {
          alert("로그인 실패");
          console.log(e);
        });
    },
  },
};
</script>