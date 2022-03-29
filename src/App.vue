<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <Header />
  <router-view></router-view>
  <!-- <HelloWorld />  His is the first page -->
</template>

<script>
import Header from './components/Header.vue';


export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
