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

<style scoped>
.content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow: hidden;
}

.projects {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
    grid-gap: 1em;
    list-style: none;
    justify-items: center;
    align-items: flex-start;
}

.projects-li {
    box-sizing: border-box;
    width: 100%;
    max-width: 16em;
    height: 11em;
    vertical-align: top;
    list-style: none;
    margin: 1em 0 0 0;
    padding: 0.5em;
    overflow: hidden;
    text-overflow: ellipsis;
}

.projects-a {
    height: 11em;
    border-top: 0.5em solid hsl(0, 0%, 94%);
    display: block;
    color: hsl(0, 0%, 0%);
    text-decoration: none;
    padding: 0 0.5em 0 0;
    margin: 0;
    font-size: 1.3em;
    font-weight: 400;
    transition: border-top-color 0.3s ease-out;
}

/* Remove the hover effect on mobile */
@media screen and (min-width: 800px) {
    .projects-a:hover {
        border-top: 0.5em solid hsl(0, 0%, 0%);
        transition: border-top-color 0.1s ease-out;
    }
}

.projects-lang {
    color: hsl(0, 0%, 900%);
    font-size: 0.8em;
    margin: 0.2em 0 0 0;
}

.projects-desc {
    color: hsl(0, 0%, 100%);
    text-overflow: inherit;
}
</style>
