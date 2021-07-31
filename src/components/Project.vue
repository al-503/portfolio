<template>
  <a :href="project.web">
    <div class="project">
      <div class="border">
      <!------insert picture whit data in vue.js----->
        <img :src="project.src"/>

        <div class="line">
          <h2>{{ project.title }}</h2>
        </div>

        <div class="project-text">
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

  img {
    margin: 5px auto;
    width: 150px;
    height: 150px;
    background-color: #4268b9;
  }

  .line {
    margin: 4px auto;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 50%;
  }

  h2 {
    font-family: 'Bebas Neue', cursive;
    margin: 0 auto;
    font-size: 16px;
  }

  p {
    text-align: justify;
    padding: 4px;
    margin: 4px;
    font-weight: 400;
    font-family: 'Noto Sans JP', sans-serif;
    padding: 8px;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

</style>
