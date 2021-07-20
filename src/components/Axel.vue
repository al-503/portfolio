<template>
  <div class="text">
    <p> hey i'm </p>
    <h1 class="mt">Ridray Axel</h1>
    <h2 class="mt">Web Développeur Junior</h2>
    <router-link id="button" to="/about">About</router-link>
  </div>
  <div class="group">
    <div class="bublle one"></div>
    <div class="bublle two"></div>
    <div class="bublle three"></div>
    <div class="bublle four"></div>
    <div class="bublle five"></div>
  </div>
  <img src="../assets/picture/axel1det.png" alt="axel">
</template>

<script>
  export default {
    name: 'Axel',
  }
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  img {
    border-radius: 50%;
    width: 600px;
    height: 480px;
    opacity: 1;
  }
  p {
    color: #afcae6e1;
  }
  .mt{
    margin-top: 25px;
  }
  .bublle{
    width: 480px;
    height: 480px;
    border-radius: 50%;
     background-color: rgb(49, 209, 209); 
    box-shadow: inset -3em -3em 3em rgba(10, 9, 66, 0.26), inset 0em 0em 0.5em rgba(15, 29, 36, 0.671), inset 0em 0em 5em rgb(10, 10, 32);
  }
  .one {
    width: 480px;
    height: 480px;
  }
  .two {
    width: 240px;
    height: 240px;
  }
  .three {
    width: 120px;
    height: 120px;
  }
  .four {
    width: 60px;
    height: 60px;
  }
  .five {
    width: 30px;
    height: 30px;
  }
  .text {
    text-align: justify;
  }
  #button {
    font-family: 'Bebas Neue', cursive;
    width: 500px;
    padding: 8px 16px 8px 16px;
    border-radius: 25px;
    color: #afcae6e1;
    text-decoration: none;
    border: solid #afcae6e1;
    margin-left: 5em;
  }
  #button:hover{
    color: #4268b9;
    border: solid #4268b9;
  }
</style>