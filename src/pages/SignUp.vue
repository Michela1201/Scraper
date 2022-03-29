<template>
  <h1>Make a new account here <br> and <b>start saving now!</b></h1>
  <form class="register">
    <input type="text" v-model="name" placeholder="Enter Name" /><br><br>
    <input type="text" v-model="email" placeholder="Enter Email" /><br><br>
    <input type="password" v-model="password" placeholder="Enter Password" /><br><br>
    <button v-on:click="signUp">Sign Up</button>
    <p>Already have an account? <router-link to="/HelloWorld">Login here</router-link></p>
  </form>
</template>

<script>
export default {
    name: "SignUp",
}
</script>

<style scoped>
h1 {
  color: #0b7dda;
}

/* Style the search field */
form input {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  width: 30%;
  background: #f1f1f1;
}

/* Style the submit button */
button {
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
}

form button {
  width: 10%;
}

button:hover {
  background: #0b7dda;
  border-left: none;
}

/* Clear floats */
::after {
  content: "";
  clear: both;
  display: table;
}
</style>