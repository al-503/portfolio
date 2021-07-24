<template>
    <Nav/>
    <div class="content">
      <img class="portrait" src="" alt="axel">
       
      <div class="texte">
        <p> Hey ! i'm axel a Web Developper Front end Junior.
            After 10 years work in a kitchen, 
            in a pandemic time i decide to change my life to became a développer 
        </p>
        <div class="langages">
          <div class="langage">
            <h3>Front End</h3>
              <ul>
                <li>notion of Vue.js</li>
                <li>Jvascript</li>
                <li>HTML</li>
                <li>CSS and notion of SCSS</li>
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
    width: 400px;
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
  }

  .langage {
    color: blue;
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
    color: blue;
    font-weight: 900;
  }

</style>