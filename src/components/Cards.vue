<template>
    <div class="wrapper">
        <div class="card" style="background-color: hsl(220, 16%, 24%)">
            <h3>About Me</h3>
            <p>
                Hi! I'm a Software Engineer / SRE with a passion for
                homelabbing. I wield a diverse range of programming
                skills to build innovative solutions. I care about
                clean code and best practices.
            </p>
        </div>
        <div class="card" style="background-color: hsl(222, 16%, 28%)">
            <h3>Career</h3>
            <p>
                I value digital sovereignty, which is why I've
                been working at OVHcloud for two years as an SRE. My
                primary responsibilities are managing and supporting
                Openstack deployments at scale.
            </p>
        </div>
        <div class="card" style="background-color: hsl(220, 17%, 32%)">
            <h3>Home Lab</h3>
            <p>
                Within my Home Lab, I deploy various
                opensource solutions, including noteworthy
                services like Tailscale/Headscale, Traefik,
                the *arr Stack, Jellyfin, Nextcloud, and Vaultwarden
                deployed under docker or kube.
            </p>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
}

p {
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 300;
    text-align: justify;
    text-justify: inter-word;
    hyphens: auto;
}

.wrapper {
    display: flex;
    color: hsl(0, 0%, 100%);
    padding: 2rem;
    background: var(--background);
    overflow: hidden;
    flex-wrap: wrap;
}

.wrapper:after {
    content: "";
    min-width: 2rem;
}

.card {
    padding: 6rem;
    border-radius: 1rem;
    box-shadow: -1rem 0 1rem hsla(0, 0%, 0%, 0.2);
    position: relative;
    transition: all 0.2s ease-out;
    text-align: left;
    flex: 1 1 100%;
    margin-bottom: 1rem;
    max-width: calc(100% - 2rem);
}

.card:not(:last-child) {
    margin-right: -4rem;
}

.card:hover {
    margin-right: -1rem;
    transform: translate(0, -1rem);
}

h3 {
    margin-top: 0;
}

p {
    margin-bottom: 1rem;
}

ul {
    margin-top: 0.5rem;
    margin-bottom: 0;
    padding-left: 1rem;
}

li {
    margin-bottom: 0.5rem;
}

@media screen and (max-width: 800px) {
    .card {
        padding: 2rem;
        max-width: 100%;
    }

    .wrapper .card:not(:last-child) {
        margin-right: 0;
    }
}
</style>
