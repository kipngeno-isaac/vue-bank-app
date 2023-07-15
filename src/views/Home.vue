<template>
  <main class="container-fluid">
    <div class="sidenav">
      <router-link to="/home">Home</router-link>
      <router-link to="/deposit">Deposit</router-link>
      <router-link to="/withdraw">Withdraw</router-link>
      <router-link to="/transfer">Transfer</router-link>
    </div>

    <!-- Page Content -->
    <div class="content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f8f9fa;
  padding-top: 20px;
}

.sidenav a {
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: #000;
}

.sidenav a:hover {
  background-color: #ccc;
}

.content {
  margin-left: 250px; /* Match the width of the sidenav */
  padding: 20px;
}
</style>