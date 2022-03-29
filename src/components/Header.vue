<template>
  <div>
    <img class="logo" src="../assets/logo.png" />
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/AboutUs">About Us</router-link>
    <a href="#">Contact Us</a>
    <router-link to="/SignUp">Sign Up</router-link>
    <a style="float: right" v-on:click="logout" href="#">Logout</a>
  </div>
  <br>
  </div>
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
.nav {
  background-color: #2196F3;
  overflow: hidden;
}

.nav a {
  float: left;
  color: white;
  padding: 14px 14px;
  text-align: centre;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}

.nav a:hover {
  color: black;
  background-color: #0b7dda;
}

body {
  background: whitesmoke;
  padding: 0;
  margin:0;
}


</style>