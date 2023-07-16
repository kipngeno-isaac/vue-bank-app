<template>
  <div class="card">
    <h2>Transfer funds</h2>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Receiver Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Amount</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" class="btn btn-primary">Transfer</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>