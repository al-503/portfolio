<template>
  <a :href="project.web">
    <div class="project">

    <!------insert picture whit data in vue.js----->
      <img  :src="project.src"/>
    
      <div class="line">
        <h2>{{ project.title }}</h2>
      </div>

      <div class="card-content">
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

@media all and (min-width: 1024px) and (max-width: 1920px) {

  .project {
    margin: 8% auto;
    width: 210px;
    height: 310px;
    padding: 2px;
    background-color: rgb(255, 255, 255);
    border-radius: 2px;
    transition: transform 500ms ease;
    overflow: hidden;
  }

  .project:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0 2px rgb(82, 83, 163);
  }

  .project:hover .card-content {
    transform: translateY(0);
    transition: transform 500ms ease;
  }

  .project:hover img {
    transform: translateY(0);
    transition: transform 500ms ease;
  }

  .project:hover .line {
    transform: translateY(0);
    transition: transform 500ms ease;
  }

  img {
    margin: 5px auto;
    width: 150px;
    height: 150px;
    background-color: #373e4d;
    transform: translateY(20%);
    transition: transform 500ms ease;
  }

  .line {
    margin: 20px auto;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 50%;
    transform: translateY(100%);
    transition: transform 500ms ease;
  }

  h2 {
    font-family: 'Bebas Neue', cursive;
    margin: 2px auto;
    font-size: 16px;
  }

  .card-content {
    transform: translateY(80%);
    transition: transform 500ms ease;
  }

  p {
    text-align: justify;
    margin: 18px auto;
    font-weight: 400;
    font-family: 'Noto Sans JP', sans-serif;
    padding: 8px;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 0 auto;
  }
}

@media all and (min-width: 600px) and (max-width: 1024px) {

  .project {
    margin: 8% auto;
    width: 210px;
    height: 370px;
    padding: 2px;
    background-color: rgb(255, 255, 255);
    border-radius: 2px;
  }

  img {
    margin: 16px auto;
    width: 180px;
    height: 180px;
    background-color: #373e4d;
  }

  .line {
    margin: 20px auto;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 70%;
  }

  h2 {
    font-family: 'Bebas Neue', cursive;
    margin: 2px auto;
    font-size: 16px;
  }

  p {
    text-align: justify;
    margin: 18px auto;
    font-weight: 400;
    font-family: 'Noto Sans JP', sans-serif;
    padding: 8px;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 0 auto;
  }
}

@media all and (min-width: 320px) and (max-width: 600px) {

  .project {
    margin: 8% auto;
    width: 210px;
    height: 370px;
    padding: 2px;
    background-color: rgb(255, 255, 255);
    border-radius: 2px;
  }

  img {
    margin: 16px auto;
    width: 180px;
    height: 180px;
    background-color: #373e4d;
  }

  .line {
    margin: 20px auto;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 70%;
  }

  h2 {
    font-family: 'Bebas Neue', cursive;
    margin: 2px auto;
    font-size: 16px;
  }

  p {
    text-align: justify;
    margin: 18px auto;
    font-weight: 400;
    font-family: 'Noto Sans JP', sans-serif;
    padding: 8px;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 0 auto;
  }
}

</style>
