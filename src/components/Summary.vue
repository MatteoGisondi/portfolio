<template>
    <section>
        <div class="container">
            <div class="content">
                <div class="text">
                    <p>
                        I'm a Software Engineer / SRE with a passion for
                        homelabbing. I care about clean code and best practices,
                        and I strive to write maintainable and scalable code.
                    </p>
                    <p>
                        I value digital sovereignty, which is why I've
                        been working at OVHcloud for two years as an SRE. My
                        primary responsibilities are managing and supporting
                        OpenStack deployments at scale.
                    </p>
                    <p>
                        Within my Home Lab, I deploy various
                        open source solutions, including noteworthy
                        services like, <a href="https://jellyfin.org/" target="_blank">Jellyfin</a>,
                        <a href="https://nextcloud.com/" target="_blank">Nextcloud</a>,
                        and <a href="https://www.vaultwarden.ca/" target="_blank">Vaultwarden</a>
                        deployed via Docker, behind a <a href="https://tailscale.com/" target="_blank">Tailnet</a>,
                        reverse proxied via <a href="https://doc.traefik.io/traefik/" target="_blank">Traefik</a>.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
p {
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 300;
    text-align: justify;
    text-justify: inter-word;
    hyphens: auto;
    margin-bottom: 1rem;
    margin-bottom: 20px;
}

a {
    text-decoration: dotted underline var(--tertiary);
    color: var(--text-dark);
    background-image: linear-gradient(to bottom, var(--tertiary) 0%, var(--tertiary) 100%);
    background-size: 0% 3px;
    background-repeat: no-repeat;
    background-position: right bottom;
    transition: background-size 0.8s ease;

    &:hover {
        background-size: 100% 3px;
        background-position: left bottom;
    }
}

.content {
    background: var(--primary);
    padding: 4rem;
    border-radius: 20px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.text {
    font-size: 1.1em;
    color: var(--text-dark);
}

@media screen and (max-width: 800px) {
    .content {
        padding: 2rem;
    }
}
</style>
