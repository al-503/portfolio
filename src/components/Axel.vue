<template>
  <div class="body">
    <img class="logo" src="../assets/picture/logo.png" alt="Vue.js">

    <div class="text">
      <p> hey i'm </p>
      <h1 class="mt">Ridray Axel</h1>
      <h2 class="mt"><span>Web Developpeur Junior</span></h2>
      <router-link id="button" to="/projects">Projects</router-link>
      <ul>
          <li><i class="far fa-envelope"></i></li>
          <li><a href="https://github.com/al-503" target="_blank"><i class="fab fa-github-square"></i></a></li>
          <li><a href="https://www.linkedin.com/in/axel-ridray-045733205/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
      </ul>
    </div>
    <!--<div class="group">--->
    <img class="portrait" src="../assets/picture/axeldet3.png" alt="axel">
      <!--<div class="bublle five"></div>-->
      <!--<div class="bublle four"></div>-->
      <!--<div class="bublle three"></div>-->
      <!--<div class="bublle two"></div>-->
      <!--<div class="bublle one"></div>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'Axel',
  }
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  .portrait {
    width: 41%;
    opacity: 0.9;
    margin-right: 150px;
  }

  p {
    color:#87a0bb;/*#afcae6e1*/ 
    font-size: 2em;
    font-weight: bold;
    /*text-shadow: -1px -1px 0px rgb(37, 32, 32);*/
  }

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

  .logo {
    position: absolute;
    top: 20px;
    left: 16px;
    background-image: url('/assets/picture/logo.png');
    width: 3%;
  }

  .body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mt{
    margin-top: 35px;
    margin-bottom: 30px;
  }

  .text {
    text-align: justify;
    margin-left: 200px;
    font-weight: bold 900;
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

 
 

  

  /*test des bulle bleu mais annuler car un peu kitsh*/
  /*.bublle{
    position: absolute;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    background-color: rgb(49, 209, 209); 
    box-shadow: inset -3em -3em 3em rgba(10, 9, 66, 0.26), inset 0em 0em 0.5em rgba(15, 29, 36, 0.671), inset 0em 0em 5em rgb(10, 10, 32);
  }
  .one {
    top: 180px;
    right: 25px;
    width: 480px;
    height: 480px;
  }
  .two {
    top: 180px;
    right: 25px;
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
  }*/
</style>