<template>
  <h1><span>404</span> Not Found . . .</h1>
  <router-link to="/">Back Home</router-link>
</template>

<script>

export default {
  name: 'Error',
}
</script>

<style scoped>

  h1 {
    text-align: center;
    margin-top: 5em;
    color: rgb(22, 22, 126);
    text-shadow:0px 0px 1px rgb(0, 0, 77), 0px 0px 1px rgba(22, 22, 126, 0.363), 0px 0px 1px rgba(0, 0, 0);
  }

  span {
    font-size: 10em;
  }

  a {
    text-decoration: none;
    font-size: 2em;
    font-weight: 800;
    border: solid rgb(22, 22, 126, 0.247);
    color: rgba(22, 22, 126, 0.247);
    padding: 12px;
    border-radius: 25px;
  }

  a:hover {
    border: solid rgb(0, 0, 255);
    color: rgb(0, 0, 255);
  }
</style>