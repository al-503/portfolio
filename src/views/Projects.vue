<template>
  <Nav/>
  <Projetcol/>
  <Projetretro/>
</template>

<script>
  import Nav from '@/components/Nav.vue'
  import Projetcol from '@/components/Projetcol.vue'
  import Projetretro from '@/components/Projetretro.vue'

  export default {
    components: {
      Nav,
      Projetcol,
      Projetretro,
    }
  }
</script>
