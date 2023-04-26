<template>
    <h1>Page Not Found</h1>
    <div class="content">
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Here's a picture of my dogs instead:</p>
        <img src="@assets/dogs.png" alt="A picture of my dog" />
    </div>
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
