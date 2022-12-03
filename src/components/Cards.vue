<template>
  <div class="wrapper">
    <div class="card" style="background-color: hsl(220, 16%, 22%);">
      <h3>Summary</h3>
      <p>I am a soon-to-be Concordia University Software
        Engineering grad with a love for all things deployment.</p>
    </div>
    <div class="card" style="background-color: hsl(222, 16%, 28%);">
      <h3>DevOps</h3>
      <p>My interest in DevOps is driven by my need to tinker.
        I have a passion for learning and mastering tools like
        Kubernetes and Docker.</p>
    </div>
    <div class="card" style="background-color: hsl(220, 17%, 32%);">
      <h3>Deployment</h3>
      <p>
        I have my own Home Lab! It isn't much, but I have several
        Docker containers deployed inlcuding this site.
        Notable mentions include:
      <ul>
        <li>Traefik</li>
        <li>PiHole</li>
        <li>Jellyfin</li>
        <li>Nextcloud</li>
        <li>Vaultwarden</li>
      </ul>
      </p>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
}
.wrapper {
  display: flex;
  color: hsl(0, 0%, 100%);
  padding: 2rem;
  background: var(--background);
  overflow: auto;
}
.wrapper:after {
  content: '';
  min-width: 2rem;
}
.wrapper .card {
  padding: 6rem;
  border-radius: 1rem;
  box-shadow: -1rem 0 1rem hsla(0, 0%, 0%, 0.2);
  position: relative;
  transition: all 0.2s ease-out;
  text-align: left;
}
.wrapper .card:not(:last-child) {
  margin-right: -4rem;
}
.wrapper .card:hover {
  margin-right: -1rem;
  transform: translate(0, -1rem);
}
</style>
