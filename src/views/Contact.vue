<template>
  <div class="about">
    <Banner/>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Contact',
  components: {
    Banner,
    Nav
  }
}
</script>