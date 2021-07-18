<template>
  <div class="content">
        <div class="presentation">
          <h3>Présentation</h3>
          <p>Bonjour, je m'appelle Axel j'ai 26 ans et en 2021 en pleine pandémie
             j'ai pris conscience que le métier que j'exercer depuis mes 17 ans ne m'épanouissais plus
             et de fil en aiguille j'en suis venu à me reconvertir.</p>
        </div>

        <h3>La Restauration</h3>
        <div class="resto">
          ‌<img class="axel" src="../assets/picture/axel-cuisine.jpg" alt="photo cuisine 2018">
          <p>J'ai découvert la restauration assez jeune puisque c'est le métier de mes parents,
             J'ai cependant commencé par un apprentissage avant de partir en restauration,
             Ce qui ma attire avant tout dans ce métier c'est la possibilité de créer d'un part visuellement grâce au "dressage",
             mais aussi au niveau du goût là où ça ne se voit pas.</p>
        </div>

        <h3>Learn To code Change your life !</h3>
        <div class="code">
          <img class="wagon" src="../assets/picture/leWagon.png" alt="logo le wagon">
          <p>
             Jusqu'à la période du confinement m'obligeant à m'arrêter mon métier était ma seule occupation,
             bien qu'intéresser par ce qui touche le web ce n'est qu'a ce moment que j'ai pu "mettre les mains dedans"
             en farfouillant je suis tomber sur l'inspecteur de code. 
             Voulant en savoir plus j'ai fini par apprendre le HTML/CSS en autodidacte par le biais de Open Classroms
             j'y ai littéralement passé des journées entières passionnées par cette nouvelle façon de créé,
             c'est à ce moment que l'idée d'une reconversion a fait son chemin car en effet je n'étais plus du tout en phase avec la restauration que ce soit d'un point de vue professionnel ou personnel
             après une mure réflexion et plein de doutes j'ai fini par franchir le pas.
             Le Bootcamp du wagon est rapidement apparue comme une formation complète me permettant d'approfondir le front-end
             et de commencer à percer les mystères du back end (ou pas)
          </p>
        </div>
      </div>
</template>

<script>
  export default {
    name: 'Bio',
  }
</script>


<style scoped>
  .wagon {
    width: 150px;
    height: 150px;
    float: left;
    margin-top: 2em;
  }
  .axel {
    width: 150px;
    height: 200px;
    border-radius: 10px;
  }
  .content {
    margin: 0 auto;
    margin-top: 25px;
    width: 50%;
  }
  .resto {
    display: flex;
  }
  .code {
    display: flex;
  }
  h3 {
    color: #4268b9;
    text-shadow: 0em 0em 0.5em rgb(0, 0, 0), 0em 0em 0.2em rgb(20, 6, 230), 0em 0em 0.1em rgb(0, 0, 0);
    margin-top: 40px;
  }
  img {
    margin-right: 8px; 
  }
  p {
    display: block;
    color: rgb(201, 207, 255);
    margin-top: 0;
    padding-top: 30px;
    padding-left: 15px;
  }
</style>