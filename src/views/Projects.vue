<template>
  <Nav/>

  <div class="projects">
    <Project
      v-for="project in projects"
      :key="project.title"
      :project="project"
    />
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue'
  import Project from '@/components/Project.vue'


  export default {
    components: {
      Nav,
      Project
    },
    data () {
      return {
        projects: [
          {
           title: 'Col.',
           desc: 'Progressive Web App pour aider les utilisateurs pour trouver une colocation .',
           src: require('../assets/picture/col3.png'),
           web: 'https://www.col.eu.com/',
          },
          {
           title: 'Retro_World',
           desc: 'Maquette Web type Air BnB sur la location de console .',
           src: require('../assets/picture/RetroGaming200.png'),
           web: 'https://app-6777a89c-5d50-47a4-86c2-31abf2b27210.cleverapps.io',
          },
        ]
      }
    }
  }
</script>

<style scoped>

  .projects {
    margin: 80px auto;
    width: 60%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center
  }

@media all and (min-width: 600px) and (max-width: 1024px) {

  .projects {
    flex-direction: column;
  }
  
}
</style>