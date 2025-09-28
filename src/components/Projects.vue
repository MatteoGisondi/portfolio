<template>
    <section>
        <h1 class="section-header">Projects</h1>
        <div class="container">
            <ul>
                <li v-for="repo in repos" :key="repo.id">
                    <a :href="repo.html_url" target="_blank">
                        <div class="repo">{{ repo.name }}</div>
                        <div class="lang">{{ repo.language ? repo.language : "&nbsp;" }}</div>
                        <div class="desc">{{ repo.description }}</div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
import type { Repo } from '@/types/Repo.ts';

export default {
    data() {
        return {
            username: "MatteoGisondi",
            repos: [] as Repo[],
        };
    },
    async mounted() {
        const cachedRepos = localStorage.getItem("repos");
        if (cachedRepos) {
            this.repos = JSON.parse(cachedRepos);
            return;
        }
        const response = await fetch(
            `https://api.github.com/users/${this.username}/repos`
        );
        if (response.ok) {
            const data: Repo[] = await response.json();
            this.repos = data.filter(repo => !repo.fork);
            localStorage.setItem("repos", JSON.stringify(this.repos));
        } else {
            console.error(
                `Failed to fetch repos (status ${response.status})`
            );
        }
    },
};
</script>

<style scoped>
ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
}

li {
    box-sizing: border-box;
    width: 100%;
    max-width: 16em;
    height: 11em;
    vertical-align: top;
    list-style: none;
    margin: 1em 0.5em 0 0.5em;
    padding: 0.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    /* make text fit full line length */
    text-justify: inter-word;
}

a {
    border-top: 0.5em solid var(--tertiary);
    color: hsl(0, 0%, 0%);
    display: flex;
    flex-direction: column;
    font-size: 1.3em;
    font-weight: 400;
    height: 11em;
    margin: 0;
    padding: 0;
    text-decoration: none;
    transition: border-top-color 0.3s ease-out;
}

a:hover {
    border-top: 0.5em solid var(--light-grey);
    transition: border-top-color 0.1s ease-out;
}

.repo {
    color: var(--text-dark);
    font-size: 1.1em;
    font-weight: 500;
    margin: 0.2em 0 0 0;
}

.lang {
    color: var(--grey);
    font-size: 0.8em;
}

.desc {
    color: var(--light-grey);
    font-size: 0.7em;
    text-overflow: inherit;
}

@media screen and (max-width: 800px) {
    ul {
        flex-direction: column;
    }

    li {
        width: auto;
        max-width: none;
    }
}
</style>
