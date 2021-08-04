<template>
  <h2>Compétences</h2>

  <div class="langages">
      <div class="langage">
        <h3>Front End</h3>
          <ul>
            <li>- notion de Vue.js</li>
            <li>- Base de Javascript</li>
            <li>- HTML</li>
            <li>- CSS et notion de SCSS</li>
          </ul>
      </div>

      <div class="langage">
        <h3>Back End</h3>
          <ul>
            <li> - Ruby on Rails</li>
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

  .langages {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-right: 4%;
    margin-left: 4%;
    width: auto;
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
    color:#2c3e50;
    font-family: 'Bebas Neue', cursive;
  }

  li {
    list-style: none;
    color: #4268b9;
    font-weight: 900;
    padding: 8px;
  }

@media all and (min-width: 600px) and (max-width: 1024px) {

    .langages {
    display: flex;
    justify-content: space-around;
    margin: 4% auto;
    margin-right: 4%;
    margin-left: 4%;
    width: auto;
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
    color:#2c3e50;
    font-family: 'Bebas Neue', cursive;
  }

  li {
    list-style: none;
    color: #4268b9;
    font-weight: 900;
    padding: 8px;
  }
}

@media all and (min-width: 320px) and (max-width: 600px) {
    .langages {
    display: flex;
    justify-content: space-around;
    margin: 4% auto;
    margin-right: 4%;
    margin-left: 4%;
    width: auto;
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
    color:#2c3e50;
    font-family: 'Bebas Neue', cursive;
  }

  li {
    list-style: none;
    color: #4268b9;
    font-weight: 900;
    padding: 8px;
  }
}

</style>
