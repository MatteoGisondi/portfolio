<template>
    <h1>Projects</h1>
    <div class="content">
        <ul class="projects">
            <li v-for="repo in repos" :key="repo.id" class="projects-li">
                <a :href="repo.html_url" class="projects-a">
                    {{ repo.name }}
                    <div class="projects-lang">{{ repo.language }}</div>
                    <div class="projects-desc">{{ repo.description }}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const username = "MatteoGisondi";

interface Repo {
    id: number;
    html_url: string;
    name: string;
    language: string;
    description: string;
}

const repos = ref<Repo[]>([]);

onMounted(() => {
    // Check if repos data is already present in localStorage
    const cachedRepos = localStorage.getItem("repos");
    if (cachedRepos) {
        repos.value = JSON.parse(cachedRepos);
    } else {
        const repoXHR = new XMLHttpRequest();
        repoXHR.open(
            "GET",
            `https://api.github.com/users/${username}/repos`,
            true
        );
        repoXHR.onload = function () {
            if (repoXHR.readyState === 4 && repoXHR.status === 200) {
                repos.value = JSON.parse(repoXHR.response);
                // Store repos data in localStorage for future use
                localStorage.setItem("repos", JSON.stringify(repos.value));
            }
        };
        repoXHR.send();
    }
});
</script>

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
