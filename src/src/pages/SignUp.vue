<template>
  <h1 style="padding-top: 50px;">Make a new account here <br> and <b>start saving now!</b></h1>
  <form class="register">
    <input type="text" v-model="name" placeholder="Enter Name" /><br>
    <input type="text" v-model="email" placeholder="Enter Email" /><br>
    <input type="password" v-model="password" placeholder="Enter Password" /><br>
    <button v-on:click="signUp">Sign Up</button>
    <p>Already have an account? <router-link to="/HelloWorld">Login here</router-link></p>
  </form>
</template>


<script>
export default {
  name: "SignUp",
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