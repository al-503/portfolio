<template>
  <Nav/>
  <h1>ici portfolio</h1>
  <Inportfolio/>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Inportfolio from '@/components/Inportfolio.vue'

export default {
  name: 'Portfolio',
  components: {
    Nav,
    Inportfolio
  }
}
</script>