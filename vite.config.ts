import { fileURLToPath, URL } from 'node:url';

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            "@/assets": fileURLToPath(new URL('./src/assets', import.meta.url)),
            "@/components": fileURLToPath(new URL('./src/components', import.meta.url)),
            "@/public": fileURLToPath(new URL('./public', import.meta.url)),
            "@/router": fileURLToPath(new URL('./src/router', import.meta.url)),
            "@/types": fileURLToPath(new URL('./src/types', import.meta.url)),
            "@/views": fileURLToPath(new URL('./src/views', import.meta.url)),
        },
    },
});
