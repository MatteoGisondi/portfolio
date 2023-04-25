<template>
    <div class="wrapper">
        <div class="card" style="background-color: hsl(220, 16%, 22%)">
            <h3>Summary</h3>
            <p>
                I am a Concordia University Software Engineering graduate with a
                love for all things deployment.
            </p>
        </div>
        <div class="card" style="background-color: hsl(222, 16%, 28%)">
            <h3>DevOps</h3>
            <p>
                My interest in DevOps is driven by my need to tinker. I have a
                passion for learning and mastering tools like Docker, Kubernetes
                and Ansible.
            </p>
        </div>
        <div class="card" style="background-color: hsl(220, 17%, 32%)">
            <h3>Deployment</h3>
            <p>
                I have my own Home Lab! It isn't much, but I have several Docker
                containers deployed including this site. Notable mentions
                include:
            </p>
            <ul>
                <li>Traefik</li>
                <li>PiHole</li>
                <li>Jellyfin</li>
                <li>Nextcloud</li>
                <li>Vaultwarden</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
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

@media (max-width: 800px) {
    .card {
        padding: 2rem;
        max-width: 100%;
    }

    .wrapper .card:not(:last-child) {
        margin-right: 0;
    }
}
</style>
