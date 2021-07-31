<template>
  <div class="body">
    <img class="logo" src="../assets/picture/logo.png" alt="Vue.js">

    <div class="text">
      <h1 class="mt ho">Ridray Axel</h1>
      <h2 class="mt ho"><span>Web Developpeur - Junior</span></h2>
      <router-link id="button" to="/projects">Projets</router-link>
    
      <ul>
        <li v-on:click="say('axel.ridray@sfr.fr')"><i class="far fa-envelope"></i></li>
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

    methods: {
      say: function (message) {
        alert(message)
      }
    }
  }
</script>


<style scoped>
     /* Media pour desktop*/
@media all and (min-width: 1024px) and (max-width: 1920px) {
  

  .portrait {
    width: 41%;
    opacity: 0.9;
    margin-right: 150px;
    animation: fadein 14s;
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
    height: auto;
    width: auto;
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
    color: #4268b9;
    text-decoration: none;
    border: solid #4268b9;
    margin-left: 5em;
    animation: fadein 18s;
  }

  #button:hover{
    color: #4268b9;
    border: solid #4268b9;
  }

  .ho {
    cursor: default;
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

  .fa-envelope {
    cursor: pointer;
  }

  h1 {
    animation: fadein 2s;
  }

  span {
    animation: fadein 8s;
  }

  @keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
}
    /*fin de la query desktop*/ 

    /*Media pour tablette*/

@media all and (min-width: 600px) and (max-width: 1024px) {

  .portrait {
    position: relative;
    top: 70px;
    width: 72%;
    opacity: 0.9;
  }

  p {
    color:#87a0bb;/*#afcae6e1*/ 
    font-size: 2em;
    font-weight: bold;
    /*text-shadow: -1px -1px 0px rgb(37, 32, 32);*/
  }

  .logo {
    position: absolute;
    top: 1%;
    left: 16px;
    background-image: url('/assets/picture/logo.png');
    width: 6%;
  }

  .body {
    height: auto;
    width: auto;
  }

  .mt{
    margin-top: 35px;
    margin-bottom: 30px;
  }

  .text {
    margin: 8% auto;
    text-align: center;
    font-weight: bold 900;
  }

  #button {
    font-family: 'Bebas Neue', cursive;
    width: 500px;
    padding: 8px 16px 8px 16px;
    border-radius: 25px;
    color: #0a75e9e1;
    text-decoration: none;
    border: solid #0a75e9e1;
  }

  span {
    margin-bottom: 20px;
  }

   ul {
    width: 25%;
    margin: 25px auto;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  i {
    color: #4268b9;
    font-size: 30px;
    margin-top: 20px;
  }
 
} /* fin des media tablettes*/

  /* media for phone*/
@media all and (min-width: 320px) and (max-width: 600px) {

  .body {
    margin: 16% auto;
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  
  .portrait {
    position: relative;
    width: 70%;
    opacity: 0.9;
  }

  p {
    color:#87a0bb;/*#afcae6e1*/ 
    font-size: 2em;
    font-weight: bold;
    /*text-shadow: -1px -1px 0px rgb(37, 32, 32);*/
  }

  .logo {
    position: absolute;
    top: 1%;
    left: 16px;
    background-image: url('/assets/picture/logo.png');
    width: 6%;
  }


  .mt{
    margin-top: 35px;
    margin-bottom: 30px;
  }

  .text {
    margin: 0px auto;
    text-align: center;
    font-weight: bold 900;
  }

  #button {
    font-family: 'Bebas Neue', cursive;
    width: 500px;
    padding: 8px 16px 8px 16px;
    border-radius: 25px;
    color: #0a75e9e1;
    text-decoration: none;
    border: solid #0a75e9e1;
  }

  span {
    margin-bottom: 20px;
  }

   ul {
    width: auto;
    margin: 5px auto;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  i {
    color: #4268b9;
    font-size: 30px;
    margin-top: 20px;
  }
   
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