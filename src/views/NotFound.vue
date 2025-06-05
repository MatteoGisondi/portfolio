<template>
    <h1>Page Not Found</h1>
    <div class="content">
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Here's a picture of my dogs instead:</p>
        <img :src="dogs" alt="A picture of my dog" />
    </div>
</template>

<script lang="ts">
import Dogs from '@/assets/dogs.webp';

export default {
    name: "NotFound",
    data() {
        return {
            dogs: Dogs,
        }
    }
};
</script>

<style scoped>
img {
    width: 100%;
}
</style>
