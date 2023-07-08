<template>
    <header>
        <h2 class="logo">{{ title }}</h2>
        <input type="checkbox" id="nav-toggle" class="nav-toggle" @click="toggleNav" :checked="navOpen" />
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/resume">Resume</router-link></li>
            </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label" :class="{
                'spin-clockwise': navOpen,
                'spin-anticlockwise': !navOpen,
            }">
            <span></span>
        </label>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            navOpen: false,
        };
    },
    methods: {
        toggleNav() {
            this.navOpen = !this.navOpen;
        },
        closeNav() {
            this.navOpen = false;
        },
    },
    mounted() {
        window.addEventListener('click', (event) => {
            if (!this.$el.contains(event.target)) {
                this.closeNav();
            }
        });
    },
    beforeUnmount() {
        window.removeEventListener('click', this.closeNav);
    },
    created() {
        this.$router.beforeEach((_to, _from, next) => {
            this.navOpen = false;
            next();
        });
    },
});
</script>

<style scoped>
header {
    background: var(--background);
    background-color: var(--card-background);
    text-align: center;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

h2 {
    margin: 0;
}

.nav-toggle {
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
}

.spin-clockwise {
    animation: spin-clockwise 0.5s ease-in-out 1;
}

.spin-anticlockwise {
    animation: spin-anticlockwise 0.5s ease-in-out 1;
}

@keyframes spin-clockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(180deg);
    }
}

@keyframes spin-anticlockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-180deg);
    }
}

.nav-toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 1em;
    height: 100%;
    display: flex;
    align-items: center;
}

.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after {
    display: block;
    background: hsl(0, 0%, 100%);
    height: 2px;
    width: 2em;
    border-radius: 2px;
    position: relative;
}

.nav-toggle-label span::before,
.nav-toggle-label span::after {
    content: "";
    position: absolute;
}

.nav-toggle-label span::before {
    bottom: 7px;
}

.nav-toggle-label span::after {
    top: 7px;
}

.gradient {
    background: linear-gradient(to right, hsla(220, 16%, 22%, 0.8), hsla(220, 16%, 22%, 0));
}

nav {
    position: absolute;
    text-align: left;
    top: 100%;
    left: 0;
    background: var(--background);
    width: 100%;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 400ms ease-in-out;
}

nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

nav li {
    margin-bottom: 1em;
    margin-left: 1em;
    background: var(--background);
}

nav a {
    color: hsl(0, 0%, 100%);
    text-decoration: none;
    font-size: 1.2rem;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
}

nav a:hover {
    color: hsl(0, 0%, 0%);
}

.nav-toggle:checked~nav {
    transform: scale(1, 1);
}

.nav-toggle:checked~nav a {
    opacity: 1;
    transition: opacity 250ms ease-in-out 250ms;
}

@media screen and (min-width: 800px) {
    header {
        display: grid;
        grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
    }

    .nav-toggle-label {
        display: none;
        border: none;
    }

    .logo {
        grid-column: 2 / 3;
    }

    nav {
        position: relative;
        text-align: left;
        transition: none;
        transform: scale(1, 1);
        background: none;
        top: initial;
        left: initial;
        grid-column: 3 / 4;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    nav ul {
        display: flex;
    }

    nav li {
        margin-left: 3em;
        margin-bottom: 0;
    }

    nav a {
        opacity: 1;
        position: relative;
    }

    nav a::before {
        content: "";
        display: block;
        height: 5px;
        background: hsl(0, 0%, 0%);
        position: absolute;
        top: -0.75em;
        left: 0;
        right: 0;
        transform: scale(0, 1);
        transition: transform ease-in-out 250ms;
    }

    nav a:hover::before {
        transform: scale(1, 1);
    }
}
</style>
