<template>
  <main class="container">
    <div class="card">
      <h2>Login User</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      loading: false,
      success: false,
      error: null,
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      this.success = false;
      this.error = null;
console.log("formdata", this.formData);
      fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData),
      })
        .then((response) => {
          if (response.ok) {
            this.success = true;
            this.formData = {
              email: "",
              password: ""
            };
          } else {
            throw new Error("Failed to submit form");
          }
        })
        .catch((error) => {
          this.error = error.message;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<style>
.card {
    margin: 40px auto;
  padding: 40px;
  width: 60%;
}
</style>