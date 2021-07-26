<template>
  <div class="langages">
    <div class="langage">
      <h3>Front End</h3>
        <ul>
          <li>notion de Vue.js</li>
          <li> Base de Javascript</li>
          <li>HTML</li>
          <li>CSS et notion de SCSS</li>
        </ul>
    </div>

    <div class="langage">
        <h3>Back End</h3>
        <ul>
          <li>Ruby on Rails</li>
        </ul> 
    </div>
  </div>
</template>

<script>
  export default {
  name: 'Langages',
}
</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300&display=swap');
  .langages {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 4%x;
    width: 35%;
  }

  .langage {
    font-family: 'Noto Sans JP', sans-serif;
    color: #4268b9;
    justify-content: center;
    align-items: center;
    margin: 16px;
    padding: 4px;
    
  }
  ul {
    margin: 0 auto;
    padding: 0px;
  }

  h3 {
    margin: 5px auto;
    font-size: 25px;
    font-weight: 400;
    font-family: 'Bebas Neue', cursive;
  }

  li {
    list-style: none;
    color: #4268b9;
    font-weight: 900;
    padding: 8px;
  }
</style>
