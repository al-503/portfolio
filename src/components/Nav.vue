<template>
  <div id="nav">
    <router-link to="/about">Projets</router-link> |
    <router-link to="/">Accueil</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view/>
</template>

<script>
  export default {
    name: 'Nav',
  }
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap');

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-family: 'Zen Tokyo Zoo', cursive;
  font-weight: normal 400;
  color: #afcae671;
  text-decoration: none;

}

#nav a.router-link-exact-active {
  color: #4268b9;
  text-decoration: none;
  text-shadow: 0em 0em 0.5em rgb(0, 0, 0), 0em 0em 0.2em rgb(20, 6, 230), 0em 0em 0.1em rgb(0, 0, 0);
}
</style>
