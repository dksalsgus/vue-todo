<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Id</label>
      <input
        type="text"
        class="form-control"
        id="memberId"
        v-model="member.memberId"
      />
    </div>
    <div class="mb-3">
      <label for="memberPw" class="form-label">Password</label>
      <input
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
</template>
<script>
import axios from "axios";
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
          location.href = "http://localhost:3000/#/todos";
          console.log(res.data);
        })
        .catch((e) => {
          alert("실패");
          console.log(e);
        });
    },
  },
};
</script>