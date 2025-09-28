<template>
    <section>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Here's a picture of my dogs instead:</p>
        <img src="@/assets/images/dogs.png" alt="A picture of my dog" />
    </section>
</template>

<script lang="ts">
export default {
    name: "NotFound",
};
</script>

<style scoped>
img {
    width: 100%;
}
</style>
