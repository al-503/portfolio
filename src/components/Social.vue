<template>
  <div class="reseaux">
    <ul>
        <li v-on:click="say('axel.ridray@sfr.fr')"><i class="far fa-envelope"></i></li>
        <li><a href="https://github.com/al-503" target="_blank"><i class="fab fa-github-square"></i></a></li>
        <li><a href="https://www.linkedin.com/in/axel-ridray-045733205/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Social'
  }
</script>

<style scoped>
   ul {
    position: relative;
    top: 140px;
    right: 236px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
  }

  i {
    color: #4268b9;
    font-size: 30px;
    margin-top: 20px;
  }

  .fa-envelope {
    cursor: pointer;
  }
</style>