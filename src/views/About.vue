<template>
    <Nav/>
    <div class="content">
      <AboutMe/>
      <Langages/>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Langages from '@/components/Langages.vue'
import AboutMe from '@/components/AboutMe.vue'

export default {
  name: 'About',
  components: {
    Nav,
    Langages,
    AboutMe
  }
}
</script>

<style scoped>
  img {
    width: 620px;
    left: 20px;
    opacity: 0.8;
    position: absolute;
  }
</style>