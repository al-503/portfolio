<template>
  <div class="home">
    <Banner/>
    <Nav/>
      <div class="content">
        <div class="presentation">
          <h3>Présentation</h3>
          <p>Bonjour, je m'appelle Axel j'ai 26 ans et en 2021 en pleine pandémie
             j'ai pris conscience que le métier que j'exercer depuis mes 17 ans ne m'épanouissais plus
             et de fil en aiguille j'en suis venu à me reconvertir.</p>
        </div>

        <div class="resto">
          <h3>La Restauration</h3>
          <img class="logoWagon" src="../assets/picture/leWagon.png" alt="photo cuisine">
          <p>‌J'ai découvert la restauration assez jeune puisque c'est le métier de mes parents,
             J'ai cependant commencé par un apprentissage avant de partir en restauration,
             Ce qui ma attire avant tout dans ce métier c'est la possibilité de créer d'un part visuellement grâce au "dressage",
             mais aussi au niveau du goût là où ça ne se voit pas.</p>
        </div>

        <div class="code">
          <h3>Learn To code Change your life !</h3>
          <img src="" alt="logo le wagon">
          <p>Jusqu'à la période du confinement m'obligeant à m'arrêter mon métier était ma seule occupation,
             bien qu'intéresser par ce qui touche le web ce n'est qu'a ce moment que j'ai pu "mettre les mains dedans"
             en farfouillant je suis tomber sur l'inspecteur de code. 
             Voulant en savoir plus j'ai fini par apprendre le HTML/CSS en autodidacte par le biais de Open Classroms
             j'y ai littéralement passé des journées entières passionnées par cette nouvelle façon de créé,
             c'est à ce moment que l'idée d'une reconversion a fait son chemin car en effet je n'étais plus du tout en phase avec la restauration que ce soit d'un point de vue professionnel ou personnel
             après une mure réflexion et plein de doutes j'ai fini par franchir le pas.
             Le Bootcamp du wagon est rapidement apparue comme une formation complète me permettant d'approfondir le front-end
             et de commencer à percer les mystères du back end (ou pas) </p>
        </div>
      </div>
  </div>
</template>

<style>
  .logoWagon{
    
  }
</style>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Nav
  }
}
</script>
