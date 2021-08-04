<template>
    <p> Salut ! Je m'appelle Axel, ancien cuisinier en 2021 je me suis reconvertie
        dans le développement Web grâce à la formation du wagon et
        je m'intéresse aux Front End mais j'apprécie aussi le Back end !
    </p>
</template>

<script>
  export default {
  name: 'AboutMe',
}
</script>

<style scoped>

@media all and (min-width: 1024px) and (max-width: 1920px) {

  p {
    width: 50%;
    font-size: 25px;
    font-weight: 600;
    margin: 5px auto;
    margin-bottom: 60px;
    margin-top: 8%;
    padding: 16px;
    font-family: 'Noto Sans JP', sans-serif;
  }
}

@media all and (min-width: 600px) and (max-width: 1024px) {

  p {
    width: auto;
    font-size: 25px;
    font-weight: 600;
    margin: 5px auto;
    margin-bottom: 60px;
    margin-top: 8%;
    padding: 16px;
    font-family: 'Noto Sans JP', sans-serif;
  }
}

@media all and (min-width: 320px) and (max-width: 600px) {
  p {
    width: auto;
    font-size: 25px;
    font-weight: 600;
    margin: 5px auto;
    margin-bottom: 60px;
    margin-top: 8%;
    padding: 16px;
    font-family: 'Noto Sans JP', sans-serif;
  }
}
</style>
