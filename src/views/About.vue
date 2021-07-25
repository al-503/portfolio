<template>
    <Nav/>
    <div class="content">
       
      <div class="texte">
        <p> Salut ! Je m'appelle Axel, ancien cuisinier en 2021 je me suis reconvertie
            dans le développement Web grâce à la formation du wagon et
            je m'intéresse aux Front End mais j'apprécie aussi le Back end !
        </p>
        <div class="langages">
          <div class="langage">
            <h3>Front End</h3>
              <ul>
                <li>notion de Vue.js</li>
                <li> Base de Jvascript</li>
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
      </div>
    </div>

</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'About',
  components: {
    Nav
  }
}
</script>

<style scoped>
  p {
    font-size: 30px;
    width: 490px;
    font-weight: 600;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
  }

  .portrait {
    width: 500px;
  }

  .langages {
    display: flex;
    justify-content: space-around;
  }

  .langage {
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
    font-size: 28px;
  }

  li {
    list-style: none;
    color: #4268b9;
    font-weight: 900;
    padding: 8px;
  }

</style>