<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="user Email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary" @click="onSubmit()">
      Submit
    </button>
    <button type="reset" class="btn btn-primary" @click="onReset()">
      Reset
    </button>
  </form>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    onReset() {
      console.log("Reset");
    },
    onSubmit() {
      console.log("Submit");
    },
  },
};
</script>
