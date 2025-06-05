<template>
    <div class="socials">
        <a class="socials-link" :href="linkedin" target="_blank">
            <img class="socials-icon" :src="linkedinIcon" alt="LinkedIn" />
        </a>
        <a class="socials-link" :href="github" target="_blank">
            <img class="socials-icon" :src="githubIcon" alt="Github" />
        </a>
        <a class="socials-link" :href="email">
            <img class="socials-icon" :src="emailIcon" alt="Email" />
        </a>
    </div>
</template>

<script lang="ts">
import EmailIcon from '@/icons/email.svg';
import GithubIcon from '@/icons/github.svg';
import LinkedInIcon from '@/icons/linkedin.svg';

export default {
    name: "Socials",
    data() {
        return {
            email: "mailto:matteo.gisondi@gmail.com",
            emailIcon: EmailIcon,
            github: "https://github.com/MatteoGisondi",
            githubIcon: GithubIcon,
            linkedin: "https://www.linkedin.com/in/matteo-gisondi/",
            linkedinIcon: LinkedInIcon,
        };
    },
};
</script>

<style scoped>
.socials {
    display: flex;
    justify-content: space-between;
}

.socials-link {
    margin: 10px;
}

@media screen and (max-width: 800px) {
    .socials {
        flex-direction: column;
        align-items: center;
    }

    .socials-link {
        margin: 5px;
    }
}

.socials-icon {
    will-change: transform;
    transition: transform 0.3s ease-out;
}

.socials-icon:hover {
    transform: scale(1.1);
}
</style>
