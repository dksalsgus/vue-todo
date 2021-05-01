<template>
<div>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Id</label>
      <input
        type="text"
        class="form-control"
        id="memberId"
        v-model="member.memberId"
      />
    </div>

    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="memberPw"
        v-model="member.memberPw"
      />
    </div>
    <div class="mb-3">
      <label for="memberName" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="memberName"
        v-model="member.memberName"
      />
    </div>

    <div class="mb-3">
      <label for="memberEmail" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="member.memberEmail"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label"> Gender</label>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label"> Male</label>
      <input
        type="radio"
        class="form-control"
        value="Male"
        v-model="member.memberGender"
        checked
      />
      <label for="exampleInputPassword1" class="form-label"> Female</label>
      <input
        type="radio"
        class="form-control"
        value="Female"
        v-model="member.memberGender"
      />
    </div>

    <button type="submit" class="btn btn-primary" @click="onSubmit()">
      Submit
    </button>
    <button type="reset" class="btn btn-primary" @click="onReset()">
      Reset
    </button>
  </form>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      member: {
        memberEmail: this.memberEmail,
        memberId: this.memberId,
        memberPw: this.memberPw,
        memberName: this.memberName,
        memberGender: this.memberGender,
      },
    };
  },
  methods: {
    onReset() {
      (this.memberId = ""),
        (this.memberEmail = ""),
        (this.memberPw = ""),
        (this.memberName = ""),
        (this.memberGender = null);
    },
    onSubmit() {
      axios
        .post("http://localhost:8080/member", this.member)
        .then((res) => {
          console.log(res.data);
          location.href='/login'
        })
        .catch((e) => {
          alert("회원가입 실패");
          console.log(e);
        });
    },
  },
};
</script>
