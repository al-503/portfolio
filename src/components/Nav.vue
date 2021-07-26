<template>
  <div id="nav">
    <router-link to="/"> Accueil </router-link> 
    <router-link to="/about"> A Propos </router-link> 
    <router-link to="/projects"> Projets </router-link> 
  </div>
  <router-view/>
</template>

<script>
  export default {
    name: 'Nav',
  }
</script>


<style scoped>

#nav {
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  margin-left:60%;
  position: sticky;
}

a {
  padding: 4px;
}

#nav a {
  font-family: 'Bebas Neue', cursive;
  font-weight: normal 400;
  font-size: 28px;
  color: #afcae6e1;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #4268b9;
  text-decoration: none;
}
</style>
