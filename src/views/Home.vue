<template>
  <div class="home">
    <Nav/>
    <Axel/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Axel from '@/components/Axel.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Axel
  }
}
</script>
