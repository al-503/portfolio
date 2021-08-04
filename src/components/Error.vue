<template>
  <h1><span>404</span> Oups . . .</h1>
  <router-link to="/">Accueil</router-link>
</template>

<script>

export default {
  name: 'Error',
}
</script>

<style scoped>

@media all and (min-width: 1024px) and (max-width: 1920px) {

  h1 {
    font-family: 'Bebas Neue', cursive;
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
}

@media all and (min-width: 600px) and (max-width: 1024px) {

  h1 {
    font-family: 'Bebas Neue', cursive;
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
}

@media all and (min-width: 320px) and (max-width: 600px) {
  h1 {
    font-family: 'Bebas Neue', cursive;
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
}

</style>