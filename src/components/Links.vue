<template>
    <section>
        <div class="container">
            <a :href="linkedin" target="_blank">
                <img :src="linkedinIcon" alt="LinkedIn" />
            </a>
            <a :href="github" target="_blank">
                <img :src="githubIcon" alt="Github" />
            </a>
            <a :href="email">
                <img :src="emailIcon" alt="Email" />
            </a>
        </div>
    </section>
</template>

<script lang="ts">
import EmailIcon from '@/icons/email.svg';
import GithubIcon from '@/icons/github.svg';
import LinkedinIcon from '@/icons/linkedin.svg';

export default {
    data() {
        return {
            email: "mailto:matteo.gisondi@gmail.com",
            emailIcon: EmailIcon,
            github: "https://github.com/MatteoGisondi",
            githubIcon: GithubIcon,
            linkedin: "https://www.linkedin.com/in/matteo-gisondi/",
            linkedinIcon: LinkedinIcon,
        };
    },
};
</script>

<style scoped>
.container {
    justify-content: space-evenly;
}

a {
    margin: 10px;
}

@media screen and (max-width: 800px) {
    .container {
        align-items: center;
    }

    a {
        margin: 5px;
    }
}

img {
    width: 80%;
    will-change: transform;
    transition: transform 0.3s ease-out;
}

img:hover {
    transform: scale(1.1);
}
</style>
