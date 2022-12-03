<script setup>
const classes = {
  ul: "projects",
  a: "projects-a",
  li: "projects-li",
  lang: "projects-lang",
  desc: "projects-desc"
};

const username = "MatteoGisondi";

const repoXHR = new XMLHttpRequest();

function populate() {
  const repos = JSON.parse(this.response);
  const ul = document.getElementsByClassName(classes.ul)[0];

  for (var i = 0, len = repos.length; i < len; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const p = document.createElement("p");
    const p2 = document.createElement("p");

    li.className = classes.li;

    a.className = classes.a;
    a.href = repos[i].html_url;
    a.innerText = repos[i].name;

    p.className = classes.lang;
    p.innerText = repos[i].language || " ";

    p2.className = classes.desc;
    p2.innerText = repos[i].description;

    ul.appendChild(li)
      .appendChild(a)
      .appendChild(p)
      .appendChild(p2);
  }
}
repoXHR.open(
  "GET",
  `https://api.github.com/users/${username}/repos`,
  true
);
repoXHR.addEventListener("load", populate);
repoXHR.send();
</script>

<template>
  <h1>Projects</h1>
  <div class="content">
    <ul class="projects"></ul>
  </div>
</template>

<style>
.projects {
  margin: 0;
  padding: 0;
  position: relative;
  top: 2em;
}

.projects-li {
  box-sizing: border-box;
  width: 16em;
  height: 11em;
  vertical-align: top;
  display: inline-block;
  list-style: none;
  margin: 1em 0 0 1em;
  padding: .5em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.projects-li:nth-child(3n-2) {
  margin: 1em 0 0 0;
}

.projects-a {
  height: 11em;
  border-top: .5em solid hsl(0, 0%, 94%);
  display: block;
  color: hsl(0, 0%, 0%);
  text-decoration: none;
  padding: 0 .5em 0 0;
  margin: 0;
  font-size: 1.3em;
  font-weight: 400;
}

.projects-a:hover {
  border-top: .5em solid hsl(0, 0%, 0%);
}

.projects-lang {
  color: hsl(0, 0%, 900%);
  font-size: .8em;
  margin: .2em 0 0 0;
}

.projects-desc {
  color: hsl(0, 0%, 100%);
  text-overflow: inherit;
}
</style>
