<template>
  <h1 style="padding-top: 50px;">Welcome back!<br> Login here :)</h1>
  <form class="login">
    <input type="text" v-model="email" placeholder="Enter Email" /> <br>
    <input type="password" v-model="password" placeholder="Enter Password" /> <br>
    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/">Don't have an account? Create a new one here!</router-link
      >
    </p>
  </form>
</template>


<script>
export default {
  name: "Login",
    methods: {
        async login() {
            alert("Login Successful!");
        }
    }
}
</script>


<style>
form input {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  width: 30%;
  background: #f1f1f1;
  margin: 10px;
}

button {
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  margin: 10px;
}

form button {
  width: 10%;
}

form button:hover {
  background: #0b7dda;
  border-left: none;
}
</style>