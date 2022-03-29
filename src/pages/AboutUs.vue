<template>
  <div>
    <h1>Welcome to the about us page</h1>
    <p>This is the about us page</p>

    <line-chart :data="{'2017-05-13': 2, '2017-05-14': 5, '2017-05-15': 2, '2017-05-16': 5,'2017-05-17': 2, '2017-05-18': 5,'2017-05-19': 2, '2017-05-20': 5,}"></line-chart>
  </div>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped>

</style>