<template>
  <div class="banner">
    <div class="name">
      <h1>Axel Ridray</h1>
      <h2>Développeur Web - Junior</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
  }
</script>


<style scoped>
  .banner {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    background-image: url("../assets/picture/st-malo.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 300px;
    text-align: center;
  }
  .name {
    color: white;
    margin: 0 auto;
    text-shadow: 0em 0em 0.5em rgb(0, 0, 0);
  }
</style>