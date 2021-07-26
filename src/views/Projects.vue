<template>
  <Nav/>
  <Project
    v-for="project in projects"
    :key="project.title"
    :project="project"
  />
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
           web: 'https://www.col.eu.com/'
          },
          {
           title: 'Retro_World',
           desc: 'Maquette Web type Air BnB sur la location de console .',
           src: require('../assets/picture/RetroGaming200.png'),
           web: 'app-6777a89c-5d50-47a4-86c2-31abf2b27210.cleverapps.io',
          },
        ]
      }
    }
  }
</script>
