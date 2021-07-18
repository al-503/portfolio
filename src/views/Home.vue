<template>
  <div class="home">
    <Banner/>
    <Nav/>
    <Bio/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Nav from '@/components/Nav.vue'
import Bio from '@/components/Bio.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Nav,
    Bio
  }
}
</script>
