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
    
    <button type="button" class="btn btn-primary" @click="moveJoin">
      Join
    </button>
  </form>
  </div>
</template>
<script>
import axios from "axios";

const storage = window.sessionStorage;
export default {
  data() {
    return{
      member:{
        memberId:'',
        memberPw:'',
      }
    }
  },
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:8080/loginPost", {memberId:this.member.memberId,memberPw:this.member.memberPw})
        .then((res) => {
          console.log(res.data)
          localStorage.setItem("x-auth-token",res.data.token)
          this.$store.commit('setMember',{
            memberId:this.member.memberId,
            token:res.data.token
          })
          console.log(this.$store.state)
        })
        .catch((e) => {
          alert("로그인 실패");
          console.log(e);
        });
    },
    moveJoin(){
      location.href='/join'
    }
  },
};
</script>