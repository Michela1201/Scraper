<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="padding: 0; margin: 0; border: none;">
    <div class="container-fluid">

      <img class="navbar-brand-img" src="../assets/favicon.png" />
      <a class="navbar-brand" href="#" style="padding-left: 30px; pointer-events: none;">PriceScanner</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <a a href="#">About Us</a>
          </li>

          <li class="nav-item">
            <a a href="#">Contact</a>
          </li>

          <li class="nav-item">
            <a v-on:click="logout" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>


<style scoped>
.container-fluid {
  background-color: #2196F3;
  overflow: hidden;
}

.container-fluid a,
.navbar-brand {
  float: left;
  color: gold;
  padding: 14px 14px;
  text-align: centre;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}

.container-fluid a:hover {
  color: white;
  background-color: #0b7dda;
  border-radius: 30px;
}

.navbar-brand-img {
  width: 30px;
  height: 35px;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>