<template>
  <div class="body">
    <img class="logo" src="../assets/picture/logo.png" alt="Vue.js">

    <div class="text">
      <h1 class="mt ho">Ridray Axel</h1>
      <h2 class="mt ho"><span>Web Developpeur - Junior</span></h2>
      <router-link id="button" to="/projects">Projets</router-link>
      <Social/>
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
import Social from "@/components/Social.vue";

  export default {
    name: 'Axel',

    components: { Social },

    methods: {
      say: function (message) {
        alert(message)
      }
    }
  }
</script>


<style scoped>


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

  .ho {
    cursor: default;
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