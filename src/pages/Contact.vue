<template>
  <h1>Contact</h1>
  <div class="content">
    <div class="socials">
      <a href="https://www.linkedin.com/in/matteo-gisondi-b09662197/">
        <img src="../icons/linkedin.svg">
      </a>
      <a href="https://github.com/MatteoGisondi">
        <img src="../icons/github.svg">
      </a>
      <a href="mailto:matteo.gisondi@gmail.com">
        <img src="../icons/email.svg">
      </a>
    </div>
  </div>
</template>

<style scoped>
.socials {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 2em;
}

.socials a {
  margin: 20px 0px 0px 20px;
  flex: 2;
}

.socials img:hover {
  transform-origin: 50% 50%;
  -webkit-transform: scale(1.1);
  -webkit-transition: -webkit-transform 0.5s ease;
  -moz-transform: scale(1.1);
  -moz-transition: -moz-transform 0.5s ease;
  transform: scale(1.1);
  transition: -webkit-transform 0.5s ease;
}
</style>
