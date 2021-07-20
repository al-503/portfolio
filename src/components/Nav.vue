<template>
  <div id="nav">
    <router-link to="/"> Home </router-link> 
    <router-link to="/about"> About Me </router-link> 
    <router-link to="/portfolio"> Portfolio </router-link> 
    <router-link to="/contact"> Contact </router-link>
  </div>
  <router-view/>
</template>

<script>
  export default {
    name: 'Nav',
  }
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

#nav {
  text-align: center;
  display: flex;
  justify-content: flex-end;
}

a {
  padding: 4px;
}

#nav a {
  font-family: 'Bebas Neue', cursive;
  font-weight: normal 400;
  color: #afcae6e1;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #4268b9;
  text-decoration: none;
}
</style>
