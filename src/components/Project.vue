<template>
  <a :href="project.web">
    <div class="project">
      <div class="border">
      <!------insert picture whit data in vue.js----->
        <img :src="project.src" class="image"/>

        <div class="project-text">
          <h2>{{ project.title }}</h2>
          <p>{{ project.desc }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'project',
    props: ['project']
  }
</script>

<style scoped>

  .project {
    margin: 4px auto;
    width: 210px;
    height: 310px;
    padding: 2px;
    background-color: white;
    border-radius: 2px;
    
  }

  .border {
    margin: 4px auto;
    width: 200px;
    height: 300px; 
    background-color: #ffffff;
    border: 1px solid blue;
  }

  .image {
    width: 20%;
    height: 20%;
    padding: 4px;
  }

  h2 {
    font-family: 'Bebas Neue', cursive;
    margin: 4px auto;
  }

  p {
    text-align: justify;
    padding: 4px;
    margin: 4px;
    font-weight: 400;
    font-family: 'Noto Sans JP', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
