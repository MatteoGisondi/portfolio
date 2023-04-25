<template>
    <div class="socials">
        <a class="socials-link" :href="linkedin" target="_blank">
            <img
                class="socials-icon"
                src="@icons/linkedin.svg"
                alt="LinkedIn"
            />
        </a>
        <a class="socials-link" :href="github" target="_blank">
            <img class="socials-icon" src="@icons/github.svg" alt="GitHub" />
        </a>
        <a class="socials-link" :href="'mailto:' + email">
            <img class="socials-icon" src="@icons/email.svg" alt="Email" />
        </a>
    </div>
</template>

<script lang="ts">
export default {
    name: "Socials",
    data() {
        return {
            linkedin: "https://www.linkedin.com/in/matteo-gisondi-b09662197/",
            github: "https://github.com/MatteoGisondi",
            email: "matteo.gisondi@gmail.com",
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

@media (max-width: 800px) {
    .socials {
        flex-direction: column;
        align-items: center;
    }

    .socials-link {
        margin: 5px;
    }
}

.socials-icon:hover {
    transform-origin: 50% 50%;
    transform: scale(1.1);
    transition: transform 0.5s ease-out;
}
</style>
