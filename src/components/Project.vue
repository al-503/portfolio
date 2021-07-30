<template>
  <a :href="project.web">
    <div class="project">
      <!------insert picture whit data in vue.js----->
      <img :src="project.src" class="image"/>

      <div class="project-text">
        <h2>{{ project.title }}</h2>
        <p>{{ project.desc }}</p>
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
  .lang {
    width: 8%;
  }
  .project {
    margin: 8px auto;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    width: 400px;
    height: 22%;
    border-radius: 2%;
    box-shadow: 2px 2px 2px #4268b9;
    background-color: #c2d5ff;
  }

  .project:hover {
    box-shadow: 2px 2px 1px #4268b9, 3px 3px 4px #4268b9;
  }

  .image {
    width: 30%;
    height: 30%;
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
