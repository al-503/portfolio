<template>
  <div class="body">
    <div class="text">
      <p> hey i'm </p>
      <h1 class="mt">Ridray Axel</h1>
      <h2 class="mt"><span class="autotext">Cooking Chef</span><span class="cursor" :class="{'typing':typeStatus}">&nbsp;</span></h2>
      <router-link id="button" to="/contact">Contact</router-link>
    </div>
    <!--<div class="group">--->
    <img src="../assets/picture/axel1det.png" alt="axel">
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

  img {
    width: 56%;
    opacity: 0.9;
    max-height: 700px;
  }
  p {
    color:#87a0bb;/*#afcae6e1*/ 
    font-size: 2em;
    font-weight: bold;
    /*text-shadow: -1px -1px 0px rgb(37, 32, 32);*/
  }
  .body {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .mt{
    margin-top: 35px;
    margin-bottom: 30px;
  }

  .text {
    text-align: justify;
    margin-left: 60px;
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

  span.autotext {
    color: black;
  }

  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 2px;
    background-color: black;
    animation: cursorBlink 1s infinite;/*step-end*/
  }

  span.cursor.typing {
    animation: none;
  }

  @keyframes cursorBlink{
    49%{ background-color: black; }
    50%{ background-color: transparent; }
    99%{ background-color: transparent; }
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