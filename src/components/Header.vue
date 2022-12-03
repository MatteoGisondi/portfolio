<template>
  <header>
    <h2 class="logo">Matteo Gisondi</h2>
    <input type="checkbox" id="nav-toggle" class="nav-toggle" />
    <nav>
      <ul>
        <li><a href="#/">Home</a></li>
        <li><a href="#/contact">Contact</a></li>
        <li><a href="#/projects">Projects</a></li>
        <li><a href="#/resume">Resume</a></li>
      </ul>
    </nav>
    <label for="nav-toggle" class="nav-toggle-label">
      <span></span>
    </label>
  </header>
</template>

<style scoped>
header {
  background: var(--background);
  background-color: var(--card-background);
  text-align: center;
  position: fixed;
  z-index: 999;
  width: 100%;
}

.nav-toggle {
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
}

.nav-toggle:focus ~ .nav-toggle-label {
  outline: 3px solid hsla(195, 53%, 79%, 0.75);
}

.nav-toggle-label {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 1em;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after {
  display: block;
  background: hsl(0, 0%, 100%);
  height: 2px;
  width: 2em;
  border-radius: 2px;
  position: relative;
}

.nav-toggle-label span::before,
.nav-toggle-label span::after {
  content: "";
  position: absolute;
}

.nav-toggle-label span::before {
  bottom: 7px;
}

.nav-toggle-label span::after {
  top: 7px;
}

nav {
  position: absolute;
  text-align: left;
  top: 100%;
  left: 0;
  background: var(--background);
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 400ms ease-in-out;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  margin-bottom: 1em;
  margin-left: 1em;
}

nav a {
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
}

nav a:hover {
  color: hsl(0, 0%, 0%);
}

.nav-toggle:checked ~ nav {
  transform: scale(1, 1);
}

.nav-toggle:checked ~ nav a {
  opacity: 1;
  transition: opacity 250ms ease-in-out 250ms;
}

@media screen and (min-width: 800px) {
  .nav-toggle-label {
    display: none;
  }

  header {
    display: grid;
    grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
  }

  .logo {
    grid-column: 2 / 3;
  }

  nav {
    position: relative;
    text-align: left;
    transition: none;
    transform: scale(1, 1);
    background: none;
    top: initial;
    left: initial;

    grid-column: 3 / 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  nav ul {
    display: flex;
  }

  nav li {
    margin-left: 3em;
    margin-bottom: 0;
  }

  nav a {
    opacity: 1;
    position: relative;
  }

  nav a::before {
    content: "";
    display: block;
    height: 5px;
    background: hsl(0, 0%, 0%);
    position: absolute;
    top: -0.75em;
    left: 0;
    right: 0;
    transform: scale(0, 1);
    transition: transform ease-in-out 250ms;
  }

  nav a:hover::before {
    transform: scale(1, 1);
  }
}
</style>
