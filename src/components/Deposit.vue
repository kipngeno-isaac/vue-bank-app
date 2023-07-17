<template>
  <div class="card">
    <h2>Deposit</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Amount</label>
        <input
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="formData.amount"
        />
      </div>
      <button type="submit" class="btn btn-primary" :disabled="loading">{{ loading ? 'Depositing...' : 'Deposit' }}</button>
      <div v-if="success" class="alert-success">
        Form submitted successfully!
      </div>
      <div v-if="error" class="alert-danger">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        amount: 0,
        user_id: 1,
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
      fetch("http://127.0.0.1:8000/api/transactions/deposit", {
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
              amount: 0,
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
</style>